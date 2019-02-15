// entry point
const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function (arg) {

  if (arg instanceof HTMLElement) {
    let NodeList = document.querySelectorAll(arg);
    let NodeListArr = Array.from(NodeList);
    return new DOMNodeCollection(NodeListArr);
  } else {
    let NodeList = document.getElementsByClassName(arg);
    let NodeListArr = Array.from(NodeList);
    return new DOMNodeCollection(NodeListArr);
  }
 
}