const buttonMenu = document.querySelector('#header-button');
const buttonImage = document.querySelector('#header-button-image');

const navigationMenu = document.querySelector('#header-nav');
const navigationLinks = document.querySelectorAll('.header-list-item');

function toggleNavigation() {
  navigationMenu.classList.toggle('header-nav-active');
}

function changeButtonIcon(path) {
  buttonImage.src = path;
}
const navigationIcons = ['./assets/burguer.svg', './assets/x-icon.svg'];
navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    toggleNavigation();
    changeButtonIcon(navigationIcons[0]);
    buttonMenu.style.width = 'initial';
  });
});

buttonMenu.addEventListener('click', () => {
  const actualButtonIcon = buttonImage.src;

  if (actualButtonIcon.includes('burguer')) {
    changeButtonIcon(navigationIcons[1]);
    buttonMenu.style.width = '12px';
  } else {
    changeButtonIcon(navigationIcons[0]);
    buttonMenu.style.width = 'initial';
  }
  toggleNavigation();
});

// pop up window
/* Portfolio Section */

// PortfolioArray: Contains all the Information for each Portfolio Card.
const portfolioArray = [
  {
    id: '0',
    name: 'Tonic',
    profile: 'Canopy',
    categories: ['Back End Dev', '2015'],
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './assets/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
    class: '',
  },
  {
    id: '1',
    name: 'Multi-Post Stories',
    profile: 'Facebook',
    categories: ['Full Stack Dev', '2015'],
    description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './assets/colorful.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
    class: 'grid-reversed',
  },
  {
    id: '2',
    name: 'Facebook 360',
    profile: 'Facebook',
    categories: ['Full Stack Dev', '2015'],
    description:
        'Exploring the future of media in Facebook`s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './assets/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
    class: '',
  },
  {
    id: '3',
    name: 'Uber Navigation',
    profile: 'Uber',
    categories: ['Lead Developer', '2018'],
    description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './assets/Multi-post.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
    class: 'grid-reversed',
  },
];

const bodyElement = document.querySelector('#body');
const portfolioElement = document.querySelector('#portfolio');

function createWorkWindow(index) {
  const portfolioData = portfolioArray[index];

  const {
    name,
    profile,
    categories,
    description,
    image,
    technologies,
    live,
    source,
  } = portfolioData;

  const modalItem = document.createElement('div');
  modalItem.id = 'modal';
  modalItem.classList.add('modal');
  modalItem.innerHTML = `
            <article class="modal-card">
              <header class="modal-header">
                <h2 class="modal-title">${name}</h2>
                <button id="close-modal-button"  class="close-button">
                  <img
                    id="close-modal-button"
                    src="./assets/modalClosebutton.svg"
                    alt="close button"
                    class="close-button"
                  />
                </button>
              </header>
              <div class="modal-content">
                <div class="modal-profile">
                  <h3 class=" color-info">${profile}</h3>
                  <ul class="modal-list ">
                    ${categories
    .map((item) => `<img class="counter" src="./assets/Counter.png"></img><li class="modal-item">${item}</li>`)
    .join('')}
                  </ul>
                </div>
                <img
                  src="${image}"
                  alt="Work 1"
                  class="modal-image"
                />
               <div class="modal-details grid grid-uneven-two">
                <p class="modal-description">
                  ${description}
                </p>
                <div class="modal-details inner ">
                  <ul class="modal-tags ">
                    ${technologies
    .map((item) => `<li class="modal-tag">${item}</li>`)
    .join('')}
                  </ul>
                  <hr class="modal-divider" />
                  <div class="modal-actions flex-row">
                    <a
                      id="0"
                      href="${live}"
                      target="_blank"
                      class="button button-primary modal-button"
                      >See live 
                      <img
                        src="./assets/modalliveicons.svg"
                        alt="Live icon dark version"
                      /></a
                    >
                    <a
                      id="0"
                      href="${source}"
                      target="_blank"
                      class="button button-primary modal-button"
                      >See source
                        <img
                        src="./assets/modalgithub.svg"
                        alt="Github icon dark version"
                      />
                      </a
                    >
                  </div>
                </div>
               </div>
              </div>
            </article>
         `;

  bodyElement.style.overflow = 'hidden';
  bodyElement.appendChild(modalItem);

  const modalCloseButton = document.querySelector('#close-modal-button');
  modalCloseButton.addEventListener('click', () => {
    bodyElement.removeChild(modalItem);
    bodyElement.style.overflow = 'auto';
  });
}

// AddPortfolioWork(): Put every Portfolio Card to his container.
function addPortfolioWork() {
  portfolioElement.innerHTML = `
  ${portfolioArray
    .map(
      (item) => `<article class="portfolio-card" >
              <header class="portfolio-header ${item.class}">
                <img
                  src="${item.image}"
                  alt="Work 1"
                  class="portfolio-image"
                />
              </header>
              <div class="portfolio-content">
                <h2 class="portfolio-title ">${item.name}</h2>
                <div class="portfolio-profile">
                  <h3>${item.profile}</h3>
                  <ul class="portfolio-list">
                      ${item.categories
    .map(
      (item) => `<img class="counter" src="./assets/Counter.png"></img><li class="portfolio-item">${item}</li>`,
    )
    .join('')}
                  </ul>
                </div>
                <p class="primary-description">
                  ${item.description}
                </p>
                <ul class="portfolio-tags ">
                  ${item.technologies
    .map((item) => `<li class="portfolio-tag">${item}</li>`)
    .join('')}
                </ul>
                <div class="portfolio-actions">
                  <button
                    id="${item.id}"
                    href="#"
                    class="button button-primary portfolio-button"
                    >See project</button>
                </div>
              </div>
            </article>`,
    )
    .join('')}`;

  const portfolioButtons = document.querySelectorAll('.portfolio-button');
  portfolioButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.id;
      createWorkWindow(index);
    });
  });
}

// Called  the Function to fill the PortfolioElement.
addPortfolioWork();

// FORM VALIDATION
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

// convertToLower(emailInput);
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailLowerCase = emailInput.value.toLowerCase();
  const message = 'Email must be in lowercase';
  // If the validation is OK, the form is sent.
  if (emailInput.value === emailLowerCase) {
    errorMessage.textContent = '';
    form.submit();
  } else {
    // f the validation is not OK, an  error message is
    // shown to the user near the submit button informing
    // them of the error and the form is not sent.
    event.preventDefault();
    errorMessage.textContent = message;
  }
});

// LOCAL STORAGE

const inputFields = document.querySelectorAll('.input');
function injectFormData() {
  const object = JSON.parse(localStorage.getItem('userData'));
  if (object) {
    inputFields.forEach((input) => {
      const value = object[input.id];
      input.value = value;
    });
  }
}

const userData = {};
function createLocalStorage(form) {
  const formData = new FormData(form);

  // UserData: Single Data Object.
  userData.name = formData.get('username');
  userData.email = formData.get('email');
  userData.message = formData.get('message');

  localStorage.setItem('userData', JSON.stringify(userData));
}

inputFields.forEach((input) => {
  input.addEventListener('input', () => {
    createLocalStorage(form);
  });
});

injectFormData();
