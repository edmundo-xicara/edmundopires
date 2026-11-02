import { useEffect, useMemo, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

interface IsoSceneProps {
  labels: { script: string; research: string; automation: string; vibe: string; project: string };
  legend: { av: string; code: string };
  ariaLabel: string;
}

// Isometric projection: grid units (x, y, z) to SVG pixels.
const S = 30;
const C = Math.cos(Math.PI / 6);
const N = Math.sin(Math.PI / 6);
const OX = 250;
const OY = 40;
const P = (x: number, y: number, z: number): [number, number] => [OX + (x - y) * C * S, OY + (x + y) * N * S - z * S];
const pts = (a: [number, number][]) => a.map((p) => p.map((n) => n.toFixed(1)).join(",")).join(" ");

function box(x: number, y: number, w: number, d: number, h: number, z = 0) {
  const top: [number, number][] = [P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)];
  const left: [number, number][] = [P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)];
  const right: [number, number][] = [P(x + w, y, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x + w, y, z)];
  return (
    `<polygon points="${pts(left)}" class="iso-l"/>` +
    `<polygon points="${pts(right)}" class="iso-r"/>` +
    `<polygon points="${pts(top)}" class="iso-t"/>`
  );
}

function chip(cx: number, cy: number, label: string, kind?: "av" | "tc") {
  const w = label.length * 7.4 + 34;
  const dot = kind ? `<circle cx="14" cy="12" r="4" class="dot-${kind}"/>` : "";
  return (
    `<g class="chip${kind ? "" : " main"}" transform="translate(${(cx - w / 2).toFixed(1)},${(cy - 30).toFixed(1)})">` +
    `<rect width="${w}" height="24" rx="12"/>${dot}<text x="${kind ? 24 : 14}" y="16">${label}</text></g>`
  );
}

function buildScene(labels: IsoSceneProps["labels"]) {
  const nodes = [
    { x: 0, y: 3.5, kind: "av" as const, label: labels.script, path: [[1, 4.5], [4.5, 4.5]] },
    { x: 2, y: 7, kind: "av" as const, label: labels.research, path: [[3, 8], [4.5, 8], [4.5, 4.5]] },
    { x: 3.5, y: 0, kind: "tc" as const, label: labels.automation, path: [[4.5, 1], [4.5, 4.5]] },
    { x: 7, y: 2, kind: "tc" as const, label: labels.vibe, path: [[8, 3], [4.5, 3], [4.5, 4.5]] },
  ];

  let svg = "";
  for (let i = -1; i <= 10; i++) {
    const [a, b, c, d] = [P(i, -1, 0), P(i, 10, 0), P(-1, i, 0), P(10, i, 0)];
    svg += `<line class="ghost" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/><line class="ghost" x1="${c[0]}" y1="${c[1]}" x2="${d[0]}" y2="${d[1]}"/>`;
  }
  for (const n of nodes) {
    const d = "M" + n.path.map(([x, y]) => P(x, y, 0).map((v) => v.toFixed(1)).join(",")).join(" L");
    svg += `<path class="wire ${n.kind}" d="${d}"/>`;
    svg += `<circle r="4" class="dot-${n.kind}"><animateMotion dur="2.6s" repeatCount="indefinite" path="${d}"/></circle>`;
  }

  // back to front by x + y, so nearer slabs overlap farther ones
  const items = [
    ...nodes.map((n) => ({
      depth: n.x + n.y,
      html: () => {
        const top = P(n.x + 1, n.y + 1, 1.2);
        return `<g class="slab" style="animation-delay:${-(n.x + n.y) * 0.7}s">${box(n.x, n.y, 2, 2, 0.4)}${box(n.x + 0.5, n.y + 0.5, 1, 1, 0.5, 0.4)}${chip(top[0], top[1], n.label, n.kind)}</g>`;
      },
    })),
    {
      depth: 7,
      html: () => {
        const front = P(5.5, 5.5, 0);
        const g0 = P(4.5, 4.5, 0.5);
        return `<g class="slab" style="animation-delay:-2s">${box(3.5, 3.5, 2, 2, 0.5)}<ellipse class="glow" cx="${g0[0]}" cy="${g0[1]}" rx="34" ry="17"/><g class="core"></g>${chip(front[0], front[1] + 48, labels.project)}</g>`;
      },
    },
  ].sort((a, b) => a.depth - b.depth);

  return `<svg viewBox="40 0 420 330">${svg}${items.map((i) => i.html()).join("")}</svg>`;
}

// The "thinking orb": dots spread evenly over a sphere (golden-angle spiral), one in three yellow.
const ORB_N = 110;
const golden = Math.PI * (3 - Math.sqrt(5));
const ORB = Array.from({ length: ORB_N }, (_, i) => {
  const y = 1 - (i / (ORB_N - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const t = golden * i;
  return { x: Math.cos(t) * r, y, z: Math.sin(t) * r, yellow: i % 3 === 0, phase: (i * 0.37) % (Math.PI * 2) };
});

/** Research and script on one side, automation and vibe coding on the other, wired into one project: a breathing orb of dots. */
export function IsoScene({ labels, legend, ariaLabel }: IsoSceneProps) {
  const host = useRef<HTMLDivElement>(null);
  const html = useMemo(() => buildScene(labels), [labels]);

  useEffect(() => {
    const core = host.current?.querySelector(".core");
    if (!core) return;
    core.innerHTML = ORB.map(() => "<circle/>").join("");
    const dots = [...core.children] as SVGCircleElement[];
    const [ocx, ocy] = P(4.5, 4.5, 1.55);
    const still = prefersReducedMotion();
    let frame = 0;

    const draw = (t: number) => {
      const R = 31 * (1 + Math.sin(t / 520) * 0.09);
      const ay = t / 3200;
      const ax = Math.sin(t / 4100) * 0.5;
      const [cy, sy, cx, sx] = [Math.cos(ay), Math.sin(ay), Math.cos(ax), Math.sin(ax)];
      const proj = ORB.map((q, i) => {
        // spin around the vertical axis, tilt a little, then ripple each dot outward on its own phase
        const x = q.x * cy + q.z * sy;
        let z = -q.x * sy + q.z * cy;
        const y = q.y * cx - z * sx;
        z = q.y * sx + z * cx;
        const wave = 1 + Math.sin(t / 380 + q.phase * 3) * 0.06;
        return { i, x: ocx + x * R * wave, y: ocy + y * R * wave, d: z };
      }).sort((a, b) => a.d - b.d);

      proj.forEach((q, k) => {
        const el = dots[k];
        const near = (q.d + 1) / 2;
        el.setAttribute("cx", q.x.toFixed(1));
        el.setAttribute("cy", q.y.toFixed(1));
        el.setAttribute("r", (1.1 + near * 2.4).toFixed(2));
        el.setAttribute("class", ORB[q.i].yellow ? "dot-av" : "dot-tc");
        el.setAttribute("opacity", (0.3 + near * 0.7).toFixed(2));
      });
      if (!still) frame = requestAnimationFrame(draw);
    };
    draw(0);
    return () => cancelAnimationFrame(frame);
  }, [html]);

  return (
    <div className="iso" role="img" aria-label={ariaLabel}>
      <div ref={host} dangerouslySetInnerHTML={{ __html: html }} />
      <div className="mt-1.5 flex justify-center gap-5 font-mono text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block w-2.5 h-2.5 rounded-full bg-marker" />
          {legend.av}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
          {legend.code}
        </span>
      </div>
    </div>
  );
}
