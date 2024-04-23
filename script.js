function display(input){
    document.getElementById("displaybox").value=document.getElementById("displaybox").value+input;
}
function del(){
    document.getElementById("displaybox").value=document.getElementById("displaybox").value.slice(0,-1);
}
function cleardisplay(){
    document.getElementById("displaybox").value="";
}
function calculate(){
    var input=document.getElementById("displaybox").value;
    try{
        var output=eval(input);
        document.getElementById("displaybox").value=output;
    }
    catch(error){
        alert("Invalid entry");
    }
}