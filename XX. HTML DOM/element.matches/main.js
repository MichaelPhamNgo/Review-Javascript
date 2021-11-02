const innerContainer = document.querySelector(".container").children;
for(let i = 0; i < innerContainer.length; ++i) {  
  if(innerContainer[i].matches('.red')) {
    innerContainer[i].style.color = 'red';
  } else if(innerContainer[i].matches('.green')) {
    innerContainer[i].style.color = 'green';
  } else if(innerContainer[i].matches('.blue')) {
    innerContainer[i].style.color = 'blue';
  } else if(innerContainer[i].matches('.orange')) {
    innerContainer[i].style.color = 'orange';
  }
}