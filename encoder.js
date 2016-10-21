//Caeser Cipher Conversion Object
var CaeserCipherConversion = {

  "A":"Z",
  "B":"A",
  "C":"B",
  "D":"C",
  "E":"D",
  "F":"E",
  "G":"F",
  "H":"G",
  "I":"H",
  "J":"I",
  "K":"J",
  "L":"K",
  "M":"L",
  "N":"M",
  "O":"N",
  "P":"O",
  "Q":"P",
  "R":"Q",
  "S":"R",
  "T":"S",
  "U":"T",
  "V":"U",
  "W":"V",
  "X":"W",
  "Y":"X",
  "Z":"Y"

}


//Checks which button is pressed
$("input[type='radio']").click(function() {

  $("input:checked").prop('checked', false);

  $(this).prop('checked', true);

});

//Follows which button is checked and uses the code needed
if ($("input:checked").val() == "Echo") {

  $("#inputArea").keydown(function() {

    var userInput = $("inputArea").val();

    $("#textArea").append(userInput);

  });

}

else if ($("input:checked").val() == "Caeser_Cipher") {
  $("#inputArea").keydown(function() {

    var Encode = $("inputArea").val();

    var Endcoder = Encode.split("");

    var Encoded = CaeserCipherConversion[Encoder[0]];

    $("#textArea").append(Encoded);

  });


}

else if ($("input:checked").val() == "Heiroglyphics") {



}


$("#inputArea").keydown(function(e) {

  $("#textArea").append(String.fromCharCode(event.which));

});
