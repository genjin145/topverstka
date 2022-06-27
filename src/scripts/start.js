const startNode = document.querySelector('.start');
const startProgressNode = document.querySelector('.start__progress');
const startButton = startNode.querySelector('.start__button');

if (startNode) startButton.addEventListener('click', handleStart);

function handleStart() {
  startProgressNode.classList.add('start__progress_active');

  startProgressNode.addEventListener(
    'transitionend',
    () => startNode.remove(),
    { once: true }
  );
}
