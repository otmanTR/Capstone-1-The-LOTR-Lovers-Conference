const speakers = [
  {
    speakersImages: ['bersoy.webp', 'chuck_palahniuk_kapak_2-620x375.jpg'],
    speakersName: ['Bülent Ersoy', 'Chuck Palahniuk'],
    speakersTitle: ['Turkish Diva', 'Writer the Fight Club'],
    speakersTopic: ['How similar fantasy literature and fantasy music', 'A different look into Middle-earth'],
  },
];


document.getElementById('hamburgericon').onclick = () => {
document.getElementById('speakerImage').src = speakers[0].speakerImages[0];
document.getElementById('speakerName').innerHTML = speakers[0].speakersName[0];
document.getElementById('speakerTitle').innerHTML = speakers[0].speakersTitle[0];
document.getElementById('speakerTopic').innerHTML = speakers[0].speakersTopic[0];
}