/**
 * Site officiel de Qdf — Artiste musical
 * Script client & gestion des liens officiels
 */

// ============================================================================
// OFFICIAL LINKS / LIENS OFFICIELS DE L'ARTISTE QDF
// Remplacez les chaînes vides "" ci-dessous par vos vrais liens :
// ============================================================================

const SPOTIFY_URL = "";
const TIKTOK_URL = "";

// ============================================================================
// CONTACT PROFESSIONNEL
// ============================================================================

const PROFESSIONAL_EMAIL = "jonathanbrt17@gmail.com";

// ============================================================================
// LOGIQUE D'INITIALISATION
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Configuration du bouton Spotify Hero
  const spotifyHeroBtn = document.getElementById("spotify-hero-btn");
  const spotifyTrackBtn = document.getElementById("spotify-track-btn");
  const tiktokHeroBtn = document.getElementById("tiktok-hero-btn");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyFeedback = document.getElementById("copy-feedback");

  // Configuration du bouton Spotify
  function setupPlatformButton(button, url, platformName) {
    if (!button) return;

    if (url && url.trim() !== "") {
      button.href = url;
      button.target = "_blank";
      button.rel = "noopener noreferrer";
      button.classList.remove("disabled");
    } else {
      button.href = "#";
      button.addEventListener("click", (e) => {
        e.preventDefault();
        alertFeedback(`Le lien officiel ${platformName} sera disponible très prochainement dès la publication.`);
      });
    }
  }

  // Configuration des liens
  setupPlatformButton(spotifyHeroBtn, SPOTIFY_URL, "Spotify");
  setupPlatformButton(spotifyTrackBtn, SPOTIFY_URL, "Spotify");
  setupPlatformButton(tiktokHeroBtn, TIKTOK_URL, "TikTok");

  // Copier l'adresse email professionnelle dans le presse-papiers
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(PROFESSIONAL_EMAIL);
        copyEmailBtn.textContent = "Copié !";
        alertFeedback("Adresse email copiée dans le presse-papiers");
        
        setTimeout(() => {
          copyEmailBtn.textContent = "Copier l'adresse";
        }, 2500);
      } catch (err) {
        // Fallback
        alertFeedback(`Email : ${PROFESSIONAL_EMAIL}`);
      }
    });
  }

  function alertFeedback(message) {
    if (!copyFeedback) return;
    copyFeedback.textContent = message;
    copyFeedback.style.opacity = "1";
    setTimeout(() => {
      copyFeedback.style.opacity = "0";
    }, 3500);
  }
});
