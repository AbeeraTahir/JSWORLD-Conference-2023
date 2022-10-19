const speakers = {
  speakersData: [
    {
      id: 1,
      image: 'images/speakers-images/speaker_01.png',
      name: 'Yochai Benkler',
      status: 'Berkman Professor of Enterpreneurial Legal studies at Harvard Law School',
      work: 'Benkler studies commons-based peer production, and punlished his seminal book. The wealth of Networks in 2006',
    },
    {
      id: 2,
      image: 'images/speakers-images/speaker_02.png',
      name: 'Yochai Benkler',
      status: 'Berkman Professor of Enterpreneurial Legal studies at Harvard Law School',
      work: 'Benkler studies commons-based peer production, and punlished his seminal book. The wealth of Networks in 2006',
    },
    {
      id: 3,
      image: 'images/speakers-images/speaker_03.png',
      name: 'Yochai Benkler',
      status: 'Berkman Professor of Enterpreneurial Legal studies at Harvard Law School',
      work: 'Benkler studies commons-based peer production, and punlished his seminal book. The wealth of Networks in 2006',
    },
    {
      id: 4,
      image: 'images/speakers-images/speaker_04.png',
      name: 'Yochai Benkler',
      status: 'Berkman Professor of Enterpreneurial Legal studies at Harvard Law School',
      work: 'Benkler studies commons-based peer production, and punlished his seminal book. The wealth of Networks in 2006',
    },
    {
      id: 5,
      image: 'images/speakers-images/speaker_05.png',
      name: 'Yochai Benkler',
      status: 'Berkman Professor of Enterpreneurial Legal studies at Harvard Law School',
      work: 'Benkler studies commons-based peer production, and punlished his seminal book. The wealth of Networks in 2006',
    },
    {
      id: 6,
      image: 'images/speakers-images/speaker_06.png',
      name: 'Yochai Benkler',
      status: 'Berkman Professor of Enterpreneurial Legal studies at Harvard Law School',
      work: 'Benkler studies commons-based peer production, and punlished his seminal book. The wealth of Networks in 2006',
    },
  ],
};

let speakersSection = `<div class="speaker-header">
    <h2>Featured Speakers</h2>
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