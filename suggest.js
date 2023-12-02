const suggestionList = [
    "a1", "a2", "a3", "a4", "a5",
    "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12",
    "c1", "c2", "c3", "c4", "c5", "c6", "nhaxeltk", "nhaxetht", "nhaxegv",
    "gate 1", "gate 2", "gate 3", "cổng Lý Thường Kiệt", "cổng Tô Hiến Thành giữa", "cổng Tô Hiến Thành cuối", "bkhouse", "cantin",
    //a2
    "thuvien",
    //b1
    "b1-108", "b1-109", "b1-110", "b1-301", 
    //b6
    "b6-101", "b6-102", "b6-103", "b6-104", "b6-105", "b6-106",
    "b6-201", "b6-202c", "b6-202b", "b6-202a", "b6-meetingroom", "meeting room", "b6-ce", "civil engineering",
    "b6-301", "b6-302", "b6-303", "b6-304", "b6-305", "b6-306",
];

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
    const inputValue = inputBox.value.toLowerCase();
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
    const hasNumberAfterLetter = /[a-zA-Z]\d/.test(prefix);

    const filteredSuggestions = suggestionList.filter(suggestion => {
        if (hasNumberAfterLetter) {
            return suggestion.startsWith(prefix);
        } else {
            return suggestion.startsWith(prefix) && !/\d-\d/.test(suggestion);
        }
    });

    return filteredSuggestions.sort();
}

// Close suggestions if the user clicks outside the suggestions container
document.addEventListener("click", function(event) {
const suggestionsContainerStart = document.getElementById("suggestionsStart");
if (event.target !== document.getElementById("start") && event.target !== suggestionsContainerStart) {
suggestionsContainerStart.style.display = "none";
}

const suggestionsContainerEnd = document.getElementById("suggestionsEnd");
if (event.target !== document.getElementById("end") && event.target !== suggestionsContainerEnd) {
suggestionsContainerEnd.style.display = "none";
}
});