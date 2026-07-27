# lomigunger.net

Portfolio de **Lomig Unger** — **Astro** + **GitHub Pages** + domaine custom.

Repo : [blomig/lomigungernet](https://github.com/blomig/lomigungernet)  
Domaine : [lomigunger.net](https://lomigunger.net)

Thème de base : [BracoZS/astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) (MIT).

## Stack

- Astro 7 · Tailwind CSS v4 · TypeScript strict
- Content Collections (projets en Markdown)
- Dark / light mode
- Déploiement : GitHub Actions → GitHub Pages
- Domaine : `lomigunger.net` (`public/CNAME`)

## Commandes

| Commande | Action |
| -------- | ------ |
| `npm install` | Installe les dépendances |
| `npm run dev` | Serveur local → http://localhost:4321 |
| `npm run build` | Check TypeScript + build → `./dist/` |
| `npm run preview` | Prévisualise le build local |
| `npm run format` | Formate le code (Prettier) |

## Personnalisation

| Fichier | Rôle |
| ------- | ---- |
| `src/site.config.ts` | Nom, rôle, email, réseaux, tagline |
| `src/content/work/*.md` | Un fichier = un projet |
| `src/styles/global.css` | Couleurs / design tokens |
| `public/og-image.png` | Image Open Graph (1200×630) |
| `public/CNAME` | Domaine custom |

## Déploiement

1. Push sur `main` → workflow **Deploy to GitHub Pages**
2. Repo GitHub : **Settings → Pages → Source = GitHub Actions**
3. DNS chez le registrar pour pointer vers GitHub Pages

## Suite

- [ ] Remplacer les projets démo par du vrai contenu
- [ ] Affiner About / tagline / status
- [ ] Premier commit + push
- [ ] Brancher le DNS `lomigunger.net`
