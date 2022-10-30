
// BI Logic

function languageSuggester(activities, flavor, learn, code, dog) {

  let result = "The first program language you should learn is ";
  
  if (code === "no" || flavor === "vanila" || learn === "It's challenging") {
    return result = result + "Ruby.";
  } else if (activities === "Practice coding" && learn === "It's fun"){
    return result = result + "Python.";
  } else if (code === "Yes" || dog === "Absolutely") {
    return result = result + "JavaScript.";
  } else {
    return result = "You can learn whichever you want for now!";
  }
}


//UI logic

function getData(event) {
  event.preventDefault();

  const activities = document.getElementById("activities").value;
  const flavor = document.getElementById("flavor").value;
  const learn = document.getElementById("learn").value;
  const code = document.querySelector("input[name='code']:checked").value;
  const dog = document.querySelector("input[name='dog']:checked").value;
console.log("act: " + activities); // got data from the form
console.log("act: " + flavor);


let finalResult = languageSuggester(activities, flavor, learn, code, dog);

document.getElementById("mainOutput").removeAttribute("class");
document.getElementById("questions").classList.add("hidden");

document.getElementById("outPut").innerText = finalResult;
console.log(finalResult);
}

function goBackButton() {
  document.getElementById("questions").removeAttribute("class");
  document.getElementById("mainOutput").classList.add("hidden");
}

window.addEventListener("load", function() {
  document.getElementById("questions").addEventListener("submit", getData);
});

window.addEventListener("load", function() {
  document.getElementById("backButton").addEventListener("click", goBackButton);
});