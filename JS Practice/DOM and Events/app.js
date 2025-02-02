// SELECTING ELEMENTS
console.log(document.documentElement)
console.log(document.body)

// RETURN AN HTML COLLECTION
document.getElementsByTagName('button')
document.getElementsByClassName('btn')
const header = document.querySelector('.header')


// CREATING AND INSERTING ELEMENTS
// .insertAdjacentHTML //method 1

const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'We use cookies for improved functionality...'
message.innerHTML = 'We use cookies for improved functionality... <button>Got it!</button>'

header.append(message) //places message as last child of 'header' element
header.prepend(message) // places message as first child of 'header' element

header.before(message)  //places message directly before header element
header.after(message)  // places message directly after 'header' element

// DELETE ELEMENTS
// message.remove()



// STYLES ATTRIBUTES AND CLASSES
// message.style.backgroundColor = 'green'

// // Attributes
// const logo = document.querySelector('.logo')
// console.log(logo.src)  //access src attribute of img
// console.log(logo.alt)
// console.log(logo.getAttribute('designer'))  //access custom attributes
// logo.setAttribute('company' , 'Bankist')  //sets attribute to 'logo': company="Bankist"

// // Classes
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()



// Types of Events & Event Handlers
const test = () => {
    alert('test alert')

    document.querySelector('button').removeEventListener('mouseenter', test) //Makes it so that we can only listen to the event once
}

document.querySelector('button').addEventListener('mouseenter', test)



// DOM TRAVERSING
// Going downwards
h1.querySelectorAll('.highlight')  //Selects all children, no matter how nested
h1.childNodes()  //Selects direct child nodes
h1.children  // Returns an html collection of direct children
h1.firstElementChild()  //Returns first child of h1
h1.lastElementChild()  // Returns last child of h1

// Going upwards
h1.parentNode()  // Returns direct parent node
h1.parentElement()  // Returns direct parent element

// Going sideways
h1.previousElementSibling()
h1.nextElementSibling()
h1.parentElement.children  //returns all sibling (including itself)