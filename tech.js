let navigation = document.querySelector('.navigation');
let menu = document.querySelector('.menu');
let cancel = document.getElementById('cancel');
let line = document.querySelector('.lines');
console.log(line)
let tech_portrait = document.querySelector('.tech-images');
let tech_landscape = document.querySelector('.tech-image');
const tabLinks = document.querySelectorAll('.nav-link'); 
const tabContent = document.querySelector('.tab-content');
const number = document.querySelector('.num');
const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
})

cancel.addEventListener('click', () => {
    navigation.classList.remove('show');
    menu.style.opacity = "1";
    // line.style.width = "75%";
})
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



menu.addEventListener('click', () => {
    navigation.classList.add('show');
    menu.style.opacity = "0";
    // line.style.width = "45%";


});


tabLinks.forEach(link => {

    link.addEventListener('click', e => {
  
      // Get href of clicked tab link
      const tabID = e.target.getAttribute('data-bs-target');
  console.log(tabID)
      // Update image based on tab ID
      switch(tabID) {
        case '#v-pills-home':
            tech_portrait.src = '../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';
            tech_landscape.src = '../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';

          number.textContent = '01'
          break;
        case '#v-pills-profile': 
        tech_portrait.src = '../starter-code/assets/technology/image-Spaceport-portrait.jpg';
            tech_landscape.src = '../starter-code/assets/technology/image-Spaceport-landscape.jpg';
          
          number.textContent = '02'
          break;
  
          case '#v-pills-messages': 
          tech_portrait.src = '../starter-code/assets/technology/image-Space-capsule-portrait.jpg';
            tech_landscape.src = '../starter-code/assets/technology/image-Space-capsule-landscape.jpg';
          number.textContent = '03'
          break;
  
          case '#pills-titans': 
          crewImage.src = '../starter-code/assets/crew/image-Anousheh-Ansari.png';
          number.textContent = '04'
          break;
        // etc for other tabs
      }
  
      // Additional logic to update tab content, 
      // highlight active tab link, etc
  
    });
  
  });