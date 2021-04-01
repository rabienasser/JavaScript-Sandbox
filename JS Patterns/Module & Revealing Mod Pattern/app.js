// Basic Structure of Module Pattern

// (function() {
//     // Declare private variables and function

//     return {
//         // Declare public variables and functions
//     }
// })();


// Standard Module Pattern
const UICtrl = (function() {
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();


// Will Return errors because cannot access private functions outside of Module (IFFE Function)
console.log(UICtrl.text);
console.log(changeText);





// Revealing Module Pattern
const itemCtrl = (function() {
    let _data = [];                      //  Underscore _ given to private variabels

    function add(item) {
        data.push(item)
        console.log('item added...')
    }

    function get(id) {
        return _data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

itemCtrl.add({id: 1, name: 'Rob'});
console.log(itemCtrl.get(1));





// Singleton Pattern            // Can't have more than one instance w this pattern
const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object('Object instance!');
        return object;
    }

    return{
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceB);