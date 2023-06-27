<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Récupération des données du formulaire
  $type = $_POST["type"];
  $prenom = $_POST["prenom"];
  $nom = $_POST["nom"];
  $email = $_POST["email"];
  $sujet = $_POST["sujet"];
  $message = $_POST["message"];

  // Construction du contenu de l'e-mail
  $subject = "Nouveau message de contact";
  $body = "Type: $type\n";
  $body .= "Prénom: $prenom\n";
  $body .= "Nom: $nom\n";
  $body .= "E-mail: $email\n";
  $body .= "Sujet: $sujet\n";
  $body .= "Message: $message\n";

  // Configuration de l'envoi de l'e-mail
  $to = "sc2a.service@gmail.com"; // Remplacez par l'adresse e-mail du destinataire
  $headers = "From: $email";

  // Envoi de l'e-mail
  if (mail($to, $subject, $body, $headers)) {
    echo "Le formulaire a été soumis avec succès !";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du formulaire.";
  }
}
?>
