
# Aprendiendo Prisma orm con postgresql




## Comencemos 

* Abrimos un nuevo terminal en el proyecto
* incializamos pack Json con `npm init -y`
* Hacemos un install con el comando `npm i prisma @prisma/client` para descargar el cliente de prima.
* Hacemos otro install con el comando `npm i express` para genaral algunas rutas.
* y por ultimo hacemos otro install con el comando `npm i nodemon` para poder hacer cambios en tiempo real con unas simple configuraciones al pack Json que creamos antes.






## config Pack Json para usar nodemon 
```bash

{
  "name": "src",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "npx nodemon ./src/app.js"

  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@prisma/client": "^3.10.0",
    "express": "^4.17.3",
    "nodemon": "^2.0.15",
    "prisma": "^3.10.0"
  }
}
```

levantamos con 
```bash
  npm start
```




## Inicializamos prisma

To deploy this project run

```bash
  npx prisma init
```

esto no genera una carpeta llamada prisma y dentro de ella un archivo llamado `.env`
donde tenemos que cambiar algunos datos segun la base de datos que queremos usar 
 


## imagen de prima

[![Prima.png](https://i.postimg.cc/pLmmWyjd/Prima.png)](https://postimg.cc/fVhz5zB4)


## Prisma db

hacemos  `npx prisma generate ` en consola.
esto no va a crear los modelos de tablas en prisma/prisma.shema
copiamos const prisma y el cliente para podes hacer peticiones a db 




## App.js 
```javascript
const express = require("express");
const { send } = require("process");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
```


## App.js 
hacemos la peticones de esta forma 
```javascript
app.get("/user", async (req, res) => {
  try {
    const allUser = await prisma.user.findMany();
    res.send(allUser);
  } catch (error) {
    console.error(error);
  }
});


```


## Prisma db

hacemos  `npm prisma push ` en consola.
para pushear cambios en los modelos de tablas 

hacemos  `npm prisma pull ` en consola.
para traer las tablas de la db si ya tenemos creadas tablas en la db

