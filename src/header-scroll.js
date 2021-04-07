function fc(){
  let nav = document.querySelector('.page-header');
    if (window.pageYOffset > 100) {
       nav.classList.add('page-header--scroll');
    } else {
      nav.classList.remove('page-header--scroll');
    }
}

window.onscroll=fc;
fc();
