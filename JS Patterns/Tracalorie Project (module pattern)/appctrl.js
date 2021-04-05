// App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {
    // Load Event Listeners
    const loadEventListeners = function() {
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on enter
        document.addEventListener('keypress', function(e) {
            if(e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });

        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // Delete Button event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
        
        // Back Button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // Clear items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    }

        // Add item submit
        const itemAddSubmit = function(e) {
            // Get form input from UI Controller
            const input = UICtrl.getItemInput();

            // Check for name ad calorie input
            if(input.name !== '' && input.calories !== '') {

                // Add item
                const newItem = ItemCtrl.addItem(input.name, input.calories);

                // Add item to UI List
                UICtrl.addListItem(newItem);

                // Get total calories
                const totalCalories = ItemCtrl.getTotalCalories();
                // Add total calories to UI
                UICtrl.showTotalCalories(totalCalories)

                // Store in Local Storage
                StorageCtrl.storeItem(newItem);

                // Clear Fields
                UICtrl.clearInput();
            } else {
                alert('Please make an entry in both fields.')
            }


            e.preventDefault();
        }


        // Click edit item
        const itemEditClick = function(e) {
            if(e.target.classList.contains('edit-item')) {
                // Get list item id (item-0, item-1 etc...)
                const listId = e.target.parentNode.parentNode.id;

                // Break into an array
                const listIdArr = listId.split('-');

                // Get the actual id
                const id = parseInt(listIdArr[1]);

                // Get item
                const itemToEdit = ItemCtrl.getItemById(id);

                // Set Current Item
                ItemCtrl.setCurrentItem(itemToEdit);

                // Add Item to form
                UICtrl.addItemToForm();
            }

            e.preventDefault
        }


        // Item Update Submit
        const itemUpdateSubmit = function(e) {
            // Get item input
            const input = UICtrl.getItemInput();

            // Update Item
            const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

            // Update UI
            UICtrl.updateListItem(updatedItem);

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories)

            // Update Local Storage
            StorageCtrl.updateItemStorage(updatedItem)

            // Clear edit state
            UICtrl.clearEditState();

            e.preventDefault();
        }

        // Item Delete Submit
        const itemDeleteSubmit = function(e) {
            // Get Current Item
            const currentItem = ItemCtrl.getCurrentItem();

            // Delete from data structure
            ItemCtrl.deleteItem(currentItem.id)

            // Delete from UI
            UICtrl.deleteListItem(currentItem.id)

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories)

            // Delete from Local Storage
            StorageCtrl.deleteItemFromStorage(currentItem.id);

            // Clear edit state
            UICtrl.clearEditState();

            e.preventDefault();
        }


        // Clear items button
        const clearAllItemsClick = function(e) {
            // Delete All items from data structure
            ItemCtrl.clearAllItems();
            

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            // Remove list from UI
            UICtrl.clearList();

            // Clear from Local Storage
            StorageCtrl.clearItemsFromStorage();

            // Clear edit state
            UICtrl.clearEditState();

            e.preventDefault();
        }

    // Public Methods
    return {
        init: function(){
            // Clear edit state
            UICtrl.clearEditState();
            
            // Fetch Items from data structure
            const items = ItemCtrl.getItems();

            // Populate list with items
            UICtrl.populateItemList(items);

             // Get total calories
             const totalCalories = ItemCtrl.getTotalCalories();
             // Add total calories to UI
             UICtrl.showTotalCalories(totalCalories)

            // Load event listeners
            loadEventListeners();

        }
    }

})(ItemCtrl, StorageCtrl,  UICtrl);



// Initialize App
App.init()