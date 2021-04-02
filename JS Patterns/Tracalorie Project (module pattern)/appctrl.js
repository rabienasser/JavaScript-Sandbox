// App Controller
const App = (function(ItemCtrl, UICtrl) {
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

                // Clear Fields
                UICtrl.clearInput();
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

})(ItemCtrl, UICtrl);



// Initialize App
App.init()