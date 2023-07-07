# Angular du 04/07/2023 au 07/07/2023

## Formateur

Jean-louis Guenego\
https://github.com/jlg-formation/agupa1-july-2023/tree/master

## Logiciels && Extensions

Volta\
en cmd :

```
volta install node@18
```

```
npm init -y
```

```
npm install express
```

```
npm install serve-index
```

```
npm install typescript -D
```

```
npm install @types/node
```

```
npm install nodemon -D
```

```
npm install ts-node -D
```

```
npm init @angular@latest front
```

# Commande back

Permet de générer un fichier.ts en stipulant la version -t

```
npx tsc -t es6 back/server.ts
```

Une fois le tsconfig.json déclaré

```
npx tsc
```

Permet d'écouter les changement sur le TS, comme SASS

```
npx nodemon src/server.ts
```

Une fois la ligne du dessus éxecuté et la ligne\
"start": "nodemon src/server.ts"\
ajouter au fichier package.json dans "scripts"

```
npm start
```

# Commande front

```
npm start
```

Génère le build de prod dans le répertoire front/dist

```
npm run build
```

Permet de générer(g) un module(m) avec pour nom layout, l'option --dry-run permet de simuler la commande, -m pour ajouter l'import du module dans app

```
npx ng g m layout --dry-run -m app
```

Permet de créer un component(c) header dans le module layout qui soit public

```
npx ng g c layout/header --export
```

```
npm install normalize.css
```

Pour retirer un packet

```
npm r normalize.css
```

```
npx ng g c routes/home
```

```
npx ng g c routes/legal
```

```
npm install sanitize.css
```

```
npx ng g m stock --route stock -m app
```

```
npx ng g c stock/add
```

```
npx ng add @fortawesome/angular-fontawesome@0.13.x
```

```
npx ng g i interfaces/article
```

```
npx ng g s services/article
```

```
npx ng g s services/http-article
```

## Extensions VSCode

- git graph
- prettier
- javascript console utils (CTRL + shift + l)
- error lens
- javascript
- Angular Language Service
- typescript class organizer (décocher la seconde et derniere option dans le setting, son raccourci est ctrl+shift+o)

## Extensions navigateur

- json formatter
- angular devtools

## DOC

https://meet.jit.si/Agupa1

https://expressjs.com/

https://www.npmjs.com/

https://nodejs.org/docs/latest-v18.x/api/

https://angular.io/docs

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://flexboxfroggy.com/#fr

https://ux-lois.github.io/

https://csstools.github.io/normalize.css/

https://rxmarbles.com/

https://rxjs.dev/

https://thinkrx.io/

https://refactoring.guru/

https://web.dev/rail/

## Autres

ECMAScript\
tc39

Module Node => qui contient un package.json

Module TS => qui contient un import ou export

Module Angular => qui contient @NgModule

add => import { HttpClientModule } from '@angular/common/http'; dans app.module.ts
