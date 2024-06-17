const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use morgan for logging
app.use(morgan('combined'));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/data', (req, res) => {
  res.json({ message: 'GET request to /data' });
});

app.post('/data', (req, res) => {
  res.json({ message: 'POST request to /data', data: req.body });
});

app.put('/data', (req, res) => {
  res.json({ message: 'PUT request to /data', data: req.body });
});

app.delete('/data', (req, res) => {
  res.json({ message: 'DELETE request to /data' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Error handling 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
