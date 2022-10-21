function getData(event) {
  event.preventDefault();
  const activities = document.getElementById("activities").value;
  const flavor = document.getElementById("flavor").value;
  const learn = document.getElementById("learn").value;
  const code = document.querySelector("input[name='code']:checked").value;
  const dog = document.querySelector("input[name='dog']:checked").value;

let result = "Your language is ";
if (code === "no" || flavor === "vanila") {
  result = result + "Ruby";
} else if (activities === "Practice coding" && learn === "It's fun"){
  result = result + "Python";
} else if (code === "Yes" || dog === "Absolutely") {
  result = result + "JavaScript";
}

document.getElementById("mainOutput").removeAttribute("class");

document.getElementById("questions").classList.add("hidden");

document.getElementById("outPut").innerText = result;
}

window.addEventListener("load", function() {
  document.getElementById("questions").addEventListener("submit", getData);
});
