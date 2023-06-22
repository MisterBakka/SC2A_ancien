
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    // Récupération des valeurs des champs
    var type = document.querySelector('input[name="type"]:checked').value;
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var sujet = document.getElementById("sujet").value;
    var message = document.getElementById("message").value;

    // Construction des données du formulaire
    var formData = {
      type: type,
      prenom: prenom,
      nom: nom,
      email: email,
      sujet: sujet,
      message: message
    };

    // Envoi des données à l'aide d'une requête Ajax (exemple fictif)
    // Remplacez cette partie avec votre propre logique d'envoi des données du formulaire
    // Ici, nous utilisons l'API fetch pour effectuer une requête POST
    fetch("URL_DE_VOTRE_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // Affichage d'un message de confirmation
        alert("Le formulaire a été soumis avec succès !");
        // Réinitialisation du formulaire
        document.getElementById("myForm").reset();
      } else {
        alert("Une erreur s'est produite lors de l'envoi du formulaire.");
      }
    })
    .catch(error => {
      alert("Une erreur s'est produite lors de l'envoi du formulaire.");
      console.error(error);
    });
  });


  