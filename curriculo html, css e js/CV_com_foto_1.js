const AVATAR_SELECTOR = '.avatar';
const THEME_CLASS = 'theme-darker';
const TOOLTIP_TEXT = {
  dark: 'Clique para voltar ao tema original',
  light: 'Clique para um tema mais escuro'
};

document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector(AVATAR_SELECTOR);
  if (!avatar) return;

  avatar.addEventListener('click', () => {
    const active = document.body.classList.toggle(THEME_CLASS);
    avatar.setAttribute('title', active ? TOOLTIP_TEXT.dark : TOOLTIP_TEXT.light);
  });
});
