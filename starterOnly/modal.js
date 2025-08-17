/**
 * Fonction pour gérer la navigation responsive
 * Toggle la classe "responsive" pour afficher/masquer le menu sur mobile
 */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements - Sélection des éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form[name='reserve']");

// Event listeners - Ajout des écouteurs d'événements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
modalbg.addEventListener("click", closeModalOnBackground);
form.addEventListener("submit", handleFormSubmit);

/**
 * Fonction pour ouvrir la modale
 * Affiche la modale en changeant le style display
 */
function launchModal() {
  modalbg.style.display = "block";
}

/**
 * Fonction pour fermer la modale
 * Masque la modale et remet à zéro le formulaire
 */
function closeModal() {
  modalbg.style.display = "none";
  resetForm();
}

/**
 * Fonction pour fermer la modale en cliquant sur l'arrière-plan
 * @param {Event} event - L'événement de clic
 */
function closeModalOnBackground(event) {
  if (event.target === modalbg) {
    closeModal();
  }
}

/**
 * Fonction de validation du formulaire
 * Valide tous les champs du formulaire et affiche les messages d'erreur
 * @returns {boolean} - true si le formulaire est valide, false sinon
 */
function validate() {
  let isValid = true;
  
  // Validation du prénom
  const firstName = document.getElementById("first");
  if (!validateFirstName(firstName.value)) {
    showError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    isValid = false;
  } else {
    clearError(firstName);
  }
  
  // Validation du nom
  const lastName = document.getElementById("last");
  if (!validateLastName(lastName.value)) {
    showError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    isValid = false;
  } else {
    clearError(lastName);
  }
  
  // Validation de l'email
  const email = document.getElementById("email");
  if (!validateEmail(email.value)) {
    showError(email, "Veuillez entrer une adresse email valide.");
    isValid = false;
  } else {
    clearError(email);
  }
  
  // Validation de la date de naissance
  const birthdate = document.getElementById("birthdate");
  if (!validateBirthdate(birthdate.value)) {
    showError(birthdate, "Vous devez entrer votre date de naissance.");
    isValid = false;
  } else {
    clearError(birthdate);
  }
  
  // Validation du nombre de tournois
  const quantity = document.getElementById("quantity");
  if (!validateQuantity(quantity.value)) {
    showError(quantity, "Veuillez entrer un nombre valide.");
    isValid = false;
  } else {
    clearError(quantity);
  }
  
  // Validation de la sélection de la ville
  if (!validateLocation()) {
    showLocationError("Vous devez choisir une option.");
    isValid = false;
  } else {
    clearLocationError();
  }
  
  // Validation des conditions d'utilisation
  const termsCheckbox = document.getElementById("checkbox1");
  if (!validateTerms(termsCheckbox)) {
    showTermsError("Vous devez vérifier que vous acceptez les termes et conditions.");
    isValid = false;
  } else {
    clearTermsError();
  }
  
  return isValid;
}

/**
 * Fonction de validation du prénom
 * @param {string} firstName - Le prénom à valider
 * @returns {boolean} - true si valide, false sinon
 */
function validateFirstName(firstName) {
  return firstName && firstName.trim().length >= 2;
}

/**
 * Fonction de validation du nom
 * @param {string} lastName - Le nom à valider
 * @returns {boolean} - true si valide, false sinon
 */
function validateLastName(lastName) {
  return lastName && lastName.trim().length >= 2;
}

/**
 * Fonction de validation de l'email
 * @param {string} email - L'email à valider
 * @returns {boolean} - true si valide, false sinon
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email && emailRegex.test(email);
}

/**
 * Fonction de validation de la date de naissance
 * @param {string} birthdate - La date de naissance à valider
 * @returns {boolean} - true si valide, false sinon
 */
function validateBirthdate(birthdate) {
  return birthdate && birthdate.trim() !== "";
}

/**
 * Fonction de validation du nombre de tournois
 * @param {string} quantity - Le nombre à valider
 * @returns {boolean} - true si valide, false sinon
 */
function validateQuantity(quantity) {
  const num = parseInt(quantity);
  return !isNaN(num) && num >= 0 && num <= 99;
}

/**
 * Fonction de validation de la sélection de ville
 * @returns {boolean} - true si une ville est sélectionnée, false sinon
 */
function validateLocation() {
  const locationInputs = document.querySelectorAll('input[name="location"]');
  return Array.from(locationInputs).some(input => input.checked);
}

/**
 * Fonction de validation des conditions d'utilisation
 * @param {HTMLElement} checkbox - La checkbox des conditions
 * @returns {boolean} - true si cochée, false sinon
 */
function validateTerms(checkbox) {
  return checkbox && checkbox.checked;
}

/**
 * Fonction pour afficher un message d'erreur
 * @param {HTMLElement} input - L'élément input
 * @param {string} message - Le message d'erreur
 */
function showError(input, message) {
  const formData = input.closest('.formData');
  formData.setAttribute('data-error', message);
  formData.setAttribute('data-error-visible', 'true');
}

/**
 * Fonction pour effacer un message d'erreur
 * @param {HTMLElement} input - L'élément input
 */
function clearError(input) {
  const formData = input.closest('.formData');
  formData.removeAttribute('data-error');
  formData.removeAttribute('data-error-visible');
}

/**
 * Fonction pour afficher l'erreur de sélection de ville
 * @param {string} message - Le message d'erreur
 */
function showLocationError(message) {
  const locationContainer = document.querySelector('input[name="location"]').closest('.formData');
  locationContainer.setAttribute('data-error', message);
  locationContainer.setAttribute('data-error-visible', 'true');
}

/**
 * Fonction pour effacer l'erreur de sélection de ville
 */
function clearLocationError() {
  const locationContainer = document.querySelector('input[name="location"]').closest('.formData');
  locationContainer.removeAttribute('data-error');
  locationContainer.removeAttribute('data-error-visible');
}

/**
 * Fonction pour afficher l'erreur des conditions d'utilisation
 * @param {string} message - Le message d'erreur
 */
function showTermsError(message) {
  const termsContainer = document.getElementById('checkbox1').closest('.formData');
  termsContainer.setAttribute('data-error', message);
  termsContainer.setAttribute('data-error-visible', 'true');
}

/**
 * Fonction pour effacer l'erreur des conditions d'utilisation
 */
function clearTermsError() {
  const termsContainer = document.getElementById('checkbox1').closest('.formData');
  termsContainer.removeAttribute('data-error');
  termsContainer.removeAttribute('data-error-visible');
}

/**
 * Fonction pour gérer la soumission du formulaire
 * @param {Event} event - L'événement de soumission
 */
function handleFormSubmit(event) {
  event.preventDefault();
  
  if (validate()) {
    showSuccessMessage();
  }
}

/**
 * Fonction pour afficher le message de confirmation
 * Remplace le contenu de la modale par un message de succès
 */
function showSuccessMessage() {
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = `
    <div class="success-message" style="text-align: center; padding: 50px 20px;">
      <h2 style="color: #279e7a; margin-bottom: 20px;">Merci pour votre inscription !</h2>
      <p style="font-size: 18px; margin-bottom: 30px;">Votre inscription au tournoi a été enregistrée avec succès.</p>
      <button class="btn-submit" onclick="closeModal()">Fermer</button>
    </div>
  `;
}

/**
 * Fonction pour remettre à zéro le formulaire
 * Efface tous les champs et messages d'erreur
 */
function resetForm() {
  // Remettre à zéro le formulaire
  form.reset();
  
  // Effacer tous les messages d'erreur
  const formDataElements = document.querySelectorAll('.formData');
  formDataElements.forEach(element => {
    element.removeAttribute('data-error');
    element.removeAttribute('data-error-visible');
  });
  
  // Restaurer le contenu original de la modale si nécessaire
  const modalBody = document.querySelector('.modal-body');
  if (modalBody.querySelector('.success-message')) {
    location.reload(); // Recharger la page pour restaurer le formulaire original
  }
}


