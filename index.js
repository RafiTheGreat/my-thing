const swich = document.getElementById('swich');
const heder = document.getElementById('heder');
const contaner= document.getElementById('contaner');
const itemscoloer1 = document.getElementById('items1')
const itemscoloer2 = document.getElementById('items2')
const itemscoloer3 = document.getElementById('items3')
swich.addEventListener('click', () => {
  if (swich.checked) {
     heder.classList.replace('coloer-body','color-body-dark')
     contaner.classList.replace('coloer-body','color-body-dark')
     itemscoloer1.classList.toggle('the-items-coloer')
     itemscoloer2.classList.toggle('the-items-coloer')
     itemscoloer3.classList.toggle('the-items-coloer')
     //dark
     itemscoloer1.classList.toggle('the-items-dark')
     itemscoloer2.classList.toggle('the-items-dark')
     itemscoloer3.classList.toggle('the-items-dark')


  }
  else{
    heder.classList.replace('color-body-dark','coloer-body')
    contaner.classList.replace('color-body-dark','coloer-body')
    itemscoloer1.classList.toggle('the-items-coloer')
    itemscoloer2.classList.toggle('the-items-coloer')
    itemscoloer3.classList.toggle('the-items-coloer')
    //dark
    itemscoloer1.classList.toggle('the-items-dark')
    itemscoloer2.classList.toggle('the-items-dark')
    itemscoloer3.classList.toggle('the-items-dark')
  }
}                                                       
)
