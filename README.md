<p align="center"><a href="https://orvianmarketplace.com/okayline-demo/"><img src="docs/banner.svg" alt="Okayline Lite: a free status page on GitHub Pages" width="100%"></a></p>

<p align="center">
<a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-0f766e"></a>
<a href="https://orvianmarketplace.com/okayline-demo/"><img alt="Live demo" src="https://img.shields.io/badge/live%20demo-online-14b8a6"></a>
<img alt="Price" src="https://img.shields.io/badge/Lite-free%20%C2%B7%20Pro%20%2499%20once-0f172a">
<a href="https://github.com/jhodges3401-code/okayline-lite/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/jhodges3401-code/okayline-lite?style=flat&color=0f766e"></a>
</p>

<p align="center"><b><a href="https://orvianmarketplace.com/okayline-demo/">Live demo</a></b> · <a href="#quick-start">Quick start</a> · <a href="#lite-vs-pro">Lite vs Pro</a> · ⭐ <b>Star this repo</b> if it saves you a subscription</p>

# Okayline Lite: a free status page on GitHub Pages

> **Need more than Lite?** [Okayline Pro](https://jhodges6.gumroad.com/l/bcmhvk) adds the full feature set below for **$99 once**. No subscription, 14-day refund. [See the live demo →](https://orvianmarketplace.com/okayline-demo/)

A free, open-source status page you host yourself. Edit one JSON file, push, and GitHub Pages publishes it. No server, no monthly bill, no dependencies.

**Live demo of the full version:** https://orvianmarketplace.com/okayline-demo/

## Quick start (5 minutes)
1. Click **Use this template** (or fork).
2. Go to **Settings → Pages → Source: GitHub Actions**.
3. Edit `status.json`. Each component's status can be `operational`, `degraded`, `outage` or `maintenance`. Add an optional `notice`.
4. Commit. Your page goes live at `https://YOU.github.io/REPO/`.

Build locally: `node build.mjs` (Node 18+).


## See it in action
<p align="center"><a href="https://orvianmarketplace.com/okayline-demo/"><img src="docs/demo.svg" alt="Animated tour of the live demo" width="100%"></a></p>

## Lite vs Pro<a id="lite-vs-pro"></a>
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
