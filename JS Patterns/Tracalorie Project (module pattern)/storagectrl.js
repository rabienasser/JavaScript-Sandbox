// Storage Controller
const StorageCtrl = (function() {
    // Public Methods
    return {
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
        }
    }
})();


 