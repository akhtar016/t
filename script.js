function move() {

    const startTemp = document.getElementById("sTemp").value;
    const endTemp = document.getElementById("eTemp").value;
    const milliseconds = document.getElementById("intervalS").value;

    let sTValue = parseFloat(startTemp)
    let eTValue = parseFloat(endTemp)
    let mSValue = parseFloat(milliseconds)

    console.log(sTValue, eTValue,mSValue)


    var i = 0;

    if (i == 0) {
    var elem = document.getElementById("myBar");
    var width = sTValue;
    var id = setInterval(frame, mSValue);
    function frame() {
      if (width >= eTValue) {
        clearInterval(id);
      } else {
        width = width + 20;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}