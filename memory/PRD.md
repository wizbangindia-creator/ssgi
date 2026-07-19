# SSGI - Sri Sai Group of Institutes

## Original Problem Statement
Clone https://github.com/wizbangindia-creator/ssgi and make it running.

## Architecture
- Frontend: React 19 + CRACO + Tailwind + Radix UI + Framer Motion (port 3000)
- Backend: FastAPI + Motor (async MongoDB) (port 8001)
- DB: MongoDB (local)

## What's Been Implemented (2026-01-19)
- Cloned repo into /app (preserving .env files)
- Installed Python deps (requirements.txt) and yarn deps
- Both services running via supervisor; homepage loads correctly
- Frontend shows SSGI marketing/institute website (Home, About, Chairman/CMD/MD/VP/Founder pages, VisionMission)
- Backend exposes /api and /api/status endpoints (starter template retained)

## Next Action Items
- Add real content/APIs if backend features are needed (currently only status template)
- Wire up enquiry/apply form submissions to backend if required
