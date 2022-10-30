function getData(event) {
  event.preventDefault();
  const activities = document.getElementById("activities");
  console.log(activities.options);
  const flavor = document.getElementById("flavor").value;
  const learn = document.getElementById("learn").value;
  const code = document.querySelector("input[name='code']:checked").value;
  const dog = document.querySelector("input[name='dog']:checked").value;

let result = "The first program language you should learn is ";
if (code === "no" || flavor === "vanila" || learn === "It's challenging") {
  result = result + "Ruby.";
} else if (activities === "Practice coding" && learn === "It's fun"){
  result = result + "Python.";
} else if (code === "Yes" || dog === "Absolutely") {
  result = result + "JavaScript.";
}

document.getElementById("mainOutput").removeAttribute("class");
document.getElementById("questions").classList.add("hidden");

document.getElementById("outPut").innerText = result;
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