<?php
	
	$emailto = "cynthia@thinkinovacao.com.br"; // Your email address here
	$assunto = "Contato pelo site por" . $_POST['nome'];
	
	$validationOK=true;
	if (!$validationOK) {
	  echo "Error";
	  exit;
	}

	$Body = "";
	$Body .= "Nome: " . $_POST["nome"];
	$Body .= "\n";
	$Body .= "E-mail: " . $_POST["email"];
	$Body .= "\n";
	$Body .= "Mensagem: \n";
	$Body .= $_POST["mensagem"];

	$headers = 'From: <' . $_POST["email"] . ">\r\n" .
				'Reply-To: ' . $_POST["email"] . "\r\n" .
				'X-Mailer: PHP/' . phpversion();
	$headers .= "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8";
	$success = mail($emailto, $assunto, $Body, $headers);
	
	if ($success){
		die('Contato enviado com Sucesso!');
	}
	else{
		die('Ocorreu um erro no envio, por favor tente novamente.');
	}
?>