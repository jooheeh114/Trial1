$("#guestbookformsubmit").click(function(event){
event.preventDefault();
var firstname, lastname;
firstname = $("#firstname").val();
lastname = $("#lastname").val();
$.get("http://joohee.herokuapp.com/api?fn="+firstname+"&ln="+lastname, function(data, error){
	$("#results").html(data);


});

});