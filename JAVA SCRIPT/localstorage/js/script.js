$(document).ready(function(){

$('#save').click(function(){
localStorage.setItem("fname", $('#f-name').val());/*while clicking the save button, i just get the values from the input type text(firstname) and save it to the local storage as a name of "f-name" */
localStorage.setItem("lname", $('#l-name').val());/*same as above comment*/
});

$('#edit').click(function(){
$('#f-name').focus();/*while clicking the edit button,i just focusing the first text box and it behave likes editing the values*/
});

});


$(window).load(function(){
storage();/*i call the function on load of DOM,because if i refresh the page the values will not disappears*/
});

var storage=function(){
$('#f-name').val(localStorage.getItem("fname"));/*here i just getting the values from local storage using name which i stored in local storage*/
$('#l-name').val(localStorage.getItem("lname"));
}