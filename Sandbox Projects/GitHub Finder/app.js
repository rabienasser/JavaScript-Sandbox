// Init Classes
const github = new GitHub;
const ui = new UI;

// Search Input
const searchUser = document.getElementById('search-user');

// Search input even listener
searchUser.addEventListener('keyup', (e) => {
    const userText = searchUser.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
           if(data.profile.message === 'Not Found') {
            // Show alert
            ui.showAlert('User not found', 'alert alert-danger');
           } else {
            //    Show Profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
           }
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});