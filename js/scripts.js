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

const portfolioArray = [
  {
    name: 'Tonic',
    profile: 'Canopy',
    categories: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: './assets/Snapshoot Portfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories',
    profile: 'Facebook',
    categories: ['Full Stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './assets/colorful.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Facebook 360',
    profile: 'Facebook',
    categories: ['Full Stack Dev', '2015'],
    description:
      'Exploring the future of media in Facebook`s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './assets/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Uber Navigation',
    profile: 'Uber',
    categories: ['Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './assets/Multi-post.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: '#',
    source: '#',
  },
];

const bodyElement = document.querySelector('#body');
const portfolioButtons = document.querySelectorAll('.card-button');

function showWorkContent(element) {
  bodyElement.appendChild(element);
}

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

  const modalItem = document.createElement(`div`);
  modalItem.classList.add('modal');
  modalItem.innerHTML = `
  <article class="modal-card">
    <header class="modal-header ">
      <h2 class="modal-title">${name}</h2>
      <button class="modal-button">
        <img
          id="modal-button-image"
          class="header-toggle"
          src="./assets/x-icon.svg"
          alt="close menu icon"
        />
      </button>
    </header>
    <div class="modal-content flex-column">
      <div class="modal-profile flex-row align-center">
        <h3 class="uppercase color-info">${profile}</h3>
        <ul class="modal-list flex-row">
          ${categories
            .map((item) => `<li class="modal-item">${item}</li>`)
            .join('')}
        </ul>
      </div>
      <img
        src="${image}"
        alt="Work 1"
        class="modal-image"
      />
      <p class="modal-description">
        ${description}
      </p>
      <ul class="modal-tags">
         ${technologies
           .map((item) => `<li class="modal-tag">${item}</li>`)
           .join('')}
      </ul>
      <hr/>
      <div class="modal-actions">
        <a
          id="0"
          href="${live}"
          class="button button-primary modal-button"
          >See live</a
        >
        <a
          id="0"
          href="${source}"
          class="button modal-button"
          >See source</a
        >
      </div>
    </div>
  </article>
`;
  showWorkContent(modalItem);
}

portfolioButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const index = event.target.id;
    createWorkWindow(index);
  });
});
