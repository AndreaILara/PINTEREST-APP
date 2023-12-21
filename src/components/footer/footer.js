import './miFooter.css';

const footerLinks = [
  'Inicio',
  'Explorar',
  'Crear',
  'Política de Privacidad',
  'Mensajes',
  'Tu perfil'
];

const toggleFooter = (footer, icon) => {
  footer.classList.toggle('hidden');
  icon.classList.toggle('animate');
  setTimeout(() => {
    icon.classList.toggle('animate');
  }, 200);
};

export const footer = () => {
  const createLink = (text) => {
    const link = document.createElement('a');
    link.href = '#';
    link.target = '_blank';
    link.textContent = text;
    return link;
  };

  const createListItem = (text) => {
    const listItem = document.createElement('li');
    listItem.appendChild(createLink(text));
    return listItem;
  };

  const createSignature = () => {
    const signature = document.createElement('p');
    signature.textContent = 'Creado por Andrea ';
    const githubLink = createLink('@andreailara');
    githubLink.href = 'https://github.com/AndreaILara';
    githubLink.rel = 'noopener';
    signature.appendChild(githubLink);
    return signature;
  };

  const footer = document.createElement('footer');
  const footerToggle = document.createElement('div');
  const footerIcon = document.createElement('img');
  footerIcon.src = '/public/assets/mas-informacion.png';
  footerToggle.appendChild(footerIcon);

  const div = document.createElement('div');
  div.classList.add('flex-container', 'footer', 'hidden');

  const ul = document.createElement('ul');
  ul.classList.add('flex-container');

  footerLinks.forEach((item) => {
    ul.appendChild(createListItem(item));
  });

  div.append(ul, document.createElement('hr'), createSignature());
  footer.append(footerToggle, div);

  footerToggle.addEventListener('click', () => toggleFooter(div, footerIcon));

  return footer;
};

