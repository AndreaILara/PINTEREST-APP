
import './header.css';

export const header = (logoUrl, brandName, links) => {
  const createImage = (src, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
  };

  const createLink = (link) => {
    const li = document.createElement('li');
    li.id = link.name.toLowerCase();

    const anchor = document.createElement('a');
    anchor.href = link.url;

    if (link.icon) {
      const img = createImage(link.icon, link.name);
      li.className = 'icon';
      anchor.append(img);
    } else {
      anchor.textContent = link.name;
      li.className = 'textMenu';
    }

    li.append(anchor);
    return li;
  };

  const header = document.createElement('header');
  header.classList.add('flex-container');

  const logo = createImage(logoUrl, `${brandName} logo`);

  const searchContainer = document.createElement('div');
  searchContainer.id = 'search';
  searchContainer.classList.add('flex-container');

  const searchIcon = createImage('/lupa.png', 'Buscar');
  const input = document.createElement('input');
  input.placeholder = 'Buscar';

  searchContainer.append(searchIcon, input);

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('flex-container');

  links.forEach((link) => {
    const li = createLink(link);
    ul.append(li);
  });

  nav.append(ul);
  header.append(logo, searchContainer, nav);

  return header;
};
