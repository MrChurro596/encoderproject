//Checks which button is pressed
$("input[type='radio']").click(function() {

  $("input:checked").prop('checked', false);

  $(this).prop('checked', true);

});

//Follows which button is checked and uses the code needed
if ($("input:checked").val() == "echo") {



}

else if ($("input:checked").val() == "Caeser Cipher") {



}

else if ($("input:checked").val() == "Heiroglyphics") {



}


$("#inputArea").keydown(function(e){

  $("#textArea").append(String.fromCharCode(event.which));

});
