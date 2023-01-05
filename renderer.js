/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
var itemCount = 0;

function itemList(text) {
  // create the new item to be added
  const newItem = document.createElement("li");
  const node = document.createTextNode(text);
  newItem.appendChild(node);

  //add the new item to the list
  const element = document.getElementById("itemList");
  element.appendChild(newItem);

  //confirm
  itemCount++;
  console.log('spawned item no.', itemCount, "with value", text);
}

function createItem() {
  // popup field
  const form = document.getElementById("popupForm");
  
  const input = document.createElement("input");
  input.type = "text";
  input.id = "itemText";
  input.name = "itemData";
  form.appendChild(input);

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "itemSubmit";
  submit.text = "Submit Item";
  form.appendChild(submit);

  // this onclick creates the new, seemingly empty (of text) item, but instantly removes the entire contents of the <ul> in index.html?
  document.getElementById('popupForm').addEventListener('submit', (evt) => {
    // prevent default refresh functionality of forms
    evt.preventDefault();
    // return the input to the itemList function
    const input = evt.target[0];
    itemList(input.value);

    // reset the input to clean the field
    input.value = "";
  })
}
// submit button clicked.
document.getElementById("itemButton").onclick = () => createItem();
