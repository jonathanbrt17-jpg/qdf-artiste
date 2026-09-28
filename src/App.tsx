/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Music, 
  ExternalLink, 
  Mail, 
  Copy, 
  Check, 
  Disc, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  ShieldCheck, 
  ArrowUpRight,
  Share2,
  FileCode,
  Github,
  X
} from 'lucide-react';

/* ==========================================================================
   OFFICIAL LINKS / LIENS OFFICIELS DE L'ARTISTE QDF
   Remplacer par vos vraies URLs dès qu'elles sont disponibles :
   ========================================================================== */
export const SPOTIFY_URL: string = "";
export const TIKTOK_URL: string = "";

/* ==========================================================================
   CONTACT PROFESSIONNEL
   ========================================================================== */
export const PROFESSIONAL_EMAIL: string = "jonathanbrt17@gmail.com";

/* ==========================================================================
   CATALOGUE MUSICAL (Extensible pour les futures sorties)
   ========================================================================== */
export interface ReleaseItem {
  id: string;
  title: string;
  artist: string;
  year: string;
  type: string;
  coverImage: string;
  spotifyUrl: string;
  isFeatured?: boolean;
}

export const RELEASES: ReleaseItem[] = [
  {
    id: "eternel-souvenir",
    title: "Éternel souvenir",
    artist: "Qdf",
    year: "2026",
    type: "Single",
    coverImage: "/assets/cover.jpg",
    spotifyUrl: SPOTIFY_URL,
    isFeatured: true,
  },
];

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'music' | 'about' | 'contact'>('home');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => {
      setNotificationMsg(null);
    }, 3500);
  };

  const copyToClipboard = (text: string, type: 'email' | 'share') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      showNotification("Adresse email copiée dans le presse-papiers");
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedShare(true);
      showNotification("Lien du site copié dans le presse-papiers");
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleSpotifyClick = (e: React.MouseEvent, url: string) => {
    if (!url || url.trim() === "") {
      e.preventDefault();
      showNotification("Lien Spotify bientôt disponible dès la validation officielle.");
    }
  };

  const handleTikTokClick = (e: React.MouseEvent, url: string) => {
    if (!url || url.trim() === "") {
      e.preventDefault();
      showNotification("Lien TikTok officiel bientôt disponible.");
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f2f2f3] flex flex-col font-sans relative selection:bg-[#c49b66]/30 selection:text-white">
      {/* Subtle ambient luxury backdrop glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#c49b66]/10 via-[#9e2a2b]/8 to-transparent rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-[#611f27]/8 rounded-full blur-[160px] opacity-40" />
      </div>

      {/* Floating toast notification */}
      {notificationMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16161a] border border-[#c49b66]/40 text-[#f2f2f3] px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm animate-fade-in backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-[#c49b66] shrink-0" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* ====================================================================
          1. HEADER
          ==================================================================== */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08080a]/80 border-b border-white/[0.06] transition-all">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a 
            href="#accueil" 
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c49b66] rounded-md px-1"
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-[#c49b66] transition-colors">
                Qdf
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-medium">
                Artiste musical
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav aria-label="Navigation principale" className="flex items-center gap-1 sm:gap-6">
            <a 
              href="#accueil" 
              className="text-xs sm:text-sm text-zinc-300 hover:text-white px-3 py-1.5 transition-colors font-medium tracking-wide rounded-md hover:bg-white/[0.04]"
            >
              Accueil
            </a>
            <a 
              href="#musique" 
              className="text-xs sm:text-sm text-zinc-300 hover:text-white px-3 py-1.5 transition-colors font-medium tracking-wide rounded-md hover:bg-white/[0.04]"
            >
              Musique
            </a>
            <a 
              href="#a-propos" 
              className="text-xs sm:text-sm text-zinc-300 hover:text-white px-3 py-1.5 transition-colors font-medium tracking-wide rounded-md hover:bg-white/[0.04]"
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className="text-xs sm:text-sm text-zinc-300 hover:text-white px-3 py-1.5 transition-colors font-medium tracking-wide rounded-md hover:bg-white/[0.04]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ====================================================================
          MAIN CONTENT
          ==================================================================== */}
      <main className="flex-1 z-10">

        {/* ====================================================================
            2. HERO SECTION
            ==================================================================== */}
        <section 
          id="accueil" 
          className="relative pt-12 pb-20 md:pt-20 md:pb-28 max-w-6xl mx-auto px-5 sm:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cover Column */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative group max-w-[420px] w-full">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#c49b66]/30 via-[#8b1e2a]/20 to-[#c49b66]/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-700" />
                
                {/* Cover container */}
                <div className="relative overflow-hidden rounded-2xl bg-[#111115] border border-white/10 shadow-2xl aspect-square">
                  <img
                    src="/assets/cover.jpg"
                    alt="Pochette du titre Éternel souvenir de Qdf"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                  />

                  {/* Subtle badge on cover */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full text-zinc-200">
                    Nouveau single
                  </div>

                  {/* Soundwave visualizer element */}
                  <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1 h-3 bg-[#c49b66] rounded-full animate-pulse" />
                    <span className="w-1 h-5 bg-[#c49b66] rounded-full animate-pulse delay-100" />
                    <span className="w-1 h-2 bg-[#c49b66] rounded-full animate-pulse delay-200" />
                    <span className="w-1 h-4 bg-[#c49b66] rounded-full animate-pulse delay-300" />
                    <span className="text-[11px] text-zinc-300 font-mono pl-1">2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold tracking-[0.25em] text-[#c49b66] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c49b66] animate-ping" />
                Artiste musical officiel
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[0.08em] uppercase leading-tight mb-2">
                Qdf
              </h1>

              <div className="text-xl sm:text-2xl text-zinc-300 font-display font-medium tracking-wide mb-4">
                « Éternel souvenir »
              </div>

              <p className="text-zinc-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                Découvrez l’univers musical de Qdf.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                
                {/* Spotify Button */}
                {SPOTIFY_URL && SPOTIFY_URL.trim() !== "" ? (
                  <a
                    href={SPOTIFY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#1db954] hover:bg-[#1ed760] text-black font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#1db954]/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.308c-.215.352-.676.463-1.028.248-2.816-1.72-6.36-2.11-10.536-1.157-.402.092-.803-.16-.895-.562-.092-.403.16-.804.563-.896 4.572-1.045 8.492-.596 11.648 1.339.352.215.464.676.248 1.028zm1.467-3.262c-.27.44-.848.58-1.288.31-3.224-1.982-8.14-2.556-11.954-1.398-.496.15-1.024-.136-1.175-.632-.15-.496.136-1.024.632-1.175 4.364-1.325 9.784-.683 13.475 1.587.44.27.58.848.31 1.288zm.126-3.41c-3.864-2.294-10.239-2.506-13.916-1.39-.594.18-1.226-.156-1.406-.75-.18-.594.156-1.226.75-1.406 4.225-1.283 11.272-1.037 15.688 1.586.536.318.712 1.012.394 1.548-.318.536-1.012.712-1.548.394z"/>
                    </svg>
                    <span>Écouter sur Spotify</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={(e) => handleSpotifyClick(e, SPOTIFY_URL)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white border border-white/10 font-semibold text-sm transition-all duration-300 group cursor-pointer"
                    title="Bientôt disponible sur Spotify"
                  >
                    <svg className="w-5 h-5 fill-[#1db954]" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.308c-.215.352-.676.463-1.028.248-2.816-1.72-6.36-2.11-10.536-1.157-.402.092-.803-.16-.895-.562-.092-.403.16-.804.563-.896 4.572-1.045 8.492-.596 11.648 1.339.352.215.464.676.248 1.028zm1.467-3.262c-.27.44-.848.58-1.288.31-3.224-1.982-8.14-2.556-11.954-1.398-.496.15-1.024-.136-1.175-.632-.15-.496.136-1.024.632-1.175 4.364-1.325 9.784-.683 13.475 1.587.44.27.58.848.31 1.288zm.126-3.41c-3.864-2.294-10.239-2.506-13.916-1.39-.594.18-1.226-.156-1.406-.75-.18-.594.156-1.226.75-1.406 4.225-1.283 11.272-1.037 15.688 1.586.536.318.712 1.012.394 1.548-.318.536-1.012.712-1.548.394z"/>
                    </svg>
                    <span>Écouter sur Spotify</span>
                    <span className="text-[11px] bg-white/[0.08] text-zinc-400 px-2 py-0.5 rounded-full font-normal">
                      Bientôt
                    </span>
                  </button>
                )}

                {/* TikTok Button */}
                {TIKTOK_URL && TIKTOK_URL.trim() !== "" ? (
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.88-4.46V8.6a8.28 8.28 0 0 0 4.89 1.59V6.69z"/>
                    </svg>
                    <span>TikTok</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={(e) => handleTikTokClick(e, TIKTOK_URL)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/[0.07] font-semibold text-sm transition-all duration-300 cursor-pointer"
                    title="Bientôt disponible sur TikTok"
                  >
                    <svg className="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.88-4.46V8.6a8.28 8.28 0 0 0 4.89 1.59V6.69z"/>
                    </svg>
                    <span>TikTok</span>
                    <span className="text-[11px] bg-white/[0.06] text-zinc-400 px-2 py-0.5 rounded-full font-normal">
                      Bientôt
                    </span>
                  </button>
                )}

              </div>

              {/* Direct email quick display */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400">
                <span className="text-zinc-400 font-medium">Contact professionnel :</span>
                <a 
                  href={`mailto:${PROFESSIONAL_EMAIL}`}
                  className="text-zinc-300 hover:text-[#c49b66] transition-colors font-mono tracking-tight"
                >
                  {PROFESSIONAL_EMAIL}
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* ====================================================================
            3. SECTION MUSIQUE
            ==================================================================== */}
        <section 
          id="musique" 
          className="py-16 md:py-24 border-t border-white/[0.06] bg-[#0c0c0f]/60"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#c49b66] font-semibold block mb-2">
                  Discographie
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wide">
                  Musique
                </h2>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">
                Sorties officielles de l'artiste Qdf.
              </p>
            </div>

            {/* Releases Grid / List */}
            <div className="space-y-6">
              {RELEASES.map((item) => (
                <div 
                  key={item.id}
                  className="bg-[#121216] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 shadow-xl"
                >
                  {/* Thumbnail */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-md">
                    <img 
                      src={item.coverImage} 
                      alt={`Pochette de ${item.title} par ${item.artist}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#c49b66]/15 text-[#c49b66] border border-[#c49b66]/20">
                        {item.type}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 mb-4 font-medium">
                      Artiste : <span className="text-zinc-200">{item.artist}</span>
                    </p>

                    <div className="text-xs text-zinc-400">
                      Sortie officielle disponible sur toutes les plateformes musicales.
                    </div>
                  </div>

                  {/* Action */}
                  <div className="w-full sm:w-auto shrink-0 flex flex-col items-stretch sm:items-end">
                    {item.spotifyUrl && item.spotifyUrl.trim() !== "" ? (
                      <a 
                        href={item.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#1db954] hover:bg-[#1ed760] text-black font-semibold text-xs transition-all shadow-md"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.308c-.215.352-.676.463-1.028.248-2.816-1.72-6.36-2.11-10.536-1.157-.402.092-.803-.16-.895-.562-.092-.403.16-.804.563-.896 4.572-1.045 8.492-.596 11.648 1.339.352.215.464.676.248 1.028zm1.467-3.262c-.27.44-.848.58-1.288.31-3.224-1.982-8.14-2.556-11.954-1.398-.496.15-1.024-.136-1.175-.632-.15-.496.136-1.024.632-1.175 4.364-1.325 9.784-.683 13.475 1.587.44.27.58.848.31 1.288zm.126-3.41c-3.864-2.294-10.239-2.506-13.916-1.39-.594.18-1.226-.156-1.406-.75-.18-.594.156-1.226.75-1.406 4.225-1.283 11.272-1.037 15.688 1.586.536.318.712 1.012.394 1.548-.318.536-1.012.712-1.548.394z"/>
                        </svg>
                        <span>Écouter sur Spotify</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button 
                        onClick={(e) => handleSpotifyClick(e, item.spotifyUrl)}
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/10 font-semibold text-xs transition-all cursor-pointer"
                      >
                        <svg className="w-4 h-4 fill-[#1db954]" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.308c-.215.352-.676.463-1.028.248-2.816-1.72-6.36-2.11-10.536-1.157-.402.092-.803-.16-.895-.562-.092-.403.16-.804.563-.896 4.572-1.045 8.492-.596 11.648 1.339.352.215.464.676.248 1.028zm1.467-3.262c-.27.44-.848.58-1.288.31-3.224-1.982-8.14-2.556-11.954-1.398-.496.15-1.024-.136-1.175-.632-.15-.496.136-1.024.632-1.175 4.364-1.325 9.784-.683 13.475 1.587.44.27.58.848.31 1.288zm.126-3.41c-3.864-2.294-10.239-2.506-13.916-1.39-.594.18-1.226-.156-1.406-.75-.18-.594.156-1.226.75-1.406 4.225-1.283 11.272-1.037 15.688 1.586.536.318.712 1.012.394 1.548-.318.536-1.012.712-1.548.394z"/>
                        </svg>
                        <span>Écouter sur Spotify</span>
                        <span className="text-[10px] text-zinc-400 bg-white/10 px-2 py-0.5 rounded">
                          Bientôt disponible
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ====================================================================
            4. SECTION À PROPOS
            ==================================================================== */}
        <section 
          id="a-propos" 
          className="py-16 md:py-24 border-t border-white/[0.06] relative"
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="bg-gradient-to-b from-[#141419] to-[#0e0e12] border border-white/[0.08] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
              
              {/* Subtle ornamental crest */}
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#c49b66]/10 border border-[#c49b66]/30 flex items-center justify-center text-[#c49b66]">
                <Music className="w-5 h-5" />
              </div>

              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c49b66] font-semibold block mb-3">
                Biographie officielle
              </span>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide mb-6">
                À propos de Qdf
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
                Qdf est un artiste musical indépendant. Retrouvez ici ses sorties musicales et ses liens officiels.
              </p>

              {/* Credibility badges for Spotify / DSP verification */}
              <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="block text-zinc-400 mb-1">Identité</span>
                  <span className="text-zinc-200 font-medium">Artiste indépendant</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="block text-zinc-400 mb-1">Dernière sortie</span>
                  <span className="text-zinc-200 font-medium">Éternel souvenir</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="block text-zinc-400 mb-1">Canal officiel</span>
                  <span className="text-zinc-200 font-medium">Site web vérifié</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            5. SECTION CONTACT PROFESSIONNEL
            ==================================================================== */}
        <section 
          id="contact" 
          className="py-16 md:py-24 border-t border-white/[0.06] bg-[#0c0c0f]/80"
        >
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#c49b66] mb-5">
              <Mail className="w-5 h-5" />
            </div>

            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c49b66] font-semibold block mb-2">
              Prise de contact
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wide mb-4">
              Contact professionnel
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Pour toute demande professionnelle ou collaboration, contactez Qdf par email.
            </p>

            {/* Email Card with Copy button */}
            <div className="bg-[#141418] border border-white/[0.1] hover:border-[#c49b66]/40 transition-colors p-6 rounded-2xl shadow-xl max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
                <div className="w-10 h-10 rounded-xl bg-[#c49b66]/10 flex items-center justify-center text-[#c49b66] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] tracking-wider uppercase text-zinc-400 font-semibold block">
                    Adresse email directe
                  </span>
                  <a 
                    href={`mailto:${PROFESSIONAL_EMAIL}`}
                    className="text-base sm:text-lg font-mono font-medium text-white hover:text-[#c49b66] transition-colors truncate block"
                  >
                    {PROFESSIONAL_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => copyToClipboard(PROFESSIONAL_EMAIL, 'email')}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 hover:text-white text-xs font-medium transition-colors border border-white/10 active:scale-95"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFESSIONAL_EMAIL}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#c49b66] hover:bg-[#d6ad7a] text-black font-semibold text-xs transition-colors shadow-md active:scale-95"
                >
                  <span>Écrire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ====================================================================
          6. FOOTER
          ==================================================================== */}
      <footer className="border-t border-white/[0.08] bg-[#070709] py-12 text-zinc-400 text-xs">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Official Status */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display text-white text-sm font-semibold tracking-wider uppercase">
              © 2026 Qdf
            </span>
            <span className="text-zinc-400">
              Site officiel de Qdf — Artiste musical
            </span>
          </div>

          {/* Contact in footer */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-zinc-400">Contact professionnel :</span>
            <a 
              href={`mailto:${PROFESSIONAL_EMAIL}`}
              className="text-zinc-300 hover:text-[#c49b66] font-mono transition-colors"
            >
              {PROFESSIONAL_EMAIL}
            </a>
          </div>

          {/* Standalone Deployment Helper Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-zinc-200 border border-white/[0.06] text-xs transition-colors"
              title="Consulter le guide de publication GitHub Pages"
            >
              <Github className="w-3.5 h-3.5 text-[#c49b66]" />
              <span>Guide GitHub Pages</span>
            </button>
          </div>

        </div>
      </footer>

      {/* ====================================================================
          MODAL GUIDE DE PUBLICATION GITHUB PAGES
          ==================================================================== */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#121216] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsExportModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#c49b66]/15 flex items-center justify-center text-[#c49b66]">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Publication sur GitHub Pages
              </h3>
            </div>

            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Pour publier ce site sous votre URL publique <code className="text-[#c49b66] bg-black/40 px-1.5 py-0.5 rounded">https://MON-NOM.github.io/qdf-artiste/</code> destinée à <strong>Spotify for Artists</strong> :
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
              
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <strong className="text-white block mb-1">1. Fichiers prêts à l'emploi</strong>
                Les fichiers complets ont été générés dans votre projet :
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-zinc-400 font-mono text-xs">
                  <li><code>standalone/index.html</code> (Page officielle autonome)</li>
                  <li><code>standalone/style.css</code> (Feuille de styles)</li>
                  <li><code>standalone/script.js</code> (Script avec SPOTIFY_URL & TIKTOK_URL)</li>
                  <li><code>standalone/assets/cover.jpg</code> (Pochette officielle)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <strong className="text-white block mb-1">2. Modifier les liens Spotify et TikTok</strong>
                Ouvrez simplement <code>standalone/script.js</code> (ou <code>src/App.tsx</code>) et renseignez :
                <pre className="mt-2 p-2.5 bg-black/80 text-emerald-400 rounded-lg text-xs overflow-x-auto font-mono">
{`const SPOTIFY_URL = "https://open.spotify.com/artist/...";
const TIKTOK_URL = "https://www.tiktok.com/@...";`}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                <strong className="text-white block mb-1">3. Déploiement en 1 minute sur GitHub</strong>
                <ol className="list-decimal list-inside space-y-1 text-zinc-400 mt-1">
                  <li>Créez un dépôt GitHub nommé <span className="text-white">qdf-artiste</span></li>
                  <li>Déposez les fichiers de <span className="text-white">standalone/</span> à la racine du dépôt</li>
                  <li>Allez dans <em>Settings &gt; Pages</em> sur GitHub</li>
                  <li>Sélectionnez la branche <em>main / root</em> et cliquez sur <em>Save</em></li>
                </ol>
              </div>

            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsExportModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-[#c49b66] hover:bg-[#d6ad7a] text-black font-semibold text-xs transition-colors"
              >
                Compris
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
