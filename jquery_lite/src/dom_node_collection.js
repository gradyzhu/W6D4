class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(str) {
    if (str) {
      this.arr.forEach(el => {
        el.innerHTML = str;
      })
    } else {
      return this.arr[0].innerHTML;
    }
  }

  empty() {
    this.arr.forEach(el => {
      el.html = "";
    });
  }

  append(content) {
    this.arr.forEach(el => {
      el.innerHTML += content;
    })
  }

  attr(attrName) {
    this.arr.forEach(el => {
      el.getAttribute(attrName);
    })
  }

  addClass(className) {
    this.arr.forEach(el => {
      el.classList.add(className)
    })
  }

  removeClass(className) {
    this.arr.forEach(el => {
      el.classList.remove(className);
    })
  }

  children() {
    let childArr = [];
    this.arr.forEach(el => {
      elChildrenArr = Array.from(el.children);
      childArr = childArr.concat(elChildrenArr)
    })
    return new DOMNodeCollection(childArr);
  }

  parent() {
    let parentArr = [];
    this.arr.forEach(el => {
      if (el.parent instanceof DOMNodeCollection) parentArr.push(el);
    })
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let selectorList = this.filter(el => (el === selector));
    let selectorListArr = Array.from(selectorList);
    return new DOMNodeCollection(selectorListArr);
  }

  remove() {
    this.arr.forEach(el => {
      el.html.remove();
    })
  }


}

module.exports = DOMNodeCollection