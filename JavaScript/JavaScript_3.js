function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is a famous dish in " + character.innerHTML + ".");
}