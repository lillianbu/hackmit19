const express = require("express");
const path = require("path");
const api = require("./routes/api");

const app = express();
const http = require("http").Server(app);
var navigator = require('web-midi-api');

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
	console.log("Listening on port 3000 and looking in folder ${publicPath}");
});

const { RevAiApiClient } = require('revai-node-sdk');
var accessToken = "02iwmNeyKMeo1GUBcrjQUJxBTHJA14Z83bq1ISFR_i_slryM-xwKOTvKUmLxl7octj-bMdQ4ye9d3BvFNzqE5ER-wVC4s";
var client = new RevAiApiClient(accessToken);
var in_progress = 0;
var musicPath = __dirname;

navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia || 
                            navigator.msGetUserMedia);

console.log(navigator.getUserMedia);


//MediaDevices.getUserMedia({audio:true}).then(stream => {handlerFunction(stream)})
//var job = await client.submitJobLocalFile("./audio/test_file.mp3");
//var transcriptText = await client.getTranscriptText(job.id);
// console.log(transcriptText)
app.get('/processText', async (request, response) => {
	// "/Users/Sayan/Desktop/hackmit19/hackmit19/server/audio/test_file.mp3"
	console.log(musicPath);
	if (in_progress == 0) {
		// var job = await client.submitJobLocalFile(path);
		in_progress = 1;
		response.send('Processing audio...');
	}
})

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

app.post('/record', (request, response) => {
	// response.send("record triggered");
	const title = request.body.title;
	musicPath = __dirname.concat("/audio/", title, ".mp3");
	console.log(title);
	// rec.start();
})

app.get('/stopRecord', (request, response) => {
	// response.send("record triggered");
	const title = request.body.title;
	musicPath = __dirname.concat("/audio/", title, ".mp3");
	console.log(title);
	// rec.start();
	})

	app.get('/stopRecord', (request, response) => {
	response.send("record ended");
	rec.stop();
})

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
}


