
// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Empêche le rechargement de la page par défaut

//     // Récupération des valeurs des champs
//     var type = document.querySelector('input[name="type"]:checked').value;
//     var prenom = document.getElementById("prenom").value;
//     var nom = document.getElementById("nom").value;
//     var email = document.getElementById("email").value;
//     var sujet = document.getElementById("sujet").value;
//     var message = document.getElementById("message").value;

//     // Construction des données du formulaire
//     var formData = {
//       type: type,
//       prenom: prenom,
//       nom: nom,
//       email: email,
//       sujet: sujet,
//       message: message
//     };

//     // Envoi des données à l'aide d'une requête Ajax (exemple fictif)
//     // Remplacez cette partie avec votre propre logique d'envoi des données du formulaire
//     // Ici, nous utilisons l'API fetch pour effectuer une requête POST
//     fetch("URL_DE_VOTRE_ENDPOINT", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => {
//       if (response.ok) {
//         // Affichage d'un message de confirmation
//         alert("Le formulaire a été soumis avec succès !");
//         // Réinitialisation du formulaire
//         document.getElementById("myForm").reset();
//       } else {
//         alert("Une erreur s'est produite lors de l'envoi du formulaire.");
//       }
//     })
//     .catch(error => {
//       alert("Une erreur s'est produite lors de l'envoi du formulaire.");
//       console.error(error);
//     });
//   });

//  function changerOptions() {
//     var sujetSelect = document.getElementsByName("sujet")[0];
//     var informationsDiv = document.getElementById("informations");
    
//     // Récupérer la valeur de l'option sélectionnée
//     var sujetSelectionne = sujetSelect.value;

//     // Effacer le contenu précédent des informations
//     informationsDiv.innerHTML = "";

//     // Mettre à jour les informations en fonction de l'option sélectionnée
//     if (sujetSelectionne === "Sujet 1") {
//       informationsDiv.innerHTML = "Informations sur le Sujet 1";
//     } else if (sujetSelectionne === "Sujet 2") {
//       informationsDiv.innerHTML = "Informations sur le Sujet 2";
//     } else if (sujetSelectionne === "Sujet 3") {
//       informationsDiv.innerHTML = "Informations sur le Sujet 3";
//     }
//   }
  
  var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                // Faites défiler vers le haut
                document.getElementById("navbar").style.top = "0";
            } else {
                // Faites défiler vers le bas
                document.getElementById("navbar").style.top = "-170px";
            }
            prevScrollpos = currentScrollPos;
        }