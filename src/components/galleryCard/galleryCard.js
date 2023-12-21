
import './galleryCard.css';

export const createCard = (parentElement, { urls, description, alt_description, user }) => {
  const { small } = urls;

  const card = document.createElement('article');
  card.classList.add('card');

  card.innerHTML = `
    <div class="img-container">
      <img src="${small}" alt="${alt_description}" loading="lazy" />
    </div>
    <div class="description">
      <h3>${description || ''}</h3>
      <div class="user flex-container">
        <div class="img-container"><img src=${user.profile_image.medium} alt="${user.name}'s profile image"/></div>
        <h4>${user.name}</h4>
      </div>
    </div>
  `;

  parentElement.append(card);
};
