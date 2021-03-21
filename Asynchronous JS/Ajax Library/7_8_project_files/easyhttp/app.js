const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
    // if(err) {
    //     console.log(err);
    // } else{
    //     console.log(response);
    // }
// });





// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
//     if(err) {
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });



// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};




// Create Post (POST)
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response) {
//     if(err) {
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });



// Update Post (PUT)
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, response) {
//     if(err) {
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });



// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/4', function(err, response){
    if(err) {
        console.log(err);
    } else{
        console.log(response);
    }
});
