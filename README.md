# 💖 CUK Commit — From Campus to Forever

**CUK Commit** is a university-exclusive dating web app built for students of **Central University of Karnataka (CUK)**. It focuses on real connections — relationships, friendships, and meaningful campus interactions — rather than mindless swiping.

> 🎯 Goal: help students connect inside campus in a safe, verified, and structured way.

---

## ✨ Key Features

### 🔐 Authentication
- Email + Password login/signup
- **Email verification**
- **Forgot password / Reset password**
- **Google Sign-In (OAuth)** using Supabase

### 🧑‍🎓 Verified Campus Profiles
- Student identity-based user accounts
- Onboarding flow to complete profile
- User profile completion checks before discovery access

### 🧾 Onboarding Flow
- Profile Setup (name, gender, etc.)
- Photo Upload (min 2 photos, max 6)
- Interest selection
- Bio setup

### 📸 Photo Upload System
- Slot-based upload (6 grid fixed)
- Remove photo support
- Upload progress indicator per tile
- Powered by **Supabase Storage**

### ❤️ Matching / Discovery
- Discover page for browsing matches
- Profile-driven filtering readiness (future scope)

---

## 🧱 Tech Stack

### Frontend
- **React** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS** for styling
- Reusable UI components in `src/components`

### Backend
- **Supabase**
  - Supabase Auth
  - Supabase Database (`profiles` table, etc.)
  - Supabase Storage (user photos)

---

## 🗂️ Project Structure

This repo uses a conventional Vite + React structure. Relevant files/folders:

```bash
src/
├── assets/
├── components/
│   ├── AboutSection.tsx
│   ├── AppPreviewSection.tsx
│   └── ui/  # reusable UI primitives
├── hooks/
├── lib/
│   ├── supabase.ts    # Supabase client + helpers
│   └── utils.ts
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx
└── main.tsx

public/
index.html
package.json
vite.config.ts
```

---

## 🔄 App Flow (Routing Logic)

1) Splash / Landing → Welcome

2) Auth Gate
- Not logged in: Welcome / Login / Signup
- Logged in: If profile incomplete → onboarding screens; else → Discover

---

## 🔗 Deep Linking / Redirects

If you integrate mobile or external flows, configure redirect URLs in Supabase for OAuth and password reset callbacks. For web deployments, the app uses the single-page app routing provided by Vite/React.

---

## 🚀 Setup Instructions (Local)

Prerequisites: Node.js (16+ recommended) and npm or pnpm.

1) Clone the repo

```powershell
git clone <your-repo-url>
cd CUK_COMMIT
```

2) Install dependencies

```powershell
npm install
```

3) Configure environment variables

Create a `.env` file (or use Vercel environment vars) with these keys:

```env
VITE_SUPABASE_URL="your_supabase_url"
VITE_SUPABASE_ANON_KEY="your_supabase_anon_key"
```

Note: Vite exposes env vars prefixed with `VITE_` to the client.

4) Run the dev server

```powershell
npm run dev
```

5) Build for production

```powershell
npm run build
```

---

## 🔑 Supabase Setup Checklist

### Auth Providers
- Enable Email Auth
- Enable Google OAuth (if used)

### Redirect URLs (example)
- For web OAuth callbacks, add your deployed site URL (e.g. `https://your-app.vercel.app`) in Supabase settings.

### Storage Bucket
- Create a bucket such as `user-photos` and ensure rules allow authenticated uploads (or adjust security rules to your needs).

---

## 📌 Security Notes

- Do not commit any secrets. Use `.env` locally and platform env vars in production (Vercel, Netlify, etc.).
- Supabase anon keys are safe to be client-visible but keep service_role keys secret and never expose them in the frontend.

---

## 🛠 Future Improvements (Planned)
- Match algorithm improvements
- Filters: department/year/interests
- Chat system (with moderation/reporting)
- Profile verification badge system
- Admin dashboard for moderation

---

## 📄 License

This project is **NOT open source**.

**All Rights Reserved.**

---

## 👥 Team Members

| Profile | Name |
|--------|------|
| <img src="https://github.com/Uni-Creator.png" width="80" height="80" style="border-radius:50%"/> | **[Abhay Singh](https://github.com/Uni-Creator)** |
| <img src="https://github.com/Droid-DevX.png" width="80" height="80" style="border-radius:50%"/> | **[Ayush Tandon](https://github.com/Droid-DevX)** |
| <img src="https://github.com/abhaydwived.png" width="80" height="80" style="border-radius:50%"/> | **[Abhay Dwivedi](https://github.com/abhaydwived)** |

---

If you'd like I can: add a Vercel `vercel.json` (build output: `dist`), run a local build to verify `npm run build` succeeds, or tweak the README text to match any other preferences.
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
