
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    // Récupération des valeurs des champs
    var type = document.querySelector('input[name="type"]:checked').value;
    var prenom = document.querySelector('input[name="prenom"]').value;
    var nom = document.querySelector('input[name="nom"]').value;
    var email = document.querySelector('input[name="mail"]').value;
    var sujet = document.querySelector('select[name="sujet"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

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

 // Récupérer le menu déroulant
var sujetSelect = document.querySelector('select[name="sujet"]');

// Options du menu déroulant pour chaque choix
var optionsParticulier = [
  { value: "", text: "Sélectionnez un sujet" },
  { value: "Sujet 1", text: "Sujet 1 - Particulier" },
  { value: "Sujet 2", text: "Sujet 2 - Particulier" },
  { value: "Sujet 3", text: "Sujet 3 - Particulier" }
];

var optionsProfessionnel = [
  { value: "", text: "Sélectionnez un sujet" },
  { value: "Sujet 4", text: "Sujet 4 - Professionnel" },
  { value: "Sujet 5", text: "Sujet 5 - Professionnel" },
  { value: "Sujet 6", text: "Sujet 6 - Professionnel" }
];

// Fonction pour mettre à jour les options du menu déroulant
function updateOptions() {
  var selectedType = document.querySelector('input[name="type"]:checked').value;
  var options = (selectedType === "particulier") ? optionsParticulier : optionsProfessionnel;

  // Effacer les options actuelles
  sujetSelect.innerHTML = "";

  // Ajouter les nouvelles options
  options.forEach(function(option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    sujetSelect.appendChild(optionElement);
  });
}

// Écouter les changements de choix du type (Particulier ou Professionnel)
var typeRadios = document.querySelectorAll('input[name="type"]');
typeRadios.forEach(function(radio) {
  radio.addEventListener("change", updateOptions);
});

// Nav bar disparition
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
    
        // reception

        const nodemailer = required('nodemailer');

// Configuration du transporteur SMTP pour l'envoi des e-mails
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Remplacez par votre hébergeur SMTP
  port: 587, // Port SMTP
  secure: false, // false pour les connexions non sécurisées
  auth: {
    user: 'sc2a.service@gmail.com', // Remplacez par votre adresse e-mail
    pass: 'SC2ASabrotte98' // Remplacez par votre mot de passe
  }
});

// Fonction pour envoyer l'e-mail
function sendEmail(formData) {
  // Construction du contenu de l'e-mail
  const mailOptions = {
    from: 'your_email@example.com', // Adresse e-mail de l'expéditeur
    to: 'recipient@example.com', // Adresse e-mail du destinataire
    subject: 'Nouveau message de contact', // Objet de l'e-mail
    html: `
      <p><strong>Type:</strong> ${formData.type}</p>
      <p><strong>Prénom:</strong> ${formData.prenom}</p>
      <p><strong>Nom:</strong> ${formData.nom}</p>
      <p><strong>E-mail:</strong> ${formData.email}</p>
      <p><strong>Sujet:</strong> ${formData.sujet}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    } else {
      console.log('E-mail envoyé avec succès:', info.response);
    }
  });
}

// Exemple d'utilisation
const formData = {
  type: 'particulier',
  prenom: 'John',
  nom: 'Doe',
  email: 'john.doe@example.com',
  sujet: 'Sujet 1',
  message: 'Ceci est un message de test'
};

sendEmail(formData);

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
  });
});

