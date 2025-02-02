import { http } from './http';
import { ui } from './ui';

// Get Posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for Cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);



// Get Posts
 function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}


// Submit Posts
function submitPost(e) {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  const data = {
    title,      //Same as this: title: title
    body        //Same as this: body: body
  }


  // Create Post
  if(title != '' && body!= '') {
      // Check for ID
      if(id === '') {
        // Create Post
      http.post('http://localhost:3000/posts', data)
      .then(data => {
      ui.showAlert('Post Added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch(err => console.log(err));
      } else {
        http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
      ui.showAlert('Post Updated', 'alert alert-success');
      ui.changeFormState('add');
      getPosts();
    })
    .catch(err => console.log(err));
      }
  } else {
    ui.showAlert('Please fill in both fields', 'alert alert-danger');
  }
}


// Delete Post
function deletePost(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }

  e.preventDefault();
}


// Enable Edit State
function enableEdit(e) {
if(e.target.parentElement.classList.contains('edit')) {
  const id = e.target.parentElement.dataset.id;
  const body = e.target.parentElement.previousElementSibling.textContent;
  const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

  const data = {
    id,
    title,
    body
  }

  // Fill form with current post
  ui.fillForm(data);
}

  e.preventDefault();
}


// Cancel edit state
function cancelEdit(e) {
if(e.target.classList.contains('post-cancel')) {
  ui.changeFormState('add');
}

  e.preventDefault();
}
