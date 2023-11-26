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


document.getElementById("getLocationButton").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("locationInfo").textContent = "Geolocation is not supported by this browser.";
    }


    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const locationInfo = document.getElementById("locationInfo");
    
        locationInfo.innerHTML = "Latitude: " + lat + ", Longitude: " + lon +
                                 "<br><a href='https://www.google.com/maps/?q=" + 
                                 lat + "," + lon + "' target='_blank'>View on Google Maps</a>";
    }

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("locationInfo").textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("locationInfo").textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("locationInfo").textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("locationInfo").textContent = "An unknown error occurred.";
            break;
    }
}
});