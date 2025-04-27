const express = require('express');
const app = express();
const router = require('./routes/index');

app.use(express.json());

// Main router
app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
