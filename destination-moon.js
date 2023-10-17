let navigation = document.querySelector('.navigation');
let menu = document.querySelector('.menu');
let cancel = document.getElementById('cancel');
let line = document.querySelector('.lines');
console.log(line)

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


// Get references to key elements
const tabLinks = document.querySelectorAll('.nav-link'); 
const tabContent = document.querySelector('.tab-content');
const destImage = document.querySelector('.destination-image');
const number = document.querySelector('.num');
const douglas = 350;
const mark = 320;
const victor = 390;
const anousheh = 440;   
const image = document.querySelector('.crew-image'); 
const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
console.log(desktopMediaQuery);
let activeTab;
const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
});

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




tabLinks.forEach(tab => {

  tab.addEventListener('click', () => {

    // Set active tab 
    activeTab = tab.target.getAttribute('data-bs-target');
    console.log(activeTab);
    
    // Call size function
    setImageSize();

  });

  // Size function
  function setImageSize() {
    const tabName = activeTab.split('-').pop();
    console.log(tabName);

    // Check tabName 
    // if (tabName === 'home') {
    //   // Size logic
    // } 
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

// tabLinks.forEach(tab => {
//   const activeTab = tab.target.getAttribute('data-bs-target')
//   const tabName = tabID.split('-').pop();
// function setImageSize() {
  
//   if(desktopMediaQuery.matches) {
    
//     if(activeTab === '#pills-home') {
//       image.style.width = `${douglas}px`;
//     } else if (activeTab === '#pills-profile') {
//       image.style.width = `${mark}px`;  
//     } else if (activeTab === '#pills-contact') {
//       image.style.width = `${victor}px`;
//     } else if (activeTab === '#pills-titans') {
//       image.style.width = `${anousheh}px`;
//     }
//   } else {
    
//     setDefaultImageSize();
//   }
// }
// }
// );




// Set default image on page load
destImage.src = './assets/destination/image-moon.png'; 

// Add click event to tab links
tabLinks.forEach(link => {

  link.addEventListener('click', e => {

    // Get href of clicked tab link
    const tabID = e.target.getAttribute('data-bs-target');
console.log(tabID)
    // Update image based on tab ID
    switch(tabID) {
      case '#pills-home':
        destImage.src = './assets/destination/image-moon.png';
        number.textContent = '01'
        break;
      case '#pills-profile': 
        destImage.src = './assets/destination/image-mars.png';
        number.textContent = '02'
        break;

        case '#pills-contact': 
        destImage.src = './assets/destination/image-europa.png';
        number.textContent = '03'
        break;

        case '#pills-titans': 
        destImage.src = './assets/destination/image-titan.png';
        number.textContent = '04'
        break;
      // etc for other tabs
    }

    // Additional logic to update tab content, 
    // highlight active tab link, etc

  });

});
