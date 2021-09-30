class Preloader {
  constructor(element, nextElementForAnimation) {
    this.element = element;
    this.nextElementForAnimation = nextElementForAnimation;
    this.durationFadeout = this.element.dataset.durationFadeout;
    this.hide = this.hide.bind(this);
    this.onDownEnter = this.onDownEnter.bind(this);
    this.load();
  }

  load() {
    document.body.classList.add('scroll-lock');
    this.element.classList.add('is-loading');
    this.element.addEventListener('click', this.hide);
    document.addEventListener('keydown', this.onDownEnter);
  }

  hide() {
    this.element.classList.add('is-ready');
    this.element.removeEventListener('click', this.hide);
    document.removeEventListener('keydown', this.onDownEnter);
    this.nextElementForAnimation.classList.add('animate');

    setTimeout(() => {
      this.element.classList.add('is-hidden');
      document.body.classList.remove('scroll-lock');
      setTimeout(() => {
        this.nextElementForAnimation.classList.remove('animate');
      }, this.durationFadeout);
    }, this.durationFadeout);
  }

  onDownEnter(evt) {
    if (evt.key === 'Enter') {
      this.hide();
    }
  }
}

const preloader = () => {
  const preloaderNode = document.querySelector('.js-preloader');
  const nextForAnimationNode = document.querySelector('.intro');
  if (!preloaderNode) {
    return null;
  }

  return new Preloader(preloaderNode, nextForAnimationNode);
};

export {preloader};
