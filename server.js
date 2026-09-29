const express = require('express');
const app = express();
const port = 2026;

app.get('/', (req, res) => {
  res.send('Formation Kubernetes - Jour 2');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});