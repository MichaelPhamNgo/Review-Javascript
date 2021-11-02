const innerContainer = document.querySelector(".container").children;
for(let i = 0; i < innerContainer.length; ++i) {
  console.log(innerContainer[i].nodeName);  
}