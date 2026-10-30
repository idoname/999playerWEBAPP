// Lets 999 Player open offline once it has been loaded one time.
const V = "999-web-1";
const CORE = ["./", "index.html", "css/app.css", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png",
  "js/app.js", "js/util.js", "js/ui.js", "js/db.js", "js/library.js", "js/player.js", "js/themes.js", "js/visuals.js", "js/backgrounds.js",
  "js/views.js", "js/nowplaying.js", "js/lyrics_ui.js", "js/social.js", "js/social_ui.js", "js/tags.js", "js/config.js"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(V).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;   // lyrics and Supabase calls go straight to the network
  e.respondWith(fetch(e.request).then((r) => { const c = r.clone(); caches.open(V).then((ca) => ca.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then((m) => m || caches.match("index.html"))));
});
