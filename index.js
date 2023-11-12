
function change(){

var a=document.getElementById('cel').value;
var f=(a*1.8)+32;
document.getElementById('heading').innerText=`${a} C=${f} F`;

}

function change1(){
var b=document.getElementById('farh').value;
var c=(b-32)*5/9;
document.getElementById('heading1').innerText=`${b} F=${c} C`;
}

