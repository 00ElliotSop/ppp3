# Project Party Productions Website

## Deployment Instructions for CloudPanel/Nginx

### 1. Build the Application
```bash
npm install
npm run build
```

### 2. Upload Files
Upload the contents of the `dist` folder to your web server's document root (usually `/var/www/html/` or similar).

### 3. Nginx Configuration
Use the provided `nginx.conf` configuration or add this to your existing nginx config:

```nginx
server {
    listen 80;
    server_name projectpartyproductions.com www.projectpartyproductions.com first.projectpartyproductions.com;
    
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
        index index.html;
    }
    
    # API routes (if using backend)
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 4. Backend Server (Optional)
If you're using the booking form backend:

```bash
cd server
npm install
npm start
```

### 5. SSL Certificate
For production, add SSL certificate:

```bash
certbot --nginx -d projectpartyproductions.com -d www.projectpartyproductions.com -d first.projectpartyproductions.com
```

## Troubleshooting 502 Errors

1. **Check if files exist**: Ensure `dist` folder contents are in the web root
2. **Check permissions**: Files should be readable by nginx user (www-data)
3. **Check nginx config**: Ensure `try_files` directive includes `/index.html` fallback
4. **Check nginx logs**: `tail -f /var/log/nginx/error.log`

## File Structure After Build
```
/var/www/html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── [other static files]
```