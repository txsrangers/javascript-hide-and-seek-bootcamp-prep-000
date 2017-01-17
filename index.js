function getFirstSelector(selector) {
  return document.querySelector([selector]);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var elements = document.querySelectorAll('.ranked-list li');
  for(let i=0; i<elements.length; i++) {
   elements[i].textContent = parseInt(elements[i].textContent) + n;
  }
}

function deepestChild() {
  var elements = document.querySelectorAll('#grand-node');
  return elements.children[0].children[0].children[0].children[0].textContent;
}
