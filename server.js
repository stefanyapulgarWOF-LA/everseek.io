const { createServer } = require('http'); // Importamos el módulo 'http' de Node.js para crear el servidor
const { parse } = require('url'); // Importamos la función 'parse' del módulo 'url' de Node.js para analizar las URL
const next = require('next'); // Importamos el módulo 'next' para crear la instancia de la aplicación Next.js

const dev = process.env.NODE_ENV !== 'production'; // Verificamos si estamos en modo de desarrollo o producción
const app = next({ dev }); // Creamos la instancia de la aplicación Next.js con la configuración correspondiente
const handle = app.getRequestHandler(); // Obtenemos el manejador de solicitudes de la aplicación

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true); // Analizamos la URL de la solicitud actual
    const { pathname } = parsedUrl; // Obtenemos la ruta de la URL

    // Aquí puedes agregar tus rutas personalizadas
    if (pathname === '/about-us') {
      // Si la ruta es '/about-us', podemos realizar alguna lógica específica
      // y enviar la respuesta correspondiente utilizando el método 'app.render()'
      app.render(req, res, '/about-us', parsedUrl.query);
    } else {
      // Si no se encuentra una ruta personalizada, dejamos que Next.js maneje la solicitud
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => { // Creamos el servidor y lo configuramos para escuchar en el puerto 3000
    if (err) throw err; // Si hay un error al iniciar el servidor, lo mostramos
    console.log('> Ready on http://localhost:3000'); // Indicamos que el servidor está listo y escuchando
  });
});
