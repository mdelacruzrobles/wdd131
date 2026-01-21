const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list")
const li =document.createElement("li");
li.textContent = input.value;
const deleteButton = document.createElement("button");
deleteButton.textContent = "❌"
deleteButton.setAttribute("aria-label", "Remove chapter");
list.append(li);
li.append(deleteButton);