const modals = [
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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    langs: ['Html', 'Css', 'Javascript'],
    imgCard: './assets/images/Portfolio1.png"',
    cannopy: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: '2015',
  },
  {
    title: 'Multi-Post Stories',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
    langs: ['HTML', 'Ruby on rails', 'Javascript', 'CSS'],
    imgCard: './assets/images/Portfolio3.png',
    cannopy: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: '2015',
  },
  {
    title: 'Tonic',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
    langs: ['HTML', 'CSS', 'Javascript'],
    imgCard: './assets/images/Portfolio2.png',
    cannopy: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
  },
  {
    title: 'Uber Navigation',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
    langs: ['HTML', 'Ruby on rails', 'Javascript', 'CSS'],
    imgCard: './assets/images/Portfolio4.png',
    cannopy: 'Uber',
    job: 'Lead Developer',
    year: '2015',
  },
];

const modalSection = document.querySelector('.works');
for (let i = 0; i < modals.length; i += 1) {
  modalSection.innerHTML += `
          <div class="modal ">
              
          </div>
          <div class="modal-bg ">
              <h2 class="card-title modal-title">${modals[i].title}</h2>
              <i class="fa-solid fa-xmark modal-close"></i>

              <div class="make-grid work-categories">
                <p class="canopy grid-item">${modals[i].cannopy}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${modals[i].job}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${modals[i].year}</p>
              </div>
              
              <img src="${modals[i].imgCard}" class="work-img modal-img" alt="Portfolio Image">
              <div class="make-flex modal-structure">
                <p class="card-description modal-desc">${modals[i].desc}</p>
                <div>
                  <ul class="card-languages modal-languages">
                  ${modals[i].langs.map((lang) => `<li class="language-bg card-language">${lang}</li>`).join('')}
                  </ul>

                  <div class="modal-line"></div>

                  <div class="modal-btn-group">
                    <a href="${modals[i].live}"
                      <button onClick="" class="card-button btn modal-btn">See Live <i class="fa-sharp fa-solid fa-earth-americas"></i></button>
                    </a>
                    <a href="${modals[i].source}"
                      <button onClick="" class="card-button btn modal-btn">See Source <i class="fa-brands fa-github"></i></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>`;
}

const modal = document.querySelectorAll('.modal');

function ShowCloseModal(index) {
  if (index >= 0) {
    document.querySelectorAll('.modal')[index].style.display = 'block';
    document.querySelectorAll('.modal-bg')[index].style.display = 'flex';
    const modalClose = document.querySelectorAll('.modal-close')[index];
    modalClose.addEventListener('click', () => {
      modal[index].style.display = 'none';
      document.querySelectorAll('.modal-bg')[index].style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal[index]) {
        modal[index].style.display = 'none';
        document.querySelectorAll('.modal-bg')[index].style.display = 'none';
      }
    });

    window.addEventListener('touched', (e) => {
      if (e.target === modal[index]) {
        modal[index].style.display = 'none';
        document.querySelectorAll('.modal-bg')[index].style.display = 'none';
      }
    });
  } else {
    return 0;
  }
}
ShowCloseModal(-1);