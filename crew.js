let navigation = document.querySelector('.navigation');
let menu = document.querySelector('.menu');
let cancel = document.getElementById('cancel');
let line = document.querySelector('.lines');
console.log(line)

cancel.addEventListener('click', () => {
    navigation.classList.remove('show');
    menu.style.opacity = "1";
    // line.style.width = "75%";
});

const title = document.querySelector('title');
console.log(title);
const originalTitle = title.textContent;
console.log(originalTitle);
const newTitle = 'we miss you dearly 😥, come explore with us';
window.addEventListener('blur', () => {
  // Change the title to the new one
  title.textContent = newTitle;
});
window.addEventListener('focus', () => {
  // Change the title back to the original one
  title.textContent = originalTitle;
});








menu.addEventListener('click', () => {
    navigation.classList.add('show');
    menu.style.opacity = "0";
    // line.style.width = "45%";


});

const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
})



const tabLinks = document.querySelectorAll('.nav-link'); 
const tabContent = document.querySelector('.tab-content');
const crewImage = document.querySelector('.crew-image');

const douglas = 350;
const mark = 320;
const victor = 390;
const anousheh = 440;   
const image = document.querySelector('.crew-image'); 
const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
console.log(desktopMediaQuery);
let activeTab;

tabLinks.forEach(tab => {

  tab.addEventListener('click', e => {

    
    activeTab = e.target.getAttribute('data-bs-target');
    console.log(activeTab);
    
    
    setImageSize();

  });



  const desktopMediaQueryer = window.matchMedia('(max-width: 768px)');
  if(desktopMediaQueryer.matches) {
    menu.addEventListener('click', () => {
      line.style.width = '0%';
    });
    cancel.addEventListener('click', () => {
      line.style.width = '75%'
    })
  };


  
  function setImageSize() {
    const tabName = activeTab.split('-').pop();
    console.log(tabName);

    
      if(desktopMediaQuery.matches) {
    
          if(tabName === 'home') {
            image.style.width = `${douglas}px`;
          } else if (tabName === 'profile') {
            image.style.width = `${mark}px`;  
          } else if (tabName === 'contact') {
            image.style.width = `${victor}px`;
          } else if (tabName === 'titans') {
            image.style.width = `${anousheh}px`;
          }
        } else {
          
          setDefaultImageSize();
        }
    
  }

});



function setDefaultImageSize() {
  image.style.width = '230px'; // (or another default size)
}










crewImage.src = './assets/crew/image-douglas-hurley.png'; 
const number = document.querySelector('.num');
tabLinks.forEach(link => {

    link.addEventListener('click', e => {
  
      // Get href of clicked tab link
      const tabID = e.target.getAttribute('data-bs-target');
  console.log(tabID)
      // Update image based on tab ID
      switch(tabID) {
        case '#pills-home':
         crewImage.src = './assets/crew/image-douglas-hurley.png';
          number.textContent = '01'
          break;
        case '#pills-profile': 
        crewImage.src = './assets/crew/image-mark-shuttleworth.webp';
          
          number.textContent = '02'
          break;
  
          case '#pills-contact': 
          crewImage.src = './assets/crew/image-victor-glover.png';
          number.textContent = '03'
          break;
  
          case '#pills-titans': 
          crewImage.src = './assets/crew/image-AnoushehAnsari.png';
          number.textContent = '04'
          break;
        // etc for other tabs
      }
  
      
  
    });
  
  });




  