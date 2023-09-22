document.addEventListener("DOMContentLoaded", function() {
    var nameForm = document.getElementById("nameForm");
    var storyDiv = document.getElementById("story");
    var characterNameSpans = document.querySelectorAll("#characterName");
    var storyText = document.getElementById("storyText");

    nameForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the user's name from the input field
        var userNameInput = document.getElementById("userName");
        
        var userName = userNameInput.value;

        // Replace all occurrences of the main character's name with the user's name
        characterNameSpans.forEach(function(span) {
            span.textContent = userName;
        });

        // Display the story
        storyDiv.style.display = "block";
    });
});
