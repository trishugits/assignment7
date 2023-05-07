var index = 0;
function changeColors(){

    var colors = ["red", "yellow", "orange", "green", "purple", "brown", "fuschia"];
    document.getElementsByTagName("body");
    document.body.style.backgroundColor = colors[index++];
    if(index > colors.length - 1)
    index = 0;
    
}

