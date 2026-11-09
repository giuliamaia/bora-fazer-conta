// Gera intro.mp4 (1920x1080, 30fps) a partir do index.html: captura quadro a quadro + áudio sintetizado.
import puppeteer from "puppeteer-core";
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const FPS = 30, DUR = 9;
const vertical = process.argv.includes("vertical");   // npm run render -- vertical → 1080x1920 (TikTok/Reels)
const out = vertical ? "intro-vertical.mp4" : "intro.mp4";
const frames = resolve(here, ".frames");
rmSync(frames, { recursive: true, force: true });
mkdirSync(frames);

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME ?? "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport(vertical ? { width: 1080, height: 1920 } : { width: 1920, height: 1080 });
await page.goto(`file://${resolve(here, "index.html")}?capture=1${vertical ? "&vertical=1" : ""}`, { waitUntil: "networkidle0" });
await page.evaluate(() => window.ready);

for (let i = 0; i < FPS * DUR; i++) {
  await page.evaluate((t) => window.seek(t), i / FPS);
  await page.screenshot({ path: `${frames}/${String(i).padStart(5, "0")}.jpg`, type: "jpeg", quality: 93 });
}
const wav = await page.evaluate(() => window.renderAudio());
writeFileSync(resolve(here, ".audio.wav"), Buffer.from(wav, "base64"));
await browser.close();

execFileSync("ffmpeg", [
  "-y", "-framerate", String(FPS), "-i", `${frames}/%05d.jpg`, "-i", resolve(here, ".audio.wav"),
  "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "17", "-c:a", "aac", "-b:a", "192k",
  "-t", String(DUR), "-movflags", "+faststart", resolve(here, out),
], { stdio: "inherit" });
rmSync(frames, { recursive: true, force: true });
console.log(`pronto: intro/${out}`);
