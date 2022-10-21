function getData(event) {
  event.prevenDefault();
  const activities = document.getElementById("activities").value;
  const flavor = document.getElementById("flavor").value;
  const learn = document.getElementById("learn").value;
  const code = document.querySelector("input[name='code']:checked").value;
  const dog = document.querySelector("input[name='dog']:checked").value;
}
window.addEventListener("load", function() {
  document.getElementById("questions").addEventListener("submit", getData);
});

window.addEventListener("load", function(){
  
}