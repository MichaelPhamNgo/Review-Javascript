//initial list colors and default color and default size
const initialColors = {
    colors: [
        "blue", "gray", "green", "red", "yellow"
    ],
    defColor : "blue",
    defSize : 14
};

/**
 * function loadColors(colors, defColor)
 *      colors: array of colors
 *      defColor: default color when the first loading in the first time, and color when we clicked on a specific color      
 */
function loadColors(colors, defColor, defSize) {
    const eleColors = colors.map(function(color, index){
        return `<div key=${index} class='box ${color} ${color === defColor ? 'active' : ''}' onclick='changeColor("${color}")'></div>`;
    });    
    let htmlColorPicker = "";
    for(let color of eleColors) {
        htmlColorPicker += color;
    }    

    document.querySelector(".color-picker .card-body").innerHTML = htmlColorPicker;    
    document.querySelector(".setting-info").innerHTML = `Color: ${defColor} - Font size: ${defSize}px`;    
    document.querySelector(".size-adjustment .card-header").innerHTML = `Size: : ${defSize}px`;
    document.querySelector(".display").className = `display border-${defColor}`;    
    document.querySelector(".display").style.fontSize = `${defSize}px`;
}

//load in the first time
loadColors(initialColors.colors, initialColors.defColor, initialColors.defSize);

//function for onclick event
function changeColor(color) {
    initialColors.defColor = color;
    loadColors(initialColors.colors, initialColors.defColor, initialColors.defSize);
}

//function reset
function reset() {
    initialColors.colors = ["blue", "gray", "green", "red", "yellow"];
    initialColors.defColor = "blue";
    initialColors.defSize = 14;
    loadColors(initialColors.colors, initialColors.defColor, initialColors.defSize);
}

//function changeSize
function changeSize(increment) {
    initialColors.defSize = initialColors.defSize + increment;    
    loadColors(initialColors.colors, initialColors.defColor, initialColors.defSize);
}