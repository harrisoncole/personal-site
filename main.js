function projectBarFncGenerator() {
  let isDisplayed = false;
  const projectBar = document.createElement('div');
  projectBar.className = 'project-bar';
  projectBar.innerHTML =
    '<a href="www.test.com">DiveBook</a><a href="www.test.com">What To Wear</a><a href="www.test.com">Grace Shredder</a>';
  const projects = document.querySelector('.container-home');
  function createProjectBar() {
    !isDisplayed
      ? projects.appendChild(projectBar)
      : projects.removeChild(projectBar);
    isDisplayed = !isDisplayed;
  }
  return createProjectBar;
}

const body = document.querySelector('.pre-load-body');
const flex = document.querySelector('.pre-load-flex');
const loadMsg = document.querySelector('.loading');

function loadConfirm() {
  body.removeChild(loadMsg);
  body.className = 'container-home';
  flex.className = 'flex-container';
}

// const createProjectBar = projectBarFncGenerator();
// const projects = document.getElementById('projects');

// projects.addEventListener('click', createProjectBar);
