const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon",
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requestedPath = decodeURIComponent(url.pathname);
  const normalized = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = path.join(root, normalized === path.sep || normalized === "/" ? "index.html" : normalized);

  if (!filePath.startsWith(root)) {
    send(res, 403, "Acesso negado");
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(root, "index.html");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      send(res, 500, "Erro interno ao carregar o arquivo");
      return;
    }
    send(res, 200, content, mime[path.extname(filePath)] || "application/octet-stream");
  });
});

server.listen(port, () => {
  console.log(`Lexos Control rodando em http://localhost:${port}`);
});
