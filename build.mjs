// Okayline Lite: builds a static status page from status.json. Zero dependencies. MIT.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const LABELS = { operational: "Operational", degraded: "Degraded", outage: "Outage", maintenance: "Maintenance" };
const COLORS = { operational: "#1f9d55", degraded: "#d69e2e", outage: "#e53e3e", maintenance: "#3182ce" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export function render(cfg) {
  const comps = (cfg.components || []).map((c) => ({ name: c.name, status: LABELS[c.status] ? c.status : "operational" }));
  const worst = ["outage", "degraded", "maintenance"].find((s) => comps.some((c) => c.status === s)) || "operational";
  const banner = worst === "operational" ? "All systems operational" : `Some systems: ${LABELS[worst].toLowerCase()}`;
  const rows = comps.map((c) => `<li><span>${esc(c.name)}</span><b style="color:${COLORS[c.status]}">${LABELS[c.status]}</b></li>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(cfg.title)}</title><style>body{font:16px system-ui,sans-serif;max-width:640px;margin:40px auto;padding:0 16px;color:#1a202c}
.b{padding:16px;border-radius:8px;color:#fff;background:${COLORS[worst]}}ul{list-style:none;padding:0}li{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #e2e8f0}
footer{margin-top:32px;font-size:13px;color:#718096}</style></head><body><h1>${esc(cfg.title)}</h1>
<div class="b">${banner}</div>${cfg.notice ? `<p>${esc(cfg.notice)}</p>` : ""}<ul>${rows}</ul>
<footer>Updated ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC · Powered by <a href="https://github.com/jhodges3401-code/okayline-lite">Okayline Lite</a></footer></body></html>`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const cfg = JSON.parse(readFileSync("status.json", "utf8"));
  mkdirSync("dist", { recursive: true });
  writeFileSync("dist/index.html", render(cfg));
  console.log("Built dist/index.html");
}
