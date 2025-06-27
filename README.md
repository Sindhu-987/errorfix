# Hackweek Countdown Crisis – Fixed Version 🚀

This is a **bug-fixed and improved** version of the [original repository](https://github.com/cbitosc/Hackweek-Countdown-Crisis). The app shows a countdown to the end of Hackweek and details about the COSC community.

---

## ✅ Fixes Made

### 1. `Cannot read properties of null (reading 'name')`
- **Problem:** `data` was `null` during the initial render in `CommunityInfo.js`.
- **Fix:** Added a conditional render to wait until the data is fetched before accessing properties like `data.name`, `data.date`, etc.

### 2. **Hydration Error** (`A tree hydrated but...`)
- **Problem:** The server-rendered and client-rendered HTML mismatched due to:
  - Usage of `Date` inside client component without guarding
  - Inline styles differing between server and client
- **Fixes:**
  - Marked `Countdown.js` and `HomePage.js` as `'use client'`
  - Replaced inline styles in `<main>` with a CSS class (`.main-container`) to prevent mismatches

### 3. **Global Style Issues**
- **Problem:** `@import "tailwindcss"` was declared *after* custom styles, which can break Tailwind CSS
- **Fix:** Moved `@import "tailwindcss"` to the top of `globals.css`

### 4. **Structural CSS Fixes**
- Removed improper `flex` styles on `body` that broke layout globally
- Added a `.main-container` class with proper spacing and layout in `globals.css`

---

## 🛠 How to Run Locally

```bash
git clone https://github.com/your-username/Hackweek-Countdown-Crisis
cd Hackweek-Countdown-Crisis
npm install
npm run dev
```

Visit
```bash
 http://localhost:3000 
``` 
to view the app.