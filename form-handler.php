<?php  
        $data = file_get_contents("php://input");
        $mail = json_decode($data,true);
        $headers = 'From: webmaster@yourdot.com' . "\r\n" .
   'Reply-To: webmaster@yourdot.com' . "\r\n" .
   'X-Mailer: PHP/' . phpversion();
      mail("badredahmouni@gmail.com",$mail["sujet"],$mail["message"],$headers);
?>
