const data = [
    {
        name: 'John Doe',
        age: 36,
        gender: 'Male',
        lookingfor: 'Women',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jenn Smith',
        age: 39,
        gender: 'Female',
        lookingfor: 'Men',
        location: 'Cleveland OH',
        image: 'https://randomuser.me/api/portraits/women/14.jpg'
    },
    {
        name: 'Will Jones',
        age: 29,
        gender: 'Male',
        lookingfor: 'Women',
        location: 'Dallas TX',
        image: 'https://randomuser.me/api/portraits/men/88.jpg'
    }
];


const profiles = profileIterator(data); 

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Interested In: ${currentProfile.lookingfor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    } else {
        window.location.reload();
    }
}



// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0

    return{
        next: function() {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}


