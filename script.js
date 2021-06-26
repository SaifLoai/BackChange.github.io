function changeColor(getColor){
    let bg = document.querySelector(".bg");
    let selectColor = getColor.value;
    let selectbg = document.querySelector(".selectColor");
    let textColor = getColor.options[getColor.selectedIndex].text;
    let selectChange;
    bg.style.background = selectColor ; 
    bg.innerHTML = textColor;
    let sel = getColor.selectedIndex;
    selectChange = getColor.options[sel].value;
    
    selectbg.style.color = selectChange;
}