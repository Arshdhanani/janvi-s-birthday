# Janviii's Birthday Website

A static, mobile-friendly birthday experience made with HTML, CSS, and vanilla JavaScript. No account, build tools, or paid services are required.

## Project files
- `index.html` — page structure
- `styles.css` — appearance and animations
- `script.js` — scene changes, photo gallery, music controls
- `content.js` — edit names, wording, photo filenames/captions, and song filename
- `assets/photos/` — add your real photos here
- `assets/audio/` — add your chosen MP3 here

## Edit the words
Open `content.js` in Notepad. Change the text inside quotation marks. Keep commas, quotation marks, and brackets. Names are currently set to Janviii and Arshit. Unknown anniversary, relationship duration, and memories are intentionally not invented.

## Add photos
Copy real photos of you and Janviii into `assets/photos/`. Use these exact names:
`couple-01.jpg`, `couple-02.jpg`, `couple-03.jpg`, `couple-04.jpg`, `couple-05.jpg`, `couple-06.jpg`, `couple-07.jpg`, `couple-08.jpg`.

In `content.js`, edit the `photos.items` list to change a filename or caption. The path must start with `assets/photos/`. Keep the filename's letter case exactly the same. Missing files show a placeholder rather than breaking the site. To remove a photo, delete its entire `{ ... }` entry and its comma as appropriate.

## Add music later
Copy your chosen MP3 into `assets/audio/` and name it `your-song.mp3`, or change `song.file` in `content.js` to match the filename. Edit `song.displayName` to show your chosen title. Playback only begins after the visitor presses Play; no autoplay is used. If the MP3 is missing, the placeholder appears and the rest of the site still works.

## Preview on Windows
1. Extract the ZIP completely.
2. Open the `romantic-birthday` folder (or the extracted project folder).
3. Double-click `index.html` to open it in Chrome or Edge.
4. After changing any text or media, save the file and refresh the browser.

## Test checklist
- Open Your Surprise moves from the envelope to the letter.
- Continue Our Story moves to the gallery.
- Continue to Our Song moves to the music scene.
- One Last Surprise opens the birthday reveal.
- Relive Our Story returns to the envelope and resets the envelope animation.
- Test with no photos and no MP3; placeholders should remain visible.
- Test on a phone-sized browser window and use Tab/Enter to check keyboard controls.

## Publish free with Netlify
1. Visit https://app.netlify.com/drop in your browser.
2. Sign in or create a free Netlify account if prompted.
3. Drag the **whole extracted project folder's contents** (the folder containing `index.html`, `content.js`, `script.js`, `styles.css`, and `assets/`) onto the page. Do not upload only `index.html`.
4. Wait for Netlify to publish and provide a website URL.
5. Open that URL on your phone and share it. Keep the folder private if you do not want the photos publicly accessible; anyone with the public site link may be able to view its contents.

Important: do not upload private photos unless you are comfortable with anyone who has the public link potentially seeing them.


Updated behavior: clicking “Open Your Surprise” starts `assets/song.mp3`; the letter uses a handwritten font; after the memories page, the site goes directly to the final birthday reveal (the song page has been removed). The handwritten Google Font loads when internet access is available and falls back to system handwriting fonts offline.
