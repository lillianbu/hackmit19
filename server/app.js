const express = require("express");
const path = require("path");
const api = require("./routes/api");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

//require('./routes')(app);

const publicPath = path.resolve(__dirname, "..", "client", "dist");

app.use("/api", api );

//app.use(express.static(publicPath));
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(express.static(publicPath));
app.use(express.urlencoded());
app.use(express.json());

http.listen(3000, () => {
	console.log(`Listening on port 3000 and looking in folder ${publicPath}`);
});

const { RevAiApiClient } = require('revai-node-sdk');
var accessToken = "02iwmNeyKMeo1GUBcrjQUJxBTHJA14Z83bq1ISFR_i_slryM-xwKOTvKUmLxl7octj-bMdQ4ye9d3BvFNzqE5ER-wVC4s";
var client = new RevAiApiClient(accessToken);
var in_progress = 0;
var musicPath = __dirname;
var fileTitle;

app.get('/getText', async (request, response) => {
	var jobs = await client.getListOfJobs();
	var jobDetails = await client.getJobDetails(jobs[0].id);
	console.log(jobs);
	console.log(jobs[0].id);
	if (jobDetails.status != "transcribed") { 
		response.send('Currently transcribing.');
	} else {
		var transcriptText = await client.getTranscriptText(jobs[0].id);
		in_progress = 0;
		response.send(transcriptText);
	}
})

app.post('/record', async (request, response) => {
	const title = request.body.title;
	fileTitle = title;
	musicPath = __dirname.concat("/audio/", title, ".mp3");
	// var job = await client.submitJobLocalFile(musicPath);
	console.log(title);
})

/*
navigator.mediaDevices.getUserMedia({audio:true}).then(stream => {handlerFunction(stream)})

function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
	    audioChunks.push(e.data);
	    if (rec.state == "inactive"){
	        let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
	        recordedAudio.src = URL.createObjectURL(blob);
	        recordedAudio.controls=true;
	        recordedAudio.autoplay=true;
	        sendData(blob)
    	}
    }
}*/