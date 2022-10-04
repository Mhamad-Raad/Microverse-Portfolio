const projectsInfo = [
  {
    title: 'Hitex',
    desc: 'Hitex was a mini project in which I wanted to make a design that was shared by a UX/UI designer, and mention a little bit of information about Hitex.',
    langs: ['HTML', 'CSS', 'JavaScript'],
    cannopy: 'Hitex',
    imgCard: './assets/images/hitex.png"',
    job: 'Front-end Dev',
    live: 'https://mhamad-raad.github.io/Hitex/',
    source: 'https://github.com/Mhamad-Raad/Hitex',
  },
  {
    title: 'Facebook 360',
    desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    langs: ['Html', 'Css', 'Javascript'],
    imgCard: './assets/images/Portfolio1.png"',
    cannopy: 'FACEBOOK',
    job: 'Full Stack Dev',
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    langs: ['HTML', 'Ruby on rails', 'Javascript', 'CSS'],
    imgCard: './assets/images/Portfolio3.png',
    cannopy: 'FACEBOOK',
    job: 'Full Stack Dev',
    live: '#',
    source: '#',
  },
  {
    title: 'Tonic',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    langs: ['HTML', 'CSS', 'Javascript'],
    imgCard: './assets/images/Portfolio2.png',
    cannopy: 'CANOPY',
    job: 'Back End Dev',
    live: '#',
    source: '#',
  },
  {
    title: 'Uber Navigation',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    langs: ['HTML', 'Ruby on rails', 'Javascript', 'CSS'],
    imgCard: './assets/images/Portfolio4.png',
    cannopy: 'Uber',
    job: 'Lead Developer',
    live: '#',
    source: '#',
  },
];

const projects = document.querySelector('.works');
let index = 0;
projectsInfo.forEach((project) => {
  projects.innerHTML += `
          <div class="make-flex work-card">
            <img src="${project.imgCard}" class="work-img" alt="Portfolio Image">
            <div class="work-card-context">
              <h2 class="card-title">${project.title}</h2>
              <div class="make-grid work-categories">
                
                  
                <p class="canopy grid-item">${project.cannopy}</p>
             
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${project.job}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">2015</p>
              </div>
              <p class="card-description">Exploring the future of media in Facebook's first Virtual Reality app;
                 a place to discover and enjoy 360 photos and videos on Gear VR.</p>
          
                <ul class="card-languages">
                    ${project.langs.map((lang) => `<li class="language-bg card-language">${lang}</li>`).join('')} 
                </ul>
            
              <button onClick="ShowCloseModal(${index})" class="card-button btn">See Project</button>
            </div>
          </div>`;
  index += 1;
});

const cards = document.querySelectorAll('.work-card');
for (let i = 0; i < cards.length; i += 1) {
  if (i % 2 === 1) {
    cards[i].classList.add('reversed');
  }
}
