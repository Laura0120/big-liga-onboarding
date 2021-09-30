const desktopWidth = 1024;

export const onPageClick = (evt) => {
  const introElement = document.querySelector('.intro');
  if (window.innerWidth <= desktopWidth && !evt.target.closest('.header__logo') && !evt.target.closest('.preloader')) {
    introElement.classList.toggle('intro--show-content');
    introElement.classList.toggle('intro--hide-content', !introElement.classList.contains('intro--show-content'));
  }
};
