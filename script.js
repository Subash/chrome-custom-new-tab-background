function setBackground(url) {
  const backgroundEl = document.querySelector('.background');
  backgroundEl.style.backgroundImage = `url('${url}')`;
}

function onFileSelect(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    localStorage.backgroundData = reader.result;
    setBackground(localStorage.backgroundData);
  });
  reader.readAsDataURL(file);
}

function listenPick() {
  const picker = document.querySelector('.picker');
  picker.addEventListener('change', (e)=> {
    onFileSelect(e);
  });
}

function init() {
  listenPick();
  if(localStorage.backgroundData) {
    setBackground(localStorage.backgroundData);
  } else {
    setBackground('default.jpg');
  }
}

init();
