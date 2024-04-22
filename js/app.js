const input = document.querySelector("#txtFruit");
const suggestions = document.querySelector("#suggestions"); // NOTE: I'm not selecting a class or list items etc...just the id of the unordered list

const fruits = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Blueberry', 'Blackberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry'];

function search(e) {
  //console.log(e.target.value);
  let str = e.target.value.toLowerCase();
  let results = [];
  suggestions.innerHTML = ""; // you need to reset the suggestions list items everytime a new char is entered
  if (str.length < 1) {
     return;  // if the current input text is blank, don't show any suggestions
  }
  for (let fruit of fruits) {
    let fruitLowercase = fruit.toLowerCase();
    if (fruitLowercase.includes(str)) {
      results.push(fruit);
    }
  }

  showSuggestions(results, str);
}

function showSuggestions(results, inputVal) {
  for (let result of results) {
    var li = document.createElement("li");
    li.addEventListener("click", useSuggestions);
    li.appendChild(document.createTextNode(result));
    suggestions.appendChild(li);
  }
}

function useSuggestions(e) {
  //console.log(e.target.innerHTML);
  alert('You selected ' + e.target.innerHTML);
}

input.addEventListener("keyup", e => search(e));
