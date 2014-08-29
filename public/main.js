$("#guestbookformsubmit").click(function(event){
event.preventDefault();
var firstname, lastname;
firstname = $("#firstname").val();
lastname = $("#lastname").val();
$.get("http://joohee.herokuapp.com?fn="+firstname+"&ln="+lastname, function(error,data){
	$("#results").html(data);


});

});