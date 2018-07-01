function getURL()         
 
            {
//             return 'http://www.be1worldservices.com/maxima/';
             return 'http://lucreforex.lmcomercial.com.br/ws/';
         
    } 	

	function openOrder()         

            {
				
          var e = document.getElementById('oper');
          var oper = e.options[e.selectedIndex].value;
          var typ = document.getElementById('type');
          var type = typ.options[typ.selectedIndex].value;
					var par = document.getElementById('par').value;
					var stopl = document.getElementById('stopl').value;
          var profit = document.getElementById('profit').value;
					var error = true;
					console.log('openOrder');
                $.ajax({
                    type: "GET",
                    url: getURL()+"open-order.php",
                    timeout: 3000,
                    contentType: "application/json; charset=utf-8",
					data: {"oper": oper, "par":par, "stopl":stopl,"profit":profit,"type":type},
                    success: function (result, jqXHR) {
         
                       var userData = JSON.parse(result);
 
                       if (userData.MESSAGE == "OK"){
            						   $("#msg").html('<center><b>Enviado: '+oper+' Qt.Usuarios: '+userData.QTUSERS+'</center>');
            						   error = true;
                       }
                       else
                       {
                           $("#msg").html('<center><b>'+userData.MESSAGE+'</center>');
                           error = false;
                       }                   
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#msg").html("<center>Server busy try again later... "+status+"</center>");
                        error = false;
					
					},
                });
				
				return error;
         
    } 	

  function updateOrder()         

            {
        
          var e = document.getElementById('oper');
          var oper = e.options[e.selectedIndex].value;
          var typ = document.getElementById('type');
          var type = typ.options[typ.selectedIndex].value;
          var par = document.getElementById('par').value;
          var stopl = document.getElementById('stopl').value;
          var profit = document.getElementById('profit').value;
          var error = true;
          console.log('updateOrder');
                $.ajax({
                    type: "GET",
                    url: getURL()+"atualiza-ordem-aberta.php",
                    timeout: 3000,
                    contentType: "application/json; charset=utf-8",
          data: {"oper": oper, "par":par, "stopl":stopl,"profit":profit,"type":type},
                    success: function (result, jqXHR) {
         
                       var userData = JSON.parse(result);
 
                       if (userData.MESSAGE == "OK"){
                           $("#msg").html('<center><b>Alt enviada: '+oper+' Qt.Usuarios: '+userData.QTUSERS+'</center>');
                           error = true;
                       }
                       else
                       {
                           $("#msg").html('<center><b>'+userData.MESSAGE+'</center>');
                           error = false;
                       }                   
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#msg").html("<center>Server busy try again later... "+status+"</center>");
                        error = false;
          
          },
                });
        
        return error;
         
    }   


  function addOrderUserDB()         

            {
				
					var uid = document.getElementById('iduser').value;
					var name = document.getElementById('name').value;
					var address = document.getElementById('address').value;
					var gender = document.getElementById('gender').value;
					var height = document.getElementById('height').value;
					var weight = document.getElementById('weight').value;
					console.log('addUser');
                $.ajax({
                    type: "GET",
                    url: getURL()+"update-user.php",
                    timeout: 3000,
                    contentType: "application/json; charset=utf-8",
					data: {"uid": uid, "name":name, "address":address , "gender":gender, "height":height, "weight":weight},
                    success: function (result, jqXHR) {
         
                       var userData = JSON.parse(result);
 
                       if (userData.MESSAGE == "OK"){
                           $("#uid").val(userData.UID);
						   $("#message-signup-2").html('<center><b>'+userData.MESSAGE+'</center>');
                           sendText(userData.UID);
						   activate_page("#signup2");
                       }
                       else
                       {
                           $("#message-signup-2").html('<center><b>'+userData.MESSAGE+'</center>');
                       }                   
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#message-conf").html("<center>Server busy try again later... "+status+"</center>");
					
					},
                });
				
         
    }	

	

	
  function sendText(uid)         

            {
				
					console.log('sendText');
                $.ajax({
                    type: "GET",
                    url: getURL()+"send-text.php",
                    timeout: 3000,
                    contentType: "application/json; charset=utf-8",
					data: {"uid": uid},
                    success: function (result, jqXHR) {
         
                       var userData = JSON.parse(result);
 
                       $("#message-signup-3").html('<center><b>'+userData.MESSAGE+'</center>');
         
         
                    },
                    error: function (jqXHR, status) {
                        $("#message-signup-3").html("<center>Server busy try again later... "+status+"</center>");
					
					},
                });
				
         
    }	
	
	
	
	
function sendEmail()         
            

            {
                $("#messageReturnEmail").html("<center></center>");
                $("#message-signup").html("<center></center>");
                var uid = document.getElementById('iduser').value; 
                var manuf = document.getElementById('idmanufacturer').value; 
                var typeEmail = document.getElementById('typeEmail').value; 
                var subject = document.getElementById('emailSubject').value; 
                var message = document.getElementById('emailText').value; 
                console.log('sendEmail to:'+manuf+'type:'+typeEmail);
                $.ajax({
                    type: "GET",
                    url: getURL()+"send-emailcontact.php",
                    timeout: 8000,
					data: {"uid": uid,"subject": subject,"message": message,"manuf": manuf,"typeemail": typeEmail},
                    contentType: "application/json; charset=utf-8",
                    success: function (result, jqXHR) {
                        console.log('RESULT EMAIL:'+result);
                        var retemail = JSON.parse(result);
                        console.log('RESULT EMAIL:'+result);
                        $("#messageReturnEmail").html("<center>Message Sent.</center>");
                        $("#message-signup").html("<center>Message Sent.</center>");

						//activate_page("#pg-services");
         
                    },
                    error: function (jqXHR, status) {
                        $("#messageReturnEmail").html("<center>Server busy try again later...  "+status+"</center>");
                    },
                });
         
    } 

   function listOrdens()         

            {
                // clean list div...
                $("#ordenslistfield").empty();
 
                console.log ('listOrdens');
 
               $.ajax({
                    type: "GET",
                    url: getURL()+"list-ordens.php",
                    timeout: 5000,
                    contentType: "application/json; charset=utf-8",
                    success: function (result, jqXHR) {
         
                        var ordens = JSON.parse(result);
            
                        $.each(ordens,function(i, ordem){
                            var tipoordem = '';
                            if (ordem.TIPO === 'COM')
                               tipoordem = 'BUY';
                             else  
                               tipoordem = 'SELL';

                            var item = "<table border='0' width='98%' style='background-color:white;'>";
                                item = item + "<tr><td><b>"+ordem.PAR+"</> - Usuário:&nbsp;&nbsp; "+ordem.NAME+"</td></tr>";
                                item = item + "<tr><td>"+tipoordem+ "&nbsp;&nbsp; Open Price:&nbsp;&nbsp; "+ ordem.OPENPRICE +"</td></tr>";
                                item = item + "<tr><td>S/L: "+ordem.STOPL+ "&nbsp;&nbsp;T/P: "+ ordem.ALVO +"</td></tr></table><hr>";
                                $("#ordenslistfield").append(item); 

                        });

                     activate_page("#ordenslist"); 

         
                    },
                    error: function (jqXHR, status) {
                        $("#ordenslistfield").html("<center>Server Busy try later...  "+status+"</center>");
                    },
                });
         
    } 

