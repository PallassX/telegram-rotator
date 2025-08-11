# Telegram Rotator Jutsu

A Telegram admin rotation system with a web-based admin panel for managing rotation settings.

## Features

- **Admin Panel**: Web-based interface to manage rotation admins
- **Real-time Updates**: Changes are immediately saved to `settings.json`
- **Global Toggle**: Master switch to enable/disable all rotations
- **Admin Management**: Add, remove, reorder, and toggle individual admins
- **Public Page**: `index.html` uses the same `settings.json` for global effects

## Setup

### Prerequisites
- Node.js installed on your system
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Access the admin panel:**
   - Open your browser and go to: `http://localhost:3000/admin.html`
   - The public page is available at: `http://localhost:3000/index.html`

## How It Works

### Admin Panel (`admin.html`)
- **Loads data** from `settings.json` when the page loads
- **Saves changes** directly to `settings.json` via the server
- **Real-time updates** - all changes are immediately persisted
- **Global toggle** controls whether rotation is enabled system-wide

### Server (`server.js`)
- Serves the static HTML files
- Handles API requests to read/write `settings.json`
- Validates data before saving
- Provides proper error handling

### Settings File (`settings.json`)
- Contains the master rotation toggle
- Stores the list of admin users with their status
- Used by both the admin panel and public page

## File Structure

```
telegram-rotator-jutsu/
├── admin.html          # Admin panel interface
├── index.html          # Public rotation page
├── settings.json       # Configuration file
├── server.js           # Node.js server
├── package.json        # Dependencies
└── README.md          # This file
```

## Usage

### Adding an Admin
1. Enter the admin name in "Nama Admin"
2. Enter the Telegram link in "Link Admin"
3. Click "➕ Tambah Admin"

### Managing Admins
- **Toggle Status**: Use the green switch to enable/disable individual admins
- **Reorder**: Use ⬆️ and ⬇️ buttons to change the rotation order
- **Delete**: Use ❌ button to remove admins

### Global Control
- Use the "Global Rotate" toggle to enable/disable all rotations
- When disabled, no redirects will occur even if individual admins are active

## Troubleshooting

- **"Error loading settings"**: Make sure the server is running (`npm start`)
- **"Error saving settings"**: Check that the server has write permissions to `settings.json`
- **Page not loading**: Ensure you're accessing via `http://localhost:3000` not file://

## Security Note

This system is designed for local/development use. For production deployment, consider:
- Adding authentication to the admin panel
- Implementing rate limiting
- Using HTTPS
- Restricting file write permissions