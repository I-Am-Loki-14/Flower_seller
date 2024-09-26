const menubar = document.getElementById('menubar');
const menulinks = document.getElementById('menulinks');

menubar.addEventListener('click', () => {
  menulinks.classList.toggle('show');
 
    if (menulinks.classList.contains('show')) {
      menubar.src = "img/svg/Close.svg";
    } else {
      menubar.src = "img/svg/Menubar.svg";
    }
  
})