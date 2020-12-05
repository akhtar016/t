function move() {

    const startTemp = document.getElementById("sTemp").value;
    const endTemp = document.getElementById("eTemp").value;
    const milliseconds = document.getElementById("intervalS").value;

    let sTValue = parseFloat(startTemp)
    let eTValue = parseFloat(endTemp)
    let mSValue = parseFloat(milliseconds)

    console.log(sTValue, eTValue,mSValue)

    let difference = eTValue - sTValue;

    var elem = document.getElementById("myBar");
    var width = sTValue;
    var id = setInterval(frame, mSValue);

    function frame() {
      if (width >= eTValue) {
        clearInterval(id);
      } else {
        width = width + (difference * 0.2);
        elem.style.width = width/2 + "%";
        elem.innerHTML = width;


        if (width <= (difference * 0.2)) {
          elem.style.backgroundColor = "blue"
        } else if (width <= (difference * 0.4)) {
          elem.style.backgroundColor = "green"
        } else if (width <= (difference * 0.6)) {
          elem.style.backgroundColor = "yellow"
        } else if (width <= (difference * 0.8)) {
          elem.style.backgroundColor = "orange"
        } else {
          elem.style.backgroundColor = "red"
        }




      }
    }

}


// blue
// green
// yellow
// orange 
// red