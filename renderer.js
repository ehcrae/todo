/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
"use strict";

// variables
var itemCount = 0;
var itemDict = {};
const form = document.getElementById("popupForm");
// create hidden input field and submit button
const inputField = document.createElement("input");
inputField.hidden = true;
const submitButton = document.createElement("input");
submitButton.hidden = true;

class Item {
  constructor(id, input) {
    this.id = id;
    this.input = input;
  }
}

function createField() {
  // show the input field, add the rest of it's props
  inputField.hidden = false;
  inputField.type = "text";
  inputField.id = "itemText";
  inputField.name = "itemData";
  inputField.placeholder = "i have to...";
  form.appendChild(inputField);
  // show submit button, add the rest of it's props
  submitButton.hidden = false;
  submitButton.type = "submit";
  submitButton.id = "itemSubmit";
  submitButton.text = "Submit Item";
  form.appendChild(submitButton);
  
  createItem();
}

function createItem() {

  // listen for user to submit item
  document.getElementById('popupForm').addEventListener('submit', (evt) => {
    // prevent default refresh functionality of forms
    evt.preventDefault();

    // return the input to the itemList function
    const input = evt.target[0];

    //check if item is null
    if (input.value === "") return null;

    // new item object
    itemDict["Todo "+ itemCount] = new Item(itemCount, input.value); //HERERHERHERHEHREHRHE
    //send item to the list function
    itemToList(input.value);
    // reset the input to clean the field
    input.value = "";
    //now hide the form
    // get the element by id, and delete that id?

    // item id counter incremented, confirm it exists
    itemCount++;
    console.log(itemDict);

    // hide input field and submit button
    inputField.hidden = true;
    submitButton.hidden = true;
  })
}

function itemToList(itemText) {
  // create the new item to be added
  const newItem = document.createElement("li");
  const nodeText = document.createTextNode(itemText);
  newItem.appendChild(nodeText);
  //add the new item to the list
  const element = document.getElementById("itemList");
  element.appendChild(newItem);
}

// Watch for click
document.getElementById("createItemButton").onclick = () => createField();