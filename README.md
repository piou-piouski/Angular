# Angular du 04/07/2023 au 07/07/2023

## Formateur

Jean-louis Guenego

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

Permet de générer(g) un module(m) avec pour nom layout, l'option --dry-run permet de simuler la commande

```
npx ng g m layout --dry-run -m app
```

## Extensions VSCode

- git graph
- prettier
- javascript console utils (CTRL + shift + l)
- error lens
- javascript
- Angular Language Service

## Extensions navigateur

- json formatter

## DOC

https://meet.jit.si/Agupa1

https://expressjs.com/

https://www.npmjs.com/

https://nodejs.org/docs/latest-v18.x/api/

https://angular.io/docs

## Autres

ECMAScript\
tc39

Module Node => qui contient un package.json

Module TS => qui contient un import ou export

Module Angular => qui contient @NgModule
