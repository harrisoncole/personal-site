const express = require('express');
const app = express();
const path = require('path');
const PORT = 4040;

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/Harrison-Cole-resume.pdf'));
});

app.listen(PORT, () => {
  console.log('openly looking on port ', PORT);
});
