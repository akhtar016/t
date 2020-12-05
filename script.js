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
      }
    }

}


// blue
// green
// yellow
// orange 
// red