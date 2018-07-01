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
        if ((oper == 'UP') && ((stopl == '') || (profit == '')))
            {
                $("#msg").html('<center><b>Stop e profit devem ser informados</center>');

            }
        else
            openOrder();
         return false;
    });
    
        /* listitem  #ordenslist */
    $(document).on("click", "#ordenslist", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #listord */
    
    
        /* listitem  #ordenslist */
    $(document).on("click", "#ordenslist", function(evt)
    {
         /*global activate_page */
         activate_page("#orderlist"); 
         return false;
    });
    
        /* button  .uib_w_18 */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Voltar */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #listord */
    $(document).on("click", "#listord", function(evt)
    {
        /* your code goes here */ 
         listOrdens();
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
