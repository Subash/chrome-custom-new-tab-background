function setBackground(url) {
  const backgroundEl = document.querySelector('.background');
  backgroundEl.style.backgroundImage = `url('${url}')`;
}

function onFileSelect(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    try {
      localStorage.backgroundData = reader.result;
      setBackground(localStorage.backgroundData);
    } catch (err) {
      alert('Image size must be smaller than 5MB');
    }
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
    setBackground('default.png');
  }
}

init();
