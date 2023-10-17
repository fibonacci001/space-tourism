let navigation = document.querySelector('.navigation');
let menu = document.querySelector('.menu');
let cancel = document.getElementById('cancel');
let line = document.querySelector('.lines');
console.log(line)
const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
})

cancel.addEventListener('click', () => {
    navigation.classList.remove('show');
    menu.style.opacity = "1";
    // line.style.width = "75%";
})



menu.addEventListener('click', () => {
    navigation.classList.add('show');
    menu.style.opacity = "0";
    // line.style.width = "45%";


});
const desktopMediaQuery = window.matchMedia('(max-width: 768px)');


if(desktopMediaQuery.matches) {
  menu.addEventListener('click', () => {
    line.style.width = '0%';
  });
  cancel.addEventListener('click', () => {
    line.style.width = '75%'
  })
}
const title = document.querySelector('title');
console.log(title);
const originalTitle = title.textContent;
console.log(originalTitle);
const newTitle = 'we miss you dearly 😥, come explore with us';
window.addEventListener('blur', () => {
  
    
  title.textContent = newTitle;
});
window.addEventListener('focus', () => {
 
  title.textContent = originalTitle;
});



