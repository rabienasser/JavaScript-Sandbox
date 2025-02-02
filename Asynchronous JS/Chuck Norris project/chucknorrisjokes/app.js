document.querySelector('button').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function() {
    if(this.status === 200) {

      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success') {
        console.log(response);
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        })
      } else{
        output += '<li>Something Went Wrong</li>';
      }
      
      document.querySelector('.jokes').innerHTML = output;
    }
  }


  xhr.send();
  

  e.preventDefault();
}