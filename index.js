const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const message = ['message one', 'message Two', 'message Three', 'message Four'];

const types = ['info', 'success', 'erorr'];

button.addEventListener('click', () => {
  createNotification();
});

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomTypes());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return message[Math.floor(Math.random() * message.length)];
}
function getRandomTypes() {
  return types[Math.floor(Math.random() * types.length)];
}
