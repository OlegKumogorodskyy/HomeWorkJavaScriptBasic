document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("itemList");

    function saveItems() {
        const itemsToSave = [];
        list.querySelectorAll('li').forEach(item => {
            itemsToSave.push(item.firstChild.textContent);
        });
        localStorage.setItem('items', JSON.stringify(itemsToSave));
    }

    function addItem(text) {
        const listItem = document.createElement("li");
        listItem.textContent = text;

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✖";
        deleteButton.classList.add('deleteButton');
        deleteButton.onclick = function() {
            listItem.remove();
            saveItems(); 
        };

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }

  
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) {
        savedItems.forEach(item => addItem(item));
    }

    document.getElementById("addButton").addEventListener("click", function() {
        const newItem = prompt("Enter the name of the new item:");
        if (newItem) {
            addItem(newItem);
            saveItems(); 
        }
    });
});
