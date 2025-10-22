# Backend

This is the backend for the project. It requires a MongoDB connection string to connect to a database.

Environment variables

- `MONGO_URI` - (optional) MongoDB connection string. If not set, the server will fall back to a default connection string contained in `server.js` (intended only for quick local testing). Do NOT keep production credentials in source code.

Run locally

In PowerShell:

```powershell
# optional: set MONGO_URI for current session
$env:MONGO_URI = 'mongodb+srv://Bhagya:2001@cluster0.rsj0dxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
npx nodemon server.js
```

Notes

- The server starts even if MongoDB connection fails, but user-related routes will return DB errors until the connection is fixed.
- For production, set `MONGO_URI` as an environment variable and remove any hard-coded fallback in the source code.