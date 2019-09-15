const express = require("express");
const path = require("path");
const api = require("./routes/api");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

//require('./routes')(app);

const publicPath = path.resolve(__dirname, "..", "client", "dist");

app.use("/api", api );
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

http.listen(3000, () => {
	console.log(`Listening on port 3000 and looking in folder ${publicPath}`);
});

const { RevAiApiClient } = require('revai-node-sdk');
var accessToken = "02iwmNeyKMeo1GUBcrjQUJxBTHJA14Z83bq1ISFR_i_slryM-xwKOTvKUmLxl7octj-bMdQ4ye9d3BvFNzqE5ER-wVC4s";
var client = new RevAiApiClient(accessToken);
var in_progress = 0;

app.get('/processText', async (request, response) => {
	var jsonObject = JSON.parse(body);
	var path = __dirname.concat("/audio/", jsonObject.title, ".mp3");
	let in_progress = 0;
	if (in_progress == 0) {
		var job = await client.submitJobLocalFile(path);
		in_progress = 1;
		// "/Users/Sayan/Desktop/hackmit19/hackmit19/server/audio/test_file.mp3"
		response.send('Processing Audio...');
	}
})

app.get('/getText', async (request, response) => {
	var jobs = await client.getListOfJobs();
	var jobDetails = await client.getJobDetails(jobs[0].id);
	if (jobDetails.status != "transcribed") { 
		response.send('Currently transcribing.');
	} else {
		var transcriptText = await client.getTranscriptText(jobs[0].id);
		in_progress = 0;
		response.sent(transcriptText);
	}
})

app.get('/record', (request, response) => {
	response.send(request);
})


// var job = await client.submitJobLocalFile("./audio/test_file.mp3");
// var transcriptText = await client.getTranscriptText(job.id);
// console.log(transcriptText)


