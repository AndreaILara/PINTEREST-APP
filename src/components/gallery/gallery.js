
import { createCard } from '../galleryCard/galleryCard';
import './gallery.css';

export const populateGallery = (gallery, listOfImages) => {
  gallery.innerHTML = '';
  listOfImages.forEach((image) => {
    createCard(gallery, image);
  });
};
