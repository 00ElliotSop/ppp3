# Project Party Productions Website

**ALWAYS follow these instructions first and fallback to additional search and context gathering ONLY if the information in these instructions is incomplete or found to be in error.**

Project Party Productions is a React + TypeScript photo booth rental company website with an Express.js backend for contact form submissions. The site features a modern, responsive design with image galleries, booking forms, and service information.

## Working Effectively

### Bootstrap and Build the Repository

**Frontend Setup (REQUIRED FIRST):**
```bash
cd /home/runner/work/ppp5/ppp5
npm install
```
- Takes ~25 seconds. NEVER CANCEL - Set timeout to 120+ seconds.

**Backend Setup (REQUIRED SECOND):**
```bash
cd /home/runner/work/ppp5/ppp5/server
npm install
```
- Takes ~4 seconds. NEVER CANCEL - Set timeout to 60+ seconds.

**Build the Frontend:**
```bash
cd /home/runner/work/ppp5/ppp5
npm run build
```
- Takes ~5 seconds. NEVER CANCEL - Set timeout to 120+ seconds.
- Builds to `/dist` directory for deployment.

### Development Workflow

**Start Development Servers (Both Required for Full Functionality):**

Frontend Development Server:
```bash
cd /home/runner/work/ppp5/ppp5
npm run dev
```
- Runs on http://localhost:5173
- Hot reloading enabled
- Starts immediately

Backend API Server:
```bash
cd /home/runner/work/ppp5/ppp5/server
npm run start
```
- Runs on http://localhost:3001
- Handles contact form submissions
- Health check available at `/api/health`
- Starts immediately

**Test Production Build:**
```bash
cd /home/runner/work/ppp5/ppp5
npm run preview
```
- Runs on http://localhost:4173
- Serves built static files
- Starts immediately

### Linting and Code Quality

**Run ESLint:**
```bash
cd /home/runner/work/ppp5/ppp5
npm run lint
```
- Takes ~2 seconds. Set timeout to 60+ seconds.
- **KNOWN ISSUES**: Currently has 2 errors and 2 warnings but build still succeeds.
- Errors: Unused imports (Facebook, Twitter) in Footer.tsx
- Warnings: React hooks exhaustive-deps issues in Home.tsx
- **Do not fail builds due to these existing linting issues**

## Validation Scenarios

**ALWAYS manually validate changes through these complete scenarios:**

### Basic Homepage Validation
1. Navigate to http://localhost:5173
2. Verify homepage loads with hero image carousel
3. Check navigation menu functions (HOME, BACKDROPS, PHOTOBOOTHS dropdown, FAQ, GALLERY, OTHER RENTALS dropdown, BOOK NOW)
4. Scroll to verify testimonials section with image carousel
5. Verify footer contact information displays

### Booking Form End-to-End Test
1. Navigate to http://localhost:5173/book-now
2. Fill out the booking form with test data:
   - Full Name: "Test User"
   - Email: "test@example.com"
   - Phone: "647-555-0123"
   - Event Date: Any future date
   - Event Type: Select "Wedding"
   - Guest Count: 50
   - Venue: "Test Venue"
   - Message: "Test booking request"
   - Check text message consent checkbox
3. Submit form (Note: Email sending requires .env configuration)
4. Verify form validation works for required fields

### Backend API Validation
```bash
curl -X GET http://localhost:3001/api/health
```
Expected response: `{"status":"OK","message":"Server is running"}`

### Gallery and Image Loading Test
1. Navigate to http://localhost:5173/gallery
2. Verify 23+ gallery images load correctly in grid layout
3. Check that image optimization is working (images should load progressively)
4. Test on mobile viewport (resize browser to 375px width)
5. Verify all images maintain proper aspect ratios

### Mobile Responsiveness Test
1. Resize browser to 375x667 (iPhone viewport)
2. Navigate through all major pages (Home, Gallery, Book Now, About Us)
3. Verify navigation menu collapses properly
4. Check that hero images and text scaling work correctly
5. Ensure booking form remains usable on mobile

## Common Tasks and File Locations

### Key Source Code Locations
- **Frontend Entry Point**: `/src/main.tsx`
- **App Component**: `/src/App.tsx` 
- **Page Components**: `/src/pages/` (Home.tsx, BookNow.tsx, Gallery.tsx, etc.)
- **Shared Components**: `/src/components/` (Header.tsx, Footer.tsx, ScrollToTop.tsx)
- **Backend Server**: `/server/server.js`
- **Static Assets**: `/public/` (contains 150+ image files)

### Configuration Files
- **Vite Config**: `vite.config.ts` (build tool configuration)
- **TypeScript**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Tailwind CSS**: `tailwind.config.js` (uses Libre Baskerville font)
- **ESLint**: `eslint.config.js`
- **PostCSS**: `postcss.config.js`
- **Package Files**: `package.json` (frontend), `server/package.json` (backend)

### Deployment Configuration
- **Nginx Config**: `nginx.conf` (production deployment configuration)
- **Deploy Script**: `deploy.sh` (builds and copies to `/var/www/html/`)
- **Build Output**: `dist/` directory (gitignored)

### Backend Environment Setup
Backend requires email configuration in `/server/.env`:
```bash
cp /home/runner/work/ppp5/ppp5/server/.env.example /home/runner/work/ppp5/ppp5/server/.env
```
Edit `.env` with actual email credentials for contact form functionality.

## Technology Stack Details

**Frontend:**
- React 18.3.1 with TypeScript
- Vite 5.4.2 (build tool)
- Tailwind CSS 3.4.1 (styling)
- React Router DOM 7.8.0 (routing)
- Lucide React (icons)

**Backend:**
- Express.js 4.18.2
- Nodemailer 6.9.7 (email sending)
- CORS support
- dotenv for environment variables

## Critical Reminders

- **NEVER CANCEL builds or long-running commands** - Set appropriate timeouts (120+ seconds for npm installs/builds)
- **Always install both frontend AND backend dependencies** before development
- **Linting errors are known and non-blocking** - focus on new issues only
- **Manual validation is required** - Run through complete user scenarios after any changes
- **Image assets are numerous** (150+ files in /public) - expect longer initial load times in development
- **Backend needs .env configuration** for email functionality to work (copy from .env.example)
- **Always test on mobile viewport** (375px width) - site is heavily mobile-optimized
- **Form validation works correctly** - test booking form with complete test data
- **Production build and preview work identically** to development

## Quick Reference Commands

```bash
# Full setup from fresh clone
cd /home/runner/work/ppp5/ppp5 && npm install
cd /home/runner/work/ppp5/ppp5/server && npm install

# Development
cd /home/runner/work/ppp5/ppp5 && npm run dev           # Frontend dev server
cd /home/runner/work/ppp5/ppp5/server && npm run start  # Backend server

# Production
cd /home/runner/work/ppp5/ppp5 && npm run build         # Build for production
cd /home/runner/work/ppp5/ppp5 && npm run preview       # Preview production build

# Quality
cd /home/runner/work/ppp5/ppp5 && npm run lint          # Lint code (has known issues)

# Health check
curl -X GET http://localhost:3001/api/health             # Test backend API
```