// Minimale service worker — alleen aanwezig zodat de app installeerbaar is
// als fullscreen app zonder adresbalk. Doet verder niets bijzonders.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // gewoon alles normaal laten verlopen
});
