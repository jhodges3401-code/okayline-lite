# Okayline Lite: a free status page on GitHub Pages

A free, open-source status page you host yourself. Edit one JSON file, push, and GitHub Pages publishes it. No server, no monthly bill, no dependencies.

**Live demo of the full version:** https://jhodges3401-code.github.io/okayline-demo/

## Quick start (5 minutes)
1. Click **Use this template** (or fork).
2. Go to **Settings → Pages → Source: GitHub Actions**.
3. Edit `status.json`. Each component's status can be `operational`, `degraded`, `outage` or `maintenance`. Add an optional `notice`.
4. Commit. Your page goes live at `https://YOU.github.io/REPO/`.

Build locally: `node build.mjs` (Node 18+).

## Lite vs Okayline Pro
| | Lite (free, MIT) | [Okayline Pro ($99 one-time)](https://jhodges6.gumroad.com/l/bcmhvk) |
|---|---|---|
| Static status page with manual statuses | ✅ | ✅ |
| Automatic uptime checks every ~5 min | – | ✅ |
| 90-day uptime history bars | – | ✅ |
| Incident timeline written in Markdown, plus scheduled maintenance | – | ✅ |
| RSS feed for subscribers | – | ✅ |
| Admin helper page and custom-domain guide | – | ✅ |
| Email support and updates | – | ✅ |

## About
Built from scratch by Orvian Market. An independent alternative to hosted status-page services; not affiliated with Atlassian Statuspage or any other vendor. All trademarks belong to their owners.

License: MIT (Lite only). Okayline Pro is sold separately under its own license.
