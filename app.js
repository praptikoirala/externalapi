const number = document.querySelector('.joke-num');
const button = document.querySelector('.getjokes');
const dispJoke = document.querySelector('.jokes');

button.addEventListener('click' , loadJokes);

function loadJokes(e){
   
   const xhr = new XMLHttpRequest();

   xhr.open('GET' , `http://api.icndb.com/jokes/random/${number.value}` , true);

   xhr.onload = function(){
      if(this.status === 200){
         const response = JSON.parse(this.responseText);
         let output = '';

         if(response.type === 'success'){

            response.value.forEach(function(joke){
               output += `<li>${joke.joke}</li>`;
            });
            // for(let i = 0; i < response.value.length; i++){
            //    console.log(`${response[i].joke}`);
            // }
            
         }else{
            output += `<li>Something went wrong</li>`;
         }

         dispJoke.innerHTML = output;
      }
   }

   xhr.send();

   e.preventDefault();
}

