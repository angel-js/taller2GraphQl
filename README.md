# taller2GraphQl

Pasos a seguir:

1.- npm init -- yes
    - Esto es para crear el archivo package.json

2.- Cambiar el main de package.json de index.js a > server.js es el archivo con el que vamos a trabajar
Algo así --->   "main": "server.js",

3.- Instalar nodemon desde la terminal de vs code
    - npm install nodemon  

4.- Ir a package.json y debajo de scripts escribir
    "star": "nodemon server.js"
    Colocar una coma antes de star en la linea anterior para que no salte un error
    Algo así --> 
    
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },

5.- Instalar otras dependencias:
    - npm install express
    - npm install graphql
    - npm install apollo-server-express
    - npm install mongoose
    - npm install graphql-tools
    - npm install cors
    - npm install body-parser

En dependencias debe quedar algo asi 
        ------>
  "dependencies": {
    "apollo-server-express": "^3.8.2",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "graphql": "^16.5.0",
    "graphql-tools": "^8.2.12",
    "mongoose": "^6.3.6",
    "nodemon": "^2.0.16"
  }
}


Si no queda claro mirar el video --> https://www.youtube.com/watch?v=sQbOWG0nsus&t=33s