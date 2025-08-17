# Tests manuels - Formulaire GameOn

## Checklist de validation

### 🔍 Test 1: Ouverture/Fermeture de la modale
- [ ] Cliquer sur "je m'inscris" ouvre la modale
- [ ] Cliquer sur le X ferme la modale
- [ ] Cliquer sur l'arrière-plan ferme la modale
- [ ] La fermeture remet à zéro le formulaire

### 🔍 Test 2: Validation du prénom
- [ ] Champ vide → Message d'erreur "2 caractères ou plus"
- [ ] 1 caractère → Message d'erreur
- [ ] 2 caractères ou plus → Pas d'erreur
- [ ] Bordure rouge sur champ invalide

### 🔍 Test 3: Validation du nom
- [ ] Champ vide → Message d'erreur "2 caractères ou plus"
- [ ] 1 caractère → Message d'erreur
- [ ] 2 caractères ou plus → Pas d'erreur
- [ ] Bordure rouge sur champ invalide

### 🔍 Test 4: Validation de l'email
- [ ] Champ vide → Message d'erreur
- [ ] Format invalide (ex: "test") → Message d'erreur
- [ ] Format invalide (ex: "test@") → Message d'erreur
- [ ] Format valide (ex: "test@example.com") → Pas d'erreur
- [ ] Bordure rouge sur champ invalide

### 🔍 Test 5: Validation de la date de naissance
- [ ] Champ vide → Message d'erreur "entrer votre date de naissance"
- [ ] Date sélectionnée → Pas d'erreur
- [ ] Bordure rouge sur champ invalide

### 🔍 Test 6: Validation du nombre de tournois
- [ ] Champ vide → Message d'erreur
- [ ] Nombre négatif → Message d'erreur
- [ ] Nombre > 99 → Message d'erreur
- [ ] Nombre entre 0 et 99 → Pas d'erreur
- [ ] Bordure rouge sur champ invalide

### 🔍 Test 7: Validation de la sélection de ville
- [ ] Aucune ville sélectionnée → Message d'erreur "choisir une option"
- [ ] Une ville sélectionnée → Pas d'erreur
- [ ] Changement de sélection fonctionne correctement

### 🔍 Test 8: Validation des conditions d'utilisation
- [ ] Case décochée → Message d'erreur "acceptez les termes"
- [ ] Case cochée → Pas d'erreur
- [ ] La deuxième case (newsletter) est optionnelle

### 🔍 Test 9: Soumission du formulaire
- [ ] Formulaire invalide → Reste sur la page, affiche les erreurs
- [ ] Formulaire valide → Affiche le message de succès
- [ ] Message de succès contient "Merci pour votre inscription"
- [ ] Bouton "Fermer" dans le message de succès fonctionne

### 🔍 Test 10: Navigation au clavier
- [ ] Tab permet de naviguer entre les champs
- [ ] Focus visible sur tous les éléments
- [ ] Entrée peut soumettre le formulaire
- [ ] Échap peut fermer la modale (optionnel)

### 🔍 Test 11: Responsive design
- [ ] Test sur écran desktop (1200px+)
- [ ] Test sur tablette (768px-1199px)
- [ ] Test sur mobile (320px-767px)
- [ ] Tous les éléments restent accessibles
- [ ] Le formulaire est utilisable sur toutes les tailles

### 🔍 Test 12: Cas limites
- [ ] Caractères spéciaux dans prénom/nom
- [ ] Très long prénom/nom (100+ caractères)
- [ ] Email avec caractères spéciaux valides
- [ ] Soumission multiple rapide
- [ ] Ouverture/fermeture rapide de la modale

## Critères de réussite

✅ **Tous les tests passent sans erreur**
✅ **L'interface est intuitive et responsive**
✅ **Les messages d'erreur sont clairs et en français**
✅ **Le formulaire fonctionne sans dépendances externes**
✅ **Le code est bien commenté et organisé**

## Environnements de test recommandés

### Navigateurs
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (si disponible)
- [ ] Edge (dernière version)

### Appareils
- [ ] Desktop Windows
- [ ] Desktop Mac
- [ ] Tablette iPad/Android
- [ ] Smartphone iOS/Android

## Rapporter un bug

Si un test échoue, noter :
1. **Navigateur et version**
2. **Taille d'écran**
3. **Étapes pour reproduire**
4. **Comportement attendu vs observé**
5. **Capture d'écran si nécessaire**
