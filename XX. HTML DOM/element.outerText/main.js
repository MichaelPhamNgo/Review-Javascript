function getOuterText() {
    console.log(document.querySelector("p").outerHTML);   //<p>   This element has extra spacing   and contains <span>a span element</span>.</p>
  }