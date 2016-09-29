function function_mean() {
    var r = (parseInt(mygrade1.value) / parseInt(totalgrade1.value) +
        parseInt(mygrade2.value) / parseInt(totalgrade2.value) +
        parseInt(mygrade3.value) / parseInt(totalgrade3.value) +
        parseInt(mygrade4.value) / parseInt(totalgrade4.value)) / 4
    var m = r * 100
    document.getElementById("result").innerHTML = r + ' -> ' + m + '/100';
}

function function_weighted() {
    var r = ((parseInt(mygrade1.value) / parseInt(totalgrade1.value))*weight1.value +
        (parseInt(mygrade2.value) / parseInt(totalgrade2.value))*weight2.value +
        (parseInt(mygrade3.value) / parseInt(totalgrade3.value))*weight3.value +
        (parseInt(mygrade4.value) / parseInt(totalgrade4.value))*weight4.value) /
        (parseInt(weight1.value)+parseInt(weight2.value)+parseInt(weight3.value)+parseInt(weight4.value))
    var m = r * 100
    document.getElementById("result").innerHTML = r + ' -> ' + m + '/100';
}

function function_reset(){
  document.getElementById("weight1").value="";
  document.getElementById("weight2").value="";
  document.getElementById("weight3").value="";
  document.getElementById("weight4").value="";
  document.getElementById("mygrade1").value="";
  document.getElementById("mygrade2").value="";
  document.getElementById("mygrade3").value="";
  document.getElementById("mygrade4").value="";
  document.getElementById("totalgrade1").value="";
  document.getElementById("totalgrade2").value="";
  document.getElementById("totalgrade3").value="";
  document.getElementById("totalgrade4").value="";
  document.getElementById("totalgrade4").value="";
  document.getElementById("result").value="";

}
