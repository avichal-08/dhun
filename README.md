# Dhun

**Dhun** is a sleek, glassmorphic music player built to seamlessly stream 2000s Bollywood classics and top-tier Desi Hip Hop (DHH). Powered by the YouTube IFrame API, it provides a native audio player experience directly in the browser without the heavy lifting of hosting audio files.

---

## Deployment

**Dhun is proudly deployed on [DPLOY](https://dploy.avichal.me/)** — my own custom-built deployment platform.

---

## Features

- **Dual-Genre Playlists:** Instantly switch between Bollywood and DHH tracks using a smooth, iPhone-style segmented control tab.
- **Dynamic UI & Backgrounds:** The background poster and mobile artwork automatically transition to match the vibe of your selected genre.
- **Glassmorphic Design:** A highly responsive, frosted-glass player dock and interactive playlist drawer that looks stunning on desktop, tablet, and mobile.
- **Advanced Playback Controls:** Fully custom progress slider, volume controls, mute toggle, shuffle, and loop functionality.
- **Lock Screen Support:** Integrated with the **Media Session API** so you can play, pause, and skip tracks directly from your phone's lock screen or notification center.
- **Real-Time Search:** Instantly filter through playlists by song title or artist name.

---

## Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Custom Vanilla CSS Variables
- **Audio Engine:** YouTube IFrame Player API
- **Package Manager:** Bun

---

## Getting Started

To run Dhun locally on your machine, follow these steps.

### 1. Clone the repository

```bash
git clone https://github.com/avichal-08/dhun.git
cd dhun
```

### 2. Install dependencies

This project uses **Bun**, but you can also use npm, pnpm, or yarn.

```bash
bun install
```

### 3. Start the development server

```bash
bun run dev
```

### 4. Open the app

Open [http://localhost:3000](http://localhost:3000) in your browser to start listening.

---

## Mobile Background Play Note

Because Dhun relies on the YouTube API, iOS Safari and Android Chrome may aggressively pause playback when the screen turns off.

**Workaround:** Request the **Desktop Site** in your mobile browser to bypass strict mobile background-play restrictions and keep the music flowing.

---
