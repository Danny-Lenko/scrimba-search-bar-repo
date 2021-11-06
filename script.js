"use strict"

document.addEventListener('keyup', function() {
   const searchInput = document.getElementById('searchInput');
   const namesCollection = document.getElementsByClassName('name');
   let userInput = searchInput.value.toLowerCase();

   for (let i = 0; i < namesCollection.length; i++) {
      let oneName = namesCollection[i].textContent.toLowerCase();

      if ( oneName.includes(userInput) ) {
         namesCollection[i].style.display = "block";
      } else {
         namesCollection[i].style.display = "none";
      }
   }
})