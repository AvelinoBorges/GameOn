# Architecture du code - Projet GameOn

## Structure des fichiers

```
GameOn/
├── README.md                    # Documentation du projet
├── IMPLEMENTATION.md            # Documentation de l'implémentation
├── TESTS_MANUELS.md            # Guide de tests manuels
└── starterOnly/
    ├── index.html              # Structure HTML du site
    ├── modal.css               # Styles CSS complets
    ├── modal.js                # Logique JavaScript du formulaire
    ├── Logo.png                # Logo du site
    ├── bg_img.jpg              # Image de fond
    └── DM_Sans/                # Police personnalisée
        ├── DMSans-Bold.ttf
        ├── DMSans-BoldItalic.ttf
        ├── DMSans-Italic.ttf
        ├── DMSans-Medium.ttf
        ├── DMSans-MediumItalic.ttf
        ├── DMSans-Regular.ttf
        └── OFL.txt
```

## Architecture JavaScript (modal.js)

### 1. Configuration et sélection DOM
```javascript
// Sélection des éléments principaux
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form[name='reserve']");
```

### 2. Gestion des événements
```javascript
// Event listeners centralisés
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
modalbg.addEventListener("click", closeModalOnBackground);
form.addEventListener("submit", handleFormSubmit);
```

### 3. Fonctions de contrôle de la modale
- **`launchModal()`** : Ouverture
- **`closeModal()`** : Fermeture avec nettoyage
- **`closeModalOnBackground()`** : Fermeture par clic extérieur

### 4. Système de validation modulaire

#### Fonction principale
- **`validate()`** : Orchestre toutes les validations

#### Fonctions de validation spécialisées
- **`validateFirstName()`** : Prénom (≥2 caractères)
- **`validateLastName()`** : Nom (≥2 caractères)  
- **`validateEmail()`** : Email (format regex)
- **`validateBirthdate()`** : Date (non vide)
- **`validateQuantity()`** : Nombre (0-99)
- **`validateLocation()`** : Ville (radio sélectionné)
- **`validateTerms()`** : Conditions (checkbox cochée)

### 5. Gestion des erreurs

#### Fonctions génériques
- **`showError(input, message)`** : Affichage d'erreur
- **`clearError(input)`** : Effacement d'erreur

#### Fonctions spécialisées
- **`showLocationError()`** / **`clearLocationError()`**
- **`showTermsError()`** / **`clearTermsError()`**

### 6. Gestion de la soumission
- **`handleFormSubmit()`** : Interception et validation
- **`showSuccessMessage()`** : Confirmation de succès
- **`resetForm()`** : Remise à zéro complète

## Architecture CSS (modal.css)

### 1. Variables CSS
```css
:root {
  --font-default: "DM Sans", Arial, Helvetica, sans-serif;
  --modal-duration: 0.8s;
}
```

### 2. Structure responsive
- **Mobile-first approach**
- **Breakpoints** : 540px, 768px, 800px
- **Grid layout** pour la section hero
- **Flexbox** pour la navigation

### 3. Système de validation visuelle
```css
.formData[data-error-visible="true"] .text-control {
  border: 2px solid #e54858; /* Bordure rouge */
}

.formData[data-error-visible="true"]::after {
  content: attr(data-error); /* Message d'erreur */
  color: #e54858;
  opacity: 1;
}
```

### 4. Animations et transitions
- **Animation d'ouverture** de modale (modalopen)
- **Transitions** sur hover et focus
- **Durée** contrôlée par variable CSS

## Patterns de développement utilisés

### 1. Séparation des préoccupations
- **HTML** : Structure sémantique uniquement
- **CSS** : Présentation et responsive design
- **JavaScript** : Logique métier et interactions

### 2. Programmation défensive
- Validation côté client complète
- Gestion des cas d'erreur
- Vérifications de type et d'existence

### 3. Accessibilité (WCAG)
- Navigation au clavier
- Focus visible
- Messages d'erreur associés aux champs
- Contraste des couleurs

### 4. Performance
- Sélection DOM optimisée
- Event delegation quand approprié
- CSS efficient (éviter les reflows)

### 5. Maintenabilité
- Code modulaire et réutilisable
- Commentaires exhaustifs
- Nommage explicite des fonctions
- Constantes pour les sélecteurs

## Flux de données

### 1. Ouverture de modale
```
Clic bouton → launchModal() → Display modal → Focus premier champ
```

### 2. Validation de formulaire
```
Submit → handleFormSubmit() → validate() → 
[Success]: showSuccessMessage()
[Error]: showError() pour chaque champ invalide
```

### 3. Fermeture de modale
```
Clic fermer/extérieur → closeModal() → resetForm() → Hide modal
```

## Bonnes pratiques respectées

✅ **No jQuery** : JavaScript vanilla uniquement
✅ **No Bootstrap** : CSS custom responsive
✅ **ES6+** : Syntaxe moderne (const, let, arrow functions)
✅ **Accessibility** : Support clavier et lecteurs d'écran
✅ **Performance** : DOM queries minimales
✅ **Semantic HTML** : Structure logique
✅ **Progressive Enhancement** : Fonctionne même sans JS
✅ **Cross-browser** : Compatible tous navigateurs modernes

## Extensibilité future

Le code est conçu pour être facilement extensible :

1. **Nouveaux champs** : Ajouter une fonction `validateNewField()`
2. **Nouvelles validations** : Étendre les regex ou conditions
3. **Nouveaux messages** : Modifier les chaînes dans les fonctions
4. **Nouveau style** : Variables CSS centralisées
5. **Analytics** : Hooks disponibles dans `handleFormSubmit()`
