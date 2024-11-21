const http = require('http');

function calcularAreaCirculo(raio) {
  if (raio <= 0) return 'O raio deve ser um valor positivo.';
  const area = Math.PI * Math.pow(raio, 2);
  return `A area dos circulo com raio ${raio} é ${area.toFixed(2)} Unidades quadradas.`;
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/calcularArea')) {
    const params = new URLSearchParams(req.url.split('?')[1]);
    const raio = parseFloat(params.get('raio'));
    const resultado = calcularAreaCirculo(raio);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Resultado da Area</h1><p>${resultado}</p><a href="/">Voltar</a>`);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Calculadora </h1>
      <form action="/calcularArea" method="get">
        <label>Raio do circulo:</label>
        <input type="number" step="0.1" name="raio" required><br>
        <button type="submit">Calcular</button>
      </form>
    `);
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
