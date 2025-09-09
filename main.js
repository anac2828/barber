const themeSwitcher = document.querySelector('.theme-switcher');
let activeTheme = localStorage.getItem('theme');

// FUNCTION TO CHANGE THEME
function changeTheme(theme) {
  // Add a class to the body to enable color theme transition
  document.body.classList.add('theme-switch');
  if (theme === 'system') {
    localStorage.removeItem('theme');
    document.body.removeAttribute('data-theme');
  } else {
    // 'data-theme' attributed styles are defined in CSS - see _root.scss file
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }

  document.body.addEventListener(
    // The transitionend event is fired when a CSS transition has completed.
    // Remove the class after the transition is done
    'transitionend',
    () => {
      document.body.classList.remove('theme-switch');
    },
    {}
  );
}

// EVENT LISTENER
themeSwitcher.addEventListener('click', (e) => {
  if (e.target.tagName != 'INPUT') {
    return;
  }
  // will be 'light', 'dark', or 'system'
  const themeToActivate = e.target.id;
  changeTheme(themeToActivate);
});

// ON LOAD gets the active theme from local storage
window.onload = () => {
  if (activeTheme) {
    // Set the correct radio button to checked depeinding on the active theme
    document.getElementById(activeTheme).checked = true;
    changeTheme(activeTheme);
  }
};
