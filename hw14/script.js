document.addEventListener("DOMContentLoaded", function() {
    const items = ["Item 1", "Item 2", "Item 3"];
    const list = document.getElementById("itemList");

    function addItem(text) {
        const listItem = document.createElement("li");
        listItem.textContent = text;

       
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✖";
        deleteButton.classList.add('deleteButton');
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }

    items.forEach(item => addItem(item));

    document.getElementById("addButton").addEventListener("click", function() {
        const newItem = prompt("Enter the name of the new item:");
        if (newItem) {
            addItem(newItem);
        }
    });
});
