// Put event listeners into place
window.addEventListener("DOMContentLoaded", function() {
// Grab elements, create settings, etc.
var canvas = document.getElementById("canvas"),
context = canvas.getContext("2d"),
video = document.getElementById("videoElement"),
videoObj = { "video": true },
errBack = function(error) {
   console.log("Video capture error: ", error.code); 
};
// Put video listeners into place
if(navigator.getUserMedia) { // Standard
navigator.getUserMedia(videoObj, function(stream) {
video.src = stream;
video.play();
}, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
navigator.webkitGetUserMedia(videoObj, function(stream){
video.src = window.webkitURL.createObjectURL(stream);
video.play();
}, errBack);
} else if(navigator.mozGetUserMedia) { // WebKit-prefixed
navigator.mozGetUserMedia(videoObj, function(stream){
video.src = window.URL.createObjectURL(stream);
video.play();
}, errBack);
}
// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
context.drawImage(video, 0, 0, 640, 480);
// Littel effects
$('#videoElement').fadeOut('slow');
$('#canvas').fadeIn('slow');
$('#snap').hide();
$('#new').show();
// Allso show upload button
//$('#upload').show();
});
// Capture New Photo
document.getElementById("new").addEventListener("click", function() {
$('#videoElement').fadeIn('slow');
$('#canvas').fadeOut('slow');
$('#snap').show();
$('#new').hide();
});
// Upload image to sever 
document.getElementById("upload").addEventListener("click", function(){
var dataUrl = canvas.toDataURL();
$.ajax({
type: "POST",
url: "camsave.php",
data: { 
imgBase64: dataUrl
}
}).done(function(msg) {
console.log('saved');
// Do Any thing you want
});
});
}, false);