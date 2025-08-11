const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// GET endpoint to read settings.json
app.get('/api/settings', async (req, res) => {
  try {
    const data = await fs.readFile('settings.json', 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading settings:', error);
    res.status(500).json({ error: 'Failed to read settings' });
  }
});

// POST endpoint to update settings.json
app.post('/settings.json', async (req, res) => {
  try {
    const settings = req.body;
    
    // Validate the settings structure
    if (typeof settings.rotateEnabled !== 'boolean' || !Array.isArray(settings.rotationAdmins)) {
      return res.status(400).json({ error: 'Invalid settings format' });
    }
    
    // Save to settings.json
    await fs.writeFile('settings.json', JSON.stringify(settings, null, 2), 'utf8');
    
    console.log('Settings updated successfully');
    res.json({ success: true, message: 'Settings saved successfully' });
  } catch (error) {
    console.error('Error saving settings:', error);
    res.status(500).json({ error: 'Failed to save settings' });
  }
});

// Fallback for settings.json GET requests
app.get('/settings.json', async (req, res) => {
  try {
    const data = await fs.readFile('settings.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (error) {
    console.error('Error reading settings:', error);
    res.status(500).json({ error: 'Failed to read settings' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Admin panel: http://localhost:${PORT}/admin.html`);
  console.log(`Public page: http://localhost:${PORT}/index.html`);
});
