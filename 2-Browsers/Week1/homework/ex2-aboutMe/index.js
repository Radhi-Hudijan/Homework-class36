'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const bodyTag = document.querySelector('body');

bodyTag.style.fontFamily = 'Arial, sans-serif';

const nickName = document.getElementById('nickname');
nickName.textContent = 'Radhi Hudijan';

const favFood = document.getElementById('fav-food');
favFood.textContent = 'Rice with Cola';

const homeTown = document.getElementById('hometown');
homeTown.textContent = 'Hadhramaut';

const li = document.querySelectorAll('li');

li.forEach((list) => {
  list.className = 'list-item';
});
