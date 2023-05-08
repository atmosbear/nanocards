import user from './user.js'

let themeRadioButtons = [...document.querySelectorAll('input[name="theme"]')];

let notificationsForNewCardsThatBecameDueCheckbox = document.querySelector('#card-due-notifications');
let notificationsForRemindingDueCardsCheckbox = document.querySelector('#due-card-reminders');
let defaultDueSecondsInput = document.querySelector('#default-due-seconds-input');

themeRadioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', () => {
    user.settings.theme = radioButton.value;
    changeTheme(radioButton.value);
  });
})

function changeTheme(toWhat) {
  // change the css vars for the theme
  if (toWhat === "light") {
    document.documentElement.style.setProperty('--bg-col', "#bbbbbb");
    document.documentElement.style.setProperty('--nav-col', "#eeefff");
    document.documentElement.style.setProperty('--text-col', "#000000");
  } else if (toWhat === "dark") {
    document.documentElement.style.setProperty('--bg-col', "#19171f");
    document.documentElement.style.setProperty('--nav-col', "#262121");
    document.documentElement.style.setProperty('--text-col', "#ffffff");
  }
}

// load default theme
changeTheme(user.settings.theme);

// now do notifs
notificationsForNewCardsThatBecameDueCheckbox.checked = user.settings.notifications.forNewCardsThatBecameDue;
notificationsForRemindingDueCardsCheckbox.checked = user.settings.notifications.forRemindingDueCards;
defaultDueSecondsInput.value = user.settings.defaultDueSeconds;

// issues: themes dont save color when switching pages
// notifications don't do anything
// changing the default due seconds doesn't do anything