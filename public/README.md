# Public Assets Folder

## Adding Your Newslyy APK

To make the download link work, you need to add your actual APK file here:

1. **Build your Flutter app:**
   ```bash
   flutter build apk --release
   ```

2. **Locate the APK:**
   - The APK will be generated at: `build/app/outputs/flutter-apk/app-release.apk`

3. **Add to this folder:**
   - Copy the APK file to this `public/` folder
   - Rename it to: `newslyy.apk`

4. **Test the download:**
   - Visit `http://localhost:3000/newslyy.apk` in your browser
   - The file should download automatically

## Other Assets

You can also add:
- `newslyy-og.png` - Open Graph image (1200x630px) for social sharing
- Logo files and app screenshots
- Any other static assets

## Security Note

Make sure your APK is signed and ready for distribution. The download link will be accessible at `/newslyy.apk` once you add the file.