"use strict"

document.getElementById('searchInput').addEventListener('keyup', function(event) {
   let userInput = event.target.value.toLowerCase();

   let allNamesDOMCollection = document.getElementsByClassName('name');

   for (let i = 0; i < allNamesDOMCollection.length; i++) {
      const namesContent = allNamesDOMCollection[i].textContent.toLocaleLowerCase();

      if (namesContent.includes(userInput)) {
         allNamesDOMCollection[i].style.display = "block";
      } else {
         allNamesDOMCollection[i].style.display = "none";
      }
   }

})

