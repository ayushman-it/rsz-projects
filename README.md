# Repair Service Zone

Repair Service Zone is a starter monorepo for a repair-services web application.

This setup includes:

- A React + Vite + Tailwind CSS frontend
- A PHP backend structure for future API work
- A MySQL schema placeholder for service, booking, and customer data

## Project Structure

```text
Repair Service Zone/
|- frontend/   # React + Tailwind landing page and future client app
|- backend/    # PHP API skeleton and MySQL setup files
```

## Frontend

The frontend is scaffolded with:

- React
- Vite
- Tailwind CSS

The initial UI includes a styled homepage for browsing repair categories like AC, cooler, refrigerator, TV, washing machine, microwave, and more.

## Backend

The backend is intentionally setup-only. It includes:

- `public/` entry point
- `app/` for controllers, models, and core classes
- `routes/` for route definitions
- `config/` for app and database configuration
- `database/schema.sql` for initial MySQL tables

No real backend logic has been implemented yet.

## Next Steps

1. Install frontend dependencies in `frontend/`
2. Setup a PHP local server for `backend/public`
3. Create REST APIs for services, bookings, authentication, and dashboard features
4. Connect the React frontend to the PHP backend

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow that deploys only the frontend to GitHub Pages.

Files involved:

- `.github/workflows/deploy-frontend-pages.yml`
- `frontend/vite.config.js`

How to publish:

1. Push this repository to GitHub
2. Open repository `Settings > Pages`
3. Set the source to `GitHub Actions`
4. Push to the `main` branch or run the workflow manually

The workflow builds `frontend/` and publishes `frontend/dist` to GitHub Pages.
