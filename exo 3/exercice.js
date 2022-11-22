let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = "un(e) " + document.getElementById("noun").value + " " + document.getElementById("adjective").value + " a mangé(e) " + document.getElementById("person").value;
};
libButton.addEventListener('click', libIt);







