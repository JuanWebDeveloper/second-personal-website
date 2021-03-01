/*--=====================================================
|-Form Validation                                      |
=======================================================--*/
function formValidation() {
    
    $('.mistake').remove();

     var name = $('#name').val();
     var email = $('#email').val();
     var affair = $('#affair').val();
     var message = $('#message').val();

     if (name == "" || name == null) {
        changeColor("name");
        mistakeMessage("Obligatory Field");
        return false;

     }else{
         var expression = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

         if (!expression.test(name)) {
            changeColor("name");
            mistakeMessage("enter a valid name");
            return false;
         }
     }

     if (email == "" || email == null) {
        changeColor("email");
        mistakeMessage("Obligatory Field");
        return false;

     }else{
         var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

         if (!expression.test(email)) {
            changeColor("email");
            mistakeMessage("enter a valid email");
            return false;
         }
     }

     if (affair == "" || affair == null) {
        changeColor("affair");
        mistakeMessage("Obligatory Field");
        return false;

     }else{
         var expression = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

         if (!expression.test(affair)) {
            changeColor("affair");
            mistakeMessage("no special characters allowed");
            return false;
         }
     }

     if (message == "" || message == null) {
        changeColor("message");
        mistakeMessage("Obligatory Field");
        return false;

     }else{
         var expression = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
         
         if (!expression.test(message)) {
             changeColor("message");
             mistakeMessage("no special characters allowed");
             return false;
            }
        }
            
        $('form').submit();
        return true;
    
    }
   

$('input').focus(function() {
    $('.mistake').remove();
    defaultColor('name');
    defaultColor('email');
    defaultColor('affair');
});

$('textarea').focus(function() {
    $('.mistake').remove();
    defaultColor('message');
});

function defaultColor(fact) {
    $('#' + fact).css({
        border: "1px solid rgb(0, 188, 227, 0.3)"
    });
}

function changeColor(fact) {
    $('#' + fact).css({
        border: "2px solid #dd5144"
    });
}

function mistakeMessage(text) {
    $('#name').before('<div class="mistake">Mistake: ' + text + '</div>');
}
