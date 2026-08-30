# Process agent — lomigunger.net

## Commit et push

Avant chaque commit demandé par Lomig :

1. S’il y a des `.jpg` / `.jpeg` / `.png` dans `public/images/`, lancer `npm run images`.
   Cela les convertit en WebP (max 1800 px, qualité 88), met à jour les chemins dans le Markdown, et supprime les originaux.
2. Inclure les WebP + Markdown mis à jour dans le commit.
3. Push sur `main` seulement si c’est demandé.

Lomig dépose les images en JPG/PNG comme d’habitude. Ne pas lui demander de les convertir lui-même.

Un projet peut déclarer `gallery:` (liste de chemins WebP). Une grille 3×3 cliquable s’affiche sous l’article. `npm run images` génère aussi les miniatures `*-thumb.webp`.
