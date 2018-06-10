/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btsend */
    $(document).on("click", "#btsend", function(evt)
    {
        /* your code goes here */ 
          var e = document.getElementById('oper');
          var oper = e.options[e.selectedIndex].value;
        var par = document.getElementById('par').value;
		var stopl = document.getElementById('stopl').value;
        var profit = document.getElementById('profit').value;
        
        if (par == '')
            {
                $("#msg").html('<center><b>Par inválido</center>');

            }
        else
        if ((oper == 'OP') && ((stopl == '') || (profit == '')))
            {
                $("#msg").html('<center><b>Stop e profit devem ser informados</center>');

            }
        else
            openOrder();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
