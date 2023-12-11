const suggestionList = [
    "a1", "a2", "a3", "a4", "a5",
    "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12",
    "c1", "c2", "c3", "c4", "c5", "c6", "c7", 
    "nhaxeltk", "nhaxetht", "nhaxegv",
    "bkhouse", "canteen", "food court", "circle K",
    //gates
    "gate 1", "ly thuong kiet gate", "cong 1", "cong ly thuong kiet", "main gate", "first gate",
    "gate 2", "to hien thanh mid gate", "cong 2", "cong to hien thanh giua", "second gate",
    "gate 3",  "to hien thanh rear gate", "cong 3", "cong to hien thanh ria", "third gate",
    //a2
    "thu vien", "library",
    //a4
    "a4-108", 
    "hoi truong a4", "a4-hoitruonga4", "a4-hall",
    "a4-201", "a4-202", "a4-203", "a4-204", "a4-205", "a4-206", "a4-207", 
    "a4-306", "a4-311", "a4-312", "a4-313", "a4-314", "a4-315", 
    "a4-401", "a4-402", "a4-407", "a4-408", "a4-409", "a4-410", "a4-411", "a4-412", "a4-413", 
    "a4-501", "a4-506", "a4-507", "a4-508", "a4-509", "a4-510", "a4-511", 
    //a5
    "a5-101", "a5-102", "a5-103", "a5-104", "a5-105", "a5-106", "a5-107", "a5-108", "a5-109", 
    "hoi truong a5", "a5-hoitruonga5", "a5-hall", "main hall",
    //b1
    "b1-108", "b1-109", "b1-110", "b1-111", "b1-112", "b1-106", "b1-105", "b1-104", "b1-103", "b1-102", "b1-114", "b1-119", "b1-116", "b1-115", "b1-118", 
    "b1-200", "b1-201", "b1-202", "b1-203", "b1-205", "b1-204", "b1-206", "b1-207", "b1-208", "b1-209", "b1-210", "b1-211", "b1-212", "b1-213", "b1-214", "b1-215", 
    "b1-303", "b1-302", "b1-301", "b1-300a", "b1-300b", "b1-305", "b1-306", "b1-307", "b1-308", "b1-309", "b1-310", "b1-311", "b1-312", "b1-313", "b1-314", "b1-315", 
    //b2
    "b2-114", "b2-115", "b2-113", "b2-112", "b2-111", "b2-110", "b2-109", "b2-108", "b2-107", "b2-106", "b2-101", "b2-102", "b2-102a", "b2-103", "b2-104", "b2-105", 
    "b2-208", "b2-209", "b2-210", "b2-211", "b2-212", "b2-213", "b2-214", "b2-201", "b2-201a", "b2-202", "b2-203", "b2-204", "b2-205", "b2-206", "b2-207",
    "b2-301", "b2-302", "b2-303", "b2-304", "b2-305", "b2-306", "b2-307", 
    "b2-401a", "b2-401", "b2-402", "b2-403", "b2-404", "b2-405", "b2-406", 
    //b3
    "b3-107", "b3-106", "b3-105", "b3-104", "b3-103", "b3-102", "b3-101", "b3-108", "b3-109", "b3-110", "b3-111", "b3-112", "b3-113", "b3-114", "b3-115", "b3-116", 
    "b3-201", "b3-202", "b3-203", "b3-204", "b3-205", "b3-206", "b3-207", "b3-208", 
    //b4
    "b4-101", "b4-102", "b4-103", "b4-104", "b4-105", "b4-106", 
    "hoi truong b4", "b4-hoitruongb4", "b4-hall",
    "b4-201", "b4-202", "b4-203", "b4-204", "b4-205", "b4-206", "b4-207", "b4-208", "b4-209", 
    "b4-301", "b4-302", "b4-303", "b4-304", "b4-305", "b4-306", 
    "b4-401", "b4-402", "b4-403", "b4-405", "b4-406", 
    "b4-501", "b4-502", "b4-503", "b4-504", "b4-505", "b4-506", 
    "b4-601", "b4-602", "b4-603", "b4-604", "b4-605", "b4-606",
    //b5
    "b5-108", "b5-109",
    //b6
    "b6-101", "b6-102", "b6-103", "b6-104", "b6-105", "b6-106", 
    "giang duong hoa binh", "b6-gdb6", "hoa binh auditorium",
    "b6-201", "b6-202c", "b6-202b", "b6-202a", "b6-meetingroom", "meeting room", "b6-ce", "civil engineering",
    "b6-301", "b6-302", "b6-303", "b6-304", "b6-305", "b6-306",
    //b7
    "phong y te", "health care center", "medical facility", "student health center", "campus health center",
    //b8
    "b8-102", "b8-103", "b8-104", "b8-105", "b8-106", "b8-107", 
    "b8-202", "b8-203", "b8-204", "b8-205", "b8-206", 
    "b8-301", "b8-302", "b8-303", "b8-304", 
    //b10
    "b10-201", "b10-202", "b10-203", "b10-204", "b10-205", "b10-206", "b10-207", 
    "b10-301", "b10-302", "b10-303", "b10-304", "b10-305", "b10-306", "b10-307",
    //b11
    "b11-110", "b11-109", "b11-108", "b11-107", "b11-106", "b11-105", "b11-101", "b11-102", "b11-103", "b11-104", 
    "b11-210", "b11-209", "b11-208", "b11-207", "b11-206", "b11-205", "b11-201", "b11-202", "b11-203", "b11-204", 
    //c1
    "c1-102b", "c1-102a", "c1-103", "c1-104", "c1-105", "c1-101b", "c1-108", "c1-109", "c1-110", "c1-111",
    "c1-201a", "c1-201b", "c1-202", "c1-203", "c1-204", "c1-205", "c1-206", 
    //c4
    "c4-101", "c4-102", "c4-103", "c4-104", "c4-105", 
    "c4-201", "c4-202", "c4-203", "c4-204", "c4-204.2", 
    "c4-301", "c4-302", "c4-303", "c4-304", 
    "c4-401", "c4-402", "c4-403", "c4-404", 
    "c4-501", "c4-502", "c4-503",
    //c5
    "c5-101", "c5-102", "c5-104", "c5-106", "c5-107", 
    "c5-201", "c5-202", "c5-203", "c5-204", "c5-205", "c5-206", "c5-207", "c5-208", "c5-209", 
    "c5-301", "c5-302", "c5-303", "c5-304", 
    "c5-401", "c5-402", "c5-403", "c5-404", 
    "c5-501", "c5-502", "c5-503", "c5-504", 
    //c6
    "c6-105", "c6-104", "c6-103", "c6-102", "c6-101", 
    "c6-208", "c6-207", "c6-206", "c6-205", "c6-204", "c6-203", "c6-202", "c6-201", 
    "c6-309", "c6-308", "c6-307", "c6-306", "c6-305", "c6-304", "c6-303", "c6-302", "c6-301", 
    "c6-403", "c6-402", "c6-401", 
    "c6-503", "c6-502", "c6-501", 
    "c6-604", "c6-603", "c6-602", "c6-601", 


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
var clicked = false;
function suggest(inputBox, suggestionsContainer) {
    const inputValue = inputBox.value.toLowerCase();
    const suggestions = getSuggestions(inputValue, clicked);

    suggestionsContainer.innerHTML = "";

    if (suggestions.length > 0) {
        suggestions.sort((a, b) => {
            const numA = parseInt((a.match(/\d+/) || [])[0]);
            const numB = parseInt((b.match(/\d+/) || [])[0]); 
            return numA - numB;
        });
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement("ul");
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener("click", () => {
                inputBox.value = suggestion;
                const firstLevel = /^[a-z]\d+$/;
                console.log(inputBox.value);
                if (firstLevel.test(inputBox.value)) {
                    suggestionsContainer.style.display = "block";
                    setTimeout(() => {
                        suggest(inputBox, suggestionsContainer);
                    }, 1);
                    clicked = true;
                }
                 suggestionsContainer.style.display = "block";
            });
            suggestionsContainer.appendChild(suggestionItem);
        });

        suggestionsContainer.style.display = "block";
    } else {
        suggestionsContainer.style.display = "none";
    }
    if (inputValue === "") {
        suggestionsContainer.innerHTML = "";
    }
}

function getSuggestions(prefix, clicked) {
    const hasNumberAfterLetter = /[a-zA-Z]\d/.test(prefix);

    const filteredSuggestions = suggestionList.filter(suggestion => {
        if (hasNumberAfterLetter) {
            //console.log(suggestion.startsWith(prefix));
            if (prefix === "b1" && !clicked) {
                return suggestion.startsWith(prefix) && !/\d-\d/.test(suggestion) && !/\d-[a-z]/.test(suggestion);
            }
            else if (prefix === "b1" && clicked) {
                return suggestion.startsWith(prefix) && !/b10/.test(suggestion) && !/b11/.test(suggestion) && !/b12/.test(suggestion);
            }
            else return suggestion.startsWith(prefix);
        } else {
            //console.log(suggestion.startsWith(prefix) && !(/\d-\d/ || /\d-[a-z]/).test(suggestion));
            return suggestion.startsWith(prefix) && !/\d-\d/.test(suggestion) && !/\d-[a-z]/.test(suggestion);
        }
    });

    return filteredSuggestions.sort();
}
//resetb1
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is Backspace
    if (event.key === "Backspace" || event.keyCode === 8 || event.key === "Delete" || event.keyCode === 46) {
        clicked = false;
    }
});
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
