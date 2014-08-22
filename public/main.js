$("#guestbookformsubmit").click(function(event){
event.preventDefault();
var firstname, lastname;
firstname = $("#firstname").value();
lastname = $("#lastname").value();
$.get("joohee.heroku.com?fn="+firstname+"&ln="+lastname, function(error,data){
	$("#results").html(data);


});

});