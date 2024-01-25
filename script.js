//your JS code here. If required.
function removeColor() {
    // Get the dropdown list by its id
    const colorSelect = document.getElementById("colorSelect");

    // Get the selected index
    const selectedIndex = colorSelect.selectedIndex;

    // Check if an option is selected
    if (selectedIndex !== -1) {
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    }
}

// Attach the removeColor function to the button click event
const removeButton = document.querySelector('[value="Select and Remove"]');
removeButton.addEventListener('click', removeColor);
