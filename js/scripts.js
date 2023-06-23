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
