// Storage Controller
const StorageCtrl = (function() {
    // Public Methods
    return {
        // Add to Local Storage
        storeItem: function(item) {
            let items;
            // Check if any items in local storage
            if(localStorage.getItem('items') === null) {
                items = [];
                // Push new item
                items.push(item);
                // Set local storage
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                // Get what is already in Local Storage
                items = JSON.parse(localStorage.getItem('items'));

                // Push new item
                items.push(item);

                // Reset Local Storage
                localStorage.setItem('items', JSON.stringify(items));
            }
        },

        getItemsFromStorage: function() {
            let items;
            if(localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },

            // Update Local Storage
        updateItemStorage: function(updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index) {
                if(updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });

            // Reset Local Storage
            localStorage.setItem('items', JSON.stringify(items));
        },

        // Delete items from Local Storage
        deleteItemFromStorage: function(id) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index) {
                if(id === item.id) {
                    items.splice(index, 1,);
                }
            });

            // Reset Local Storage
            localStorage.setItem('items', JSON.stringify(items));
        },

        // Clear Items from Storage
        clearItemsFromStorage: function() {
            localStorage.removeItem('items');
        }
    }
})();


 