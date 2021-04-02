
// Item Controller
const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure
    const data = {
        items: [
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Fruit & Protein Smoothie', calories: 400},
            // {id: 2, name: 'Lentil Soup', calories: 300},
        ],
        currentItem: null,
        totalCalories: 0
    }
    
    // Public methods (accessible outside of controller)
    return {
        getItems: function() {
            return data.items;
        },

        addItem: function(name, calories) {
            let ID;
            // Create ID
            if(data.items.length > 0) {
                ID = data.items[data.items.length -1].id +1;
            } else {
                ID = 0;
            }

            // Calories to Number
            calories = parseInt(calories);

            // Create New Item
            newItem = new Item(ID, name, calories);

            // Add to items array
            data.items.push(newItem);

            return newItem;
        },

        getItemById: function(id) {
            let found = null;
            // Loop through items
            data.items.forEach(function(item){
                if(item.id === id) {
                    found = item;
                }
            });
            return found;
        },

        updateItem: function(name, calories) {
            // Calories to Number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item) {
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },

        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getCurrentItem: function(item) {
            return data.currentItem;
        },

        getTotalCalories: function() {
            let total = 0;
            // Loop through items
            data.items.forEach(function(item){
                total += item.calories;
            });

            // Set total cal in data structure
            data.totalCalories = total;

            // Return total
            return data.totalCalories
        },

        logData: function(){
            return data;
        }
    }

})();