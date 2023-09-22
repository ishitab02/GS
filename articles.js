
document.addEventListener('DOMContentLoaded', function () {
    const showCategoriesBtn = document.getElementById('showCategoriesBtn');
    const categoryDropdown = document.getElementById('categoryDropdown');

    // Show the dropdown when the button is clicked
    showCategoriesBtn.addEventListener('click', function () {
        if (categoryDropdown.style.display === 'block') {
            // Hide the dropdown if it's already visible
            categoryDropdown.style.display = 'none';
        } else {
            // Show the dropdown
            categoryDropdown.style.display = 'block';
        }
    });

    // Hide the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target !== showCategoriesBtn && event.target !== categoryDropdown) {
            categoryDropdown.style.display = 'none';
        }
    });
});


