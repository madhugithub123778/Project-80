function getPara1(){
var inputs_array=[];
for (var i=1; i<=6; i++){
inputs_array.push(document.getElementById("sentence_"+i).value);
inputs_array.join(". ");
document.getElementById("showPara1").innerHTML=inputs_array.join(". ");

}



}


function getPara2(){
    var inputs_array2=[];
    for (var j=1; j<=6; j++){
    inputs_array2.push(document.getElementById("clause_"+j).value);
    inputs_array2.join(". ");
    document.getElementById("showPara2").innerHTML=inputs_array2.join(". ");
    
    }
    
    
    
    }