/*
//Add items to list

let addBtn = document.getElementById("add_btn");
addBtn.addEventListener('click', addChapter);

function addChapter(e) {
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;

  let newLi = document.createElement("Li")
  newLi.classList.add('list-group-item')

  newLi.textContent = currentInput.value

  let listToAdd = document.getElementById('listToAdd'
  )
  
  listToAdd.appendChild(newLi)
}

//Remove items from list

*/

const addBtn = document.getElementById("add_btn");
const inputField = document.querySelector(".form-control");
const list = document.getElementById("listToAdd");

addBtn.addEventListener("click", addChapter);

//create list

function addChapter() {
  const listItem = document.createElement("li");
  listItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between"
  );
  const chapterName = document.createElement("h1");
  chapterName.innerText = inputField.value;

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-dark");
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.innerText = "Delete";

  // Append elements 
  listItem.appendChild(chapterName);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);

  list.appendChild(listItem);

  inputField.value = "";
  editBtn.addEventListener("click", editChapter);
  deleteBtn.addEventListener("click", deleteChapter);
}

function editChapter() {}

function deleteChapter(event) {
  const listItem = event.target.parentNode;
  list.removeChild(listItem);
}
