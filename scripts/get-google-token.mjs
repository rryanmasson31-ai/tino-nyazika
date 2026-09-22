import http from "node:http";
import { google } from "googleapis";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/oauth/callback";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your env first.");
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const url = oauth2.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: ["https://www.googleapis.com/auth/calendar.events"],
});

console.log("\nOpen this URL in your browser and authorize:\n");
console.log(url);
console.log("\nWaiting for callback on http://localhost:3000/oauth/callback …\n");

const server = http.createServer(async (req, res) => {
  if (!req.url?.startsWith("/oauth/callback")) return;
  const code = new URL(req.url, "http://localhost").searchParams.get("code");
  if (!code) {
    res.end("Missing ?code");
    return;
  }
  try {
    const { tokens } = await oauth2.getToken(code);
    res.end("Done — check your terminal for the refresh token.");
    console.log("\n=== COPY THIS INTO .env.local ===\n");
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}\n`);
    server.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    res.end("Error — check terminal.");
    server.close();
  }
});

server.listen(3000);