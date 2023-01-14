const popUp = document.querySelector('.popUp');
const hamburger = document.querySelector('.hamburger');
const popUpCancel = document.querySelector('.popUpCancel');

hamburger.addEventListener('click', () => {
  popUp.classList.add('active');
  popUp.style.display = 'flex';
});

function closePopUp() {
  popUp.classList.add('hidden');
  popUp.style.display = 'none';
}

popUpCancel.addEventListener('click', closePopUp);

const popUpItem = document.querySelector('.popUpItems');

popUpItem.addEventListener('click', closePopUp);

// speakers----

const speakerArea = document.querySelector('.speakerArea');

const speakers = [
  {
    speakersImages: 'BE.jpg',
    speakersName: 'Bülent Ersoy',
    speakersTitle: 'Turkish Diva',
    speakersTopic: 'How similar fantasy literature and fantasy music',
  },
  {
    speakersImages: 'Chuk.jpeg',
    speakersName: 'Chuck Palahniuk',
    speakersTitle: 'Writer the Fight Club',
    speakersTopic: 'A different look into Middle-earth',
  },
  {
    speakersImages: 'semihS.jpg',
    speakersName: 'Semih Saygıner',
    speakersTitle: 'Mr. Magic',
    speakersTopic: 'How help power rings to understand the physic',
  },
  {
    speakersImages: 'raskolnikov.jpg',
    speakersName: 'Rodion Romanoviç Raskolnikov',
    speakersTitle: 'Old Galley Prisoner',
    speakersTopic: 'How looks Middle-earth from ship window',
  },
  {
    speakersImages: 'hulk.jpg',
    speakersName: 'Hulk',
    speakersTitle: 'Hulk',
    speakersTopic: 'I would like to live in Middle-earth',
  },
  {
    speakersImages: 'Donald_Trump_official_portrait.jpg',
    speakersName: 'Donald Trump',
    speakersTitle: 'The Blond Guy',
    speakersTopic: 'How I managed the USA if I read the LOTR before',
  },
];

speakers.forEach((speaker) => {
  const newSpeaker = document.createElement('div');

  newSpeaker.classList.add('featuredSpeaker');

  newSpeaker.innerHTML = `
  <div class="eachSpeaker flex">
    <div class="speakerImage">
     <img class="speakersImages" src='${speaker.speakersImages}' alt=${speaker.speakersName}>
    </div>
    <div class="speakerInfo">
    <h4 class="speakerName">${speaker.speakersName}</h4>
    <h5 class="speakerTitle">${speaker.speakersTitle}</h5>
    <hr class="hrSpeaker"/>
    <p class="speakerTopic">${speaker.speakersTopic}</p>
    </div>
    </div>
     `;

  speakerArea.appendChild(newSpeaker);
});