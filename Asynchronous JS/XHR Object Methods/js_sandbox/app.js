document.getElementById('button').addEventListener('click', loadData);

function loadData () {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);


  xhr.onload = function() {
  console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}`;
    }
  }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();

  // HTTP Statuses
  // 200: 'OK'
  // 403: 'Forbidden'
  // 404 'Not Found'
}