# How to Add Your Wedding Song Audio

## ✅ FIXED: Mobile Audio Playback

The music player now uses **HTML5 audio** instead of YouTube iframe, which fixes:
- ✅ First-click playback on iPhone
- ✅ Works in Instagram/Facebook browsers
- ✅ No double-tap needed
- ✅ Reliable on all mobile devices

## Current Setup

Right now, the website uses a **placeholder audio file** for testing.

To use your actual wedding song, you need to:

---

## Option 1: Download Audio from YouTube (Recommended)

### Step 1: Get the Audio File

Your song: https://www.youtube.com/watch?v=xG5e9j28HEE

Use one of these tools to download as MP3:
- **yt-dlp** (command line, highest quality)
- **Online converter** (easier): https://ytmp3.nu/ or https://y2mate.com/

### Step 2: Add to Project

1. Create a `public` folder in your project root if it doesn't exist:
   ```
   /workspaces/default/code/public/
   ```

2. Create a `music` folder inside:
   ```
   /workspaces/default/code/public/music/
   ```

3. Save your downloaded MP3 as:
   ```
   /workspaces/default/code/public/music/wedding-song.mp3
   ```

### Step 3: Update the Code

In `src/app/App.tsx`, find this line (around line 65):

```tsx
<source
  src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
  type="audio/mpeg"
/>
```

Replace it with:

```tsx
<source
  src="/music/wedding-song.mp3"
  type="audio/mpeg"
/>
```

---

## Option 2: Use a CDN/Cloud Hosting

If you prefer hosting the audio externally:

1. Upload your MP3 to:
   - **Dropbox** → Get public link
   - **Google Drive** → Get public link (must be direct .mp3 link)
   - **AWS S3** / **Cloudinary** (if you have an account)

2. Use the direct link in the code:

```tsx
<source
  src="https://your-cloud-storage.com/wedding-song.mp3"
  type="audio/mpeg"
/>
```

---

## Option 3: Embed from Spotify/SoundCloud

If your song is on Spotify or SoundCloud, you can use their embed players:

### For Spotify:
```tsx
<iframe
  src="https://open.spotify.com/embed/track/TRACK_ID"
  width="0"
  height="0"
  allow="encrypted-media"
/>
```

### For SoundCloud:
```tsx
<iframe
  width="0"
  height="0"
  src="https://w.soundcloud.com/player/?url=TRACK_URL&auto_play=false"
/>
```

---

## Audio File Best Practices

### File Format:
- **MP3** (best compatibility)
- Bitrate: **128-192 kbps** (smaller file, fast loading)

### File Size:
- Keep under **5MB** for fast mobile loading
- Compress if needed using: https://www.freeconvert.com/audio-compressor

### Testing:
After adding your file, test on:
- iPhone Safari
- Android Chrome
- Desktop browsers
- Instagram in-app browser

---

## Current Button Text

The music button now shows:
- **"Enable Audio"** when paused (more cinematic)
- **"Sound On"** when playing

This feels more premium than "Play Music" 🎵

---

## Troubleshooting

**Audio not playing?**
- Make sure the file path is correct
- Check browser console for errors
- Ensure the MP3 file is accessible in the public folder

**Still issues on mobile?**
- Verify the file is actually .mp3 format
- Try compressing the file size
- Test in different browsers

---

## Why This Solution is Better

✅ **Mobile-first**: Works on all phones immediately  
✅ **No YouTube branding**: More luxury feel  
✅ **Faster loading**: Small MP3 vs. full YouTube player  
✅ **No ads**: YouTube embeds can show ads  
✅ **Better UX**: Single tap, instant audio  
✅ **Professional**: Custom audio player, not iframe  

Your luxury wedding website deserves a premium audio experience! 🎶
