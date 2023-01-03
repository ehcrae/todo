/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
var itemCount = 0;

function spawnItem() {
  // create the new item to be added
  const newItem = document.createElement("li");
  const node = document.createTextNode("Item...");
  newItem.appendChild(node);

  //add the new item to the list
  const element = document.getElementById("list");
  element.appendChild(newItem);

  //confirm
  itemCount++;
  console.log('spawned item', itemCount);
}

document.getElementById("spawnItem").onclick = () => {
  spawnItem();
}