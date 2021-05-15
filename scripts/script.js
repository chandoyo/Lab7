// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {

      // to keep track of which entry
      var numEntry = 1;

      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);

        // When a specific entry is clicked
        let displayNum = numEntry  // save the current entry number here
        newPost.addEventListener('click', () => {
          router.setState({page: 'entry', number: displayNum, entry: newPost.entry}, false);
        });

        // next
        numEntry += 1;
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
  router.setState({page: "settings"}, false);

});

// When home is clicked
homePage.addEventListener("click", () => {
  router.setState({page: "home"}, false);

});