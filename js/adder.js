const addBtn = doc.querySelector(".add_schezule");
const addPlace = doc.getElementById("add_place");

addBtn.addEventListener("click", () => {
  const hasAdded = doc.createElement("div");
  const beAdded = doc.createTextNode("추가합니다.");
  hasAdded.append(beAdded);
  addPlace.append(hasAdded);
});
addPlace.innerHTML += "<div class='adder'>추가합니다</div>";
