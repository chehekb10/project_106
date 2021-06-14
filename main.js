Webcam.set({
    width: 350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

