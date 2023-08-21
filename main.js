const themeSwitcher = document.querySelector('.theme-switcher');
let activeTheme = localStorage.getItem('theme');

themeSwitcher.addEventListener('click', e => {
  if (e.target.tagName != 'INPUT') {
    return;
  }

  const themeToActivate = e.target.id;
  changeTheme(themeToActivate);
});

function changeTheme(theme) {
  document.body.classList.add('theme-switch');
  if (theme === 'system') {
    localStorage.removeItem('theme');
    document.body.removeAttribute('data-theme');
  } else {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }

  document.body.addEventListener(
    'transitionend',
    () => {
      document.body.classList.remove('theme-switch');
    },
    {}
  );
}

window.onload = () => {
  if (activeTheme) {
    document.getElementById(activeTheme).checked = true;
    changeTheme(activeTheme);
  }
};
