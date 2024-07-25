const express = require('express');

const app = express();
const port = 3001;

app.get('/api/workers', async (req, res) => {
  try {
    const response = await fetch('https://def6768784d8e5a0.mokky.dev/workers');
    const workers = response.data;

    res.json(workers);
  } catch (error) {
    console.error('Error when receiving data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
