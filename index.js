const swich = document.getElementById('swich');
const heder = document.getElementById('heder');
const contaner= document.getElementById('contaner');
swich.addEventListener('click', () => {
  if (swich.checked) {
     heder.classList.replace('coloer-body','color-body-dark')
     contaner.classList.replace('coloer-body','color-body-dark')

  }
  else{
    heder.classList.replace('color-body-dark','coloer-body')
    contaner.classList.replace('color-body-dark','coloer-body')
  }
}                                                       
)