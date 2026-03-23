import './styles/style.css';
import { initCarousel } from './script/controller';

const carouselContainer = document.getElementById('carousel');

if (carouselContainer) {
  initCarousel(carouselContainer);
}
