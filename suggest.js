const suggestionList = ["b6-306", "B6-305", "b6-304", "b6-gdb6", , "a4-201"];

    function suggestStart() {
        const inputBox = document.getElementById("start");
        const suggestionsContainer = document.getElementById("suggestionsStart");
       suggest(inputBox, suggestionsContainer);
    }

    function suggestEnd() {
        const inputBox = document.getElementById("end");
        const suggestionsContainer = document.getElementById("suggestionsEnd");
       suggest(inputBox, suggestionsContainer);
    }

    function suggest(inputBox, suggestionsContainer) {
        const inputValue = inputBox.value;
        const suggestions = getSuggestions(inputValue);

        suggestionsContainer.innerHTML = ""; // Clear previous suggestions

        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const suggestionItem = document.createElement("ul");
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener("click", () => {
                    inputBox.value = suggestion;
                    suggestionsContainer.style.display = "none";
                });
                suggestionsContainer.appendChild(suggestionItem);
            });

            suggestionsContainer.style.display = "block";
        } else {
            suggestionsContainer.style.display = "none";
        }
    }

    function getSuggestions(prefix) {
        return suggestionList.filter(suggestion =>
            suggestion.startsWith(prefix)
        );
    }

// Close suggestions if user clicks outside the input box
document.addEventListener("click", function(event) {
    const suggestionsContainer = document.getElementById("suggestionsStart");
    if (event.target !== document.getElementById("inputBox") && event.target !== suggestionsContainer) {
        suggestionsContainer.style.display = "none";
    }
});

document.addEventListener("click", function(event) {
    const suggestionsContainer = document.getElementById("suggestionsEnd");
    if (event.target !== document.getElementById("inputBox") && event.target !== suggestionsContainer) {
        suggestionsContainer.style.display = "none";
    }
});