function validateForm() {
    var x = document.forms["Whatsopen"]["Place"].value;
    var y = document.forms["Whatsopen"]["Time"].value;
    if (x=="Select options" || y=="Select option") {
        alert("Option must be selected");
        return false;
    }
}
function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : event.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }