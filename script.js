const speakers = {
  speakersData: [
    {
      id: 1,
      image: 'images/speakers-images/speaker_01.png',
      name: 'Lamis Chebbi',
      status: 'Google Developer Expert',
      work: 'Has been into Angular for the past few years and loves to share her knowledge about Angular through workshops.',
    },
    {
      id: 2,
      image: 'images/speakers-images/speaker_02.png',
      name: 'Gil Fink',
      status: 'sparXys',
      work: 'A web development expert, Web Technologies GDE, Microsoft Development Technologies MVP, and sparXys CEO',
    },
    {
      id: 3,
      image: 'images/speakers-images/speaker_03.png',
      name: 'Martina Kraus',
      status: 'Kraus Consulting IT',
      work: 'Enthusiastic about implementing software solutions in Node.js and Angular.',
    },
    {
      id: 4,
      image: 'images/speakers-images/speaker_04.png',
      name: 'Joel Lord',
      status: 'MongoDB',
      work: 'As a developer advocate with MongoDB, he helps developers to make the web better by using best practices in JavaScript.',
    },
    {
      id: 5,
      image: 'images/speakers-images/speaker_05.png',
      name: 'Hans-Christian Otto',
      status: 'Suora',
      work: 'Founded Suora GmbH, which supports its customers in designing, building and modernizing web applications.',
    },
    {
      id: 6,
      image: 'images/speakers-images/speaker_06.png',
      name: 'Sebastian Springer',
      status: 'MaibornWolff GmbH',
      work: 'A JavaScript developer at MaibornWolff in Munich and is concerned with the architecture of client-side and server-side JavaScript.',
    },
  ],
};

let speakersSection = `<div class="speaker-header">
    <h2 class="text-center">Featured Speakers</h2>
    <div class="underline"></div>
    </div>
    <div class="speakers">`;
speakers.speakersData.forEach((speaker) => {
  speakersSection += `<div class="speakers-data">
    <div class="speaker-img">
      <img src="${speaker.image}" alt="apeaker image">
    </div>
    <div class="speaker-details">
      <h3 class="name">${speaker.name}</h3>
      <p class="status main-color">
        ${speaker.status}
      </p>
      <div class="line"></div>
      <p class="work">
        ${speaker.work}
      </p>
    </div>
  </div>`;
});
speakersSection += '</div></div>';
document.querySelector('.featured-speakers').innerHTML = speakersSection;