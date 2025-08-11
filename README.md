# Telegram Rotator Jutsu

A Telegram admin rotation system with an admin panel for managing rotation settings.

## Features

- Admin panel for managing rotation settings
- JSON-based configuration
- Express.js backend server
- Static file serving

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Access the application:
   - Main page: http://localhost:3000/index.html
   - Admin panel: http://localhost:3000/admin.html

## Deployment

### GitHub Pages (Static Frontend)

This repository is configured with GitHub Actions to automatically deploy to GitHub Pages.

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Click Save

2. **Automatic Deployment:**
   - Every push to the `main` branch triggers automatic deployment
   - The static files will be available at: `https://yourusername.github.io/telegram-rotator-jutsu/`

### Server Deployment

For full functionality including the backend API, deploy to a Node.js hosting service:

#### Option 1: Railway
1. Connect your GitHub repository to Railway
2. Railway will automatically detect the Node.js app
3. Set environment variables if needed
4. Deploy with one click

#### Option 2: Render
1. Connect your GitHub repository to Render
2. Choose "Web Service"
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Deploy

#### Option 3: Heroku
1. Install Heroku CLI
2. Create a new Heroku app
3. Push to Heroku: `git push heroku main`
4. Scale the dyno: `heroku ps:scale web=1`

#### Option 4: VPS/Dedicated Server
1. Clone the repository
2. Install Node.js and npm
3. Run `npm install`
4. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "telegram-rotator"
   pm2 startup
   pm2 save
   ```

## Environment Variables

For production deployment, consider setting these environment variables:

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (production/development)

## File Structure

```
├── server.js          # Express.js server
├── admin.html         # Admin panel interface
├── index.html         # Main application page
├── settings.json      # Configuration file
├── package.json       # Dependencies and scripts
└── .github/workflows/ # GitHub Actions deployment
```

## API Endpoints

- `GET /api/settings` - Retrieve current settings
- `POST /settings.json` - Update settings
- `GET /settings.json` - Get settings file

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License