module.exports = (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Projeto Gênios da IA</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <div id="root">
            <h1>Projeto Gênios da IA</h1>
            <p>Plataforma em manutenção. Voltaremos em breve!</p>
          </div>
        </body>
      </html>
    `);
  } else if (req.url.startsWith('/api/')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"message": "API em manutenção"}');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};
