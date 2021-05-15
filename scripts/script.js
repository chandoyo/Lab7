// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
      });
    });
});


const homePage = document.querySelector('h1');
const settings = document.querySelector('img');

// Pop state happens when back button is clicked
window.addEventListener('popstate', (event) => {
  router.setState(history.state, true); //?????
});

// When settings button is clicked
settings.addEventListener("click", () => {
  router.setState("settings", false);

});

// When home is clicked
homePage.addEventListener("click", () => {
  router.setState("home", false);

});