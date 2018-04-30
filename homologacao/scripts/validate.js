var request;
$("#fale_conosco").submit(function(event){
	if (request) {
		request.abort();
	}
	var nome = $("#nome").val();
	var email = $("#email").val();
	var mensagem = $("#mensagem").val();
	
	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	if(nome == '' || email == '' || mensagem == ''){
		alert("Por favor, verifique os campos obrigatórios");
	}	
	else{
		if (!validateEmail(email)) {
			alert("Informe seu e-mail corretamente");
		}else{	
			var $form = $(this);
			var $inputs = $form.find("input, select, button, textarea");
			var serializedData = $form.serialize();
			$inputs.prop("disabled", true);
			request = $.ajax({
				url: "form.php",
				type: "post",
				data: serializedData
			});

			request.done(function (response, textStatus, jqXHR){
				alert(response);
			});
			request.fail(function (jqXHR, textStatus, errorThrown){
				alert(
					"Ocorreu um erro: "+
					textStatus, errorThrown
				);
			});

			request.always(function () {
				$inputs.prop("disabled", false);
			});
		}
	}
	event.preventDefault();
});