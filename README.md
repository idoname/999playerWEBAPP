# 999 Player by idoname: web app (works on iPhone)

A static website: no server, no build step. It plays **your own music files**, which stay on your device.
Same features as the desktop app: library, playlists, favorites, play counts, synced lyrics, themes,
audio-reactive animated backgrounds, Home page, friends and song comments (optional Supabase).

## Put it online (free, pick one)
- **Cloudflare Pages / Netlify**: drag this whole folder onto their "deploy a folder" page.
- **GitHub Pages**: upload the folder to a repository, then Settings → Pages.
It must be served over **https** (all three do this) so the iPhone allows installing and offline use.

## On the iPhone
1. Open your site in **Safari**. 2. Share → **Add to Home Screen**. 3. Open it from the new icon.
4. Menu → File → Add songs (pick files from Files / iCloud / On My iPhone).

## Limits on iPhone (Apple's rules, not bugs)
- Songs are **copied into the browser's storage**; iOS can clear it if the phone is very low on space (installing to the Home Screen helps).
- Folders can't be remembered (only Chrome / Edge on a computer or Android can read a folder in place).
- No volume slider (use the phone's buttons); backgrounds react to simulated levels, not the real audio.
- Backgrounds animate at 30 fps and lower resolution to save battery.

## Online features (friends, comments)
Use the same Supabase project as the Windows/Android apps. Either paste the URL and **anon** key into
`js/config.js` before deploying, or leave it blank and each person uses Menu → Social → **Online setup**.
Never put the service_role key anywhere.

## Files
index.html, manifest.webmanifest, sw.js (offline), css/app.css, icons/, js/*.js.
Everything is plain ES modules; to test locally run `python3 -m http.server` in this folder and open http://localhost:8000.
