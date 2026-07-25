import React, { useRef, useEffect, useState, useCallback } from "react";
import Img from "../assets/pic.png";

const IMG_SRC = Img;

const WHITE = { r: 245, g: 245, b: 240 };
const PINK = { r: 248, g: 168, b: 194 };

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function mixColor(t) {
  const r = Math.round(lerp(WHITE.r, PINK.r, t));
  const g = Math.round(lerp(WHITE.g, PINK.g, t));
  const b = Math.round(lerp(WHITE.b, PINK.b, t));
  return `${r},${g},${b}`;
}

export default function Laptop() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(null);
  const dimsRef = useRef({ w: 720, h: 540 });

  const [status, setStatus] = useState("loading");

  const buildParticles = useCallback((img) => {
    const sampleW = 190;
    const sampleH = Math.max(
      1,
      Math.round((sampleW * img.height) / img.width)
    );

    const off = document.createElement("canvas");
    off.width = sampleW;
    off.height = sampleH;

    const octx = off.getContext("2d");
    octx.drawImage(img, 0, 0, sampleW, sampleH);

    const data = octx.getImageData(0, 0, sampleW, sampleH).data;

    const alphaAt = (x, y) => {
      const xx = Math.min(sampleW - 1, Math.max(0, x));
      const yy = Math.min(sampleH - 1, Math.max(0, y));
      const i = (yy * sampleW + xx) * 4;
      return data[i + 3] / 255;
    };

    const lumAt = (x, y) => {
      const xx = Math.min(sampleW - 1, Math.max(0, x));
      const yy = Math.min(sampleH - 1, Math.max(0, y));
      const i = (yy * sampleW + xx) * 4;

      if (data[i + 3] < 10) return 1;

      return (
        (0.299 * data[i] +
          0.587 * data[i + 1] +
          0.114 * data[i + 2]) /
        255
      );
    };

    const scale = 4;
    const w = sampleW * scale;
    const h = sampleH * scale;

    dimsRef.current = { w, h };

    const candidates = [];
    const stride = 2;

    for (let y = 0; y < sampleH; y += stride) {
      for (let x = 0; x < sampleW; x += stride) {
        if (alphaAt(x, y) < 0.4) continue;

        const lum = lumAt(x, y);

        const gx = lumAt(x + 1, y) - lumAt(x - 1, y);
        const gy = lumAt(x, y + 1) - lumAt(x, y - 1);

        const edge = Math.min(
          1,
          Math.sqrt(gx * gx + gy * gy) * 3.2
        );

        const dark = 1 - lum;

        const prob = Math.min(
          0.95,
          0.4 + dark * 0.4 + edge * 0.35
        );

        if (Math.random() < prob) {
          candidates.push({ x, y, dark, edge });
        }
      }
    }

    const MAX_PARTICLES = 4200;

    candidates.sort(
      (a, b) => b.dark + b.edge - (a.dark + a.edge)
    );

    const kept =
      candidates.length > MAX_PARTICLES
        ? candidates
            .slice(0, MAX_PARTICLES * 1.4)
            .sort(() => Math.random() - 0.5)
            .slice(0, MAX_PARTICLES)
        : candidates;

    particlesRef.current = kept.map((c) => {
      const jitter = scale * 0.5;

      const homeX =
        c.x * scale +
        (Math.random() - 0.5) * jitter * 2 +
        scale / 2;

      const homeY =
        c.y * scale +
        (Math.random() - 0.5) * jitter * 2 +
        scale / 2;

      const emphasis = c.dark * 0.6 + c.edge * 0.4;

      return {
        homeX,
        homeY,
        x: homeX,
        y: homeY,
        vx: 0,
        vy: 0,

        size:
          0.9 +
          emphasis * 2 +
          Math.random() * 0.6,

        alpha:
          0.45 +
          emphasis * 0.55,

        phase:
          Math.random() * Math.PI * 2,

        speed:
          0.6 +
          Math.random() * 0.8,

        colorMix: 0,
      };
    });

    setStatus("ready");
  }, []);

  useEffect(() => {
    const img = new Image();

    img.onload = () => buildParticles(img);
    img.onerror = () => setStatus("error");

    img.src = IMG_SRC;
  }, [buildParticles]);

  useEffect(() => {
    if (status !== "ready") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const { w, h } = dimsRef.current;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    ctx.scale(dpr, dpr);

    const REPEL_RADIUS = 70;
    const REPEL_STRENGTH = 620;
    const SPRING = 0.06;
    const FRICTION = 0.86;

    let t = 0;

    const animate = () => {
      t++;

      const { active, x: mx, y: my } = mouseRef.current;

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, w, h);

      for (const p of particlesRef.current) {
        let targetMix = 0;

        if (active) {
          const dx = p.x - mx;
          const dy = p.y - my;

          const dist =
            Math.sqrt(dx * dx + dy * dy) || 0.001;

          if (dist < REPEL_RADIUS) {
            const force =
              (1 - dist / REPEL_RADIUS) *
              REPEL_STRENGTH;

            p.vx +=
              (dx / dist) * force * 0.0016;

            p.vy +=
              (dy / dist) * force * 0.0016;

            targetMix =
              1 - dist / REPEL_RADIUS;
          }
        }

        p.colorMix = lerp(
          p.colorMix,
          targetMix,
          0.12
        );

        const bobX =
          Math.sin(
            t * 0.02 * p.speed + p.phase
          ) * 0.25;

        const bobY =
          Math.cos(
            t * 0.021 * p.speed + p.phase
          ) * 0.25;

        p.vx =
          (p.vx + (p.homeX - p.x) * SPRING) *
          FRICTION;

        p.vy =
          (p.vy + (p.homeY - p.y) * SPRING) *
          FRICTION;

        p.x += p.vx + bobX;
        p.y += p.vy + bobY;

        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = `rgb(${mixColor(
          p.colorMix
        )})`;

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      rafRef.current =
        requestAnimationFrame(animate);
    };

    rafRef.current =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(rafRef.current);
  }, [status]);

  const toLocal = (clientX, clientY) => {
    const rect =
      canvasRef.current.getBoundingClientRect();

    const { w, h } = dimsRef.current;

    return {
      x: ((clientX - rect.left) / rect.width) * w,
      y: ((clientY - rect.top) / rect.height) * h,
    };
  };

  return (
    <div
      ref={wrapRef}
      className="min-h-full w-full bg-black flex items-center justify-center"
    >
      {status !== "ready" && (
        <div className="aspect-[4/3] flex w-full items-center justify-center">
          <p className="text-sm tracking-wide text-white/40">
            {status === "error"
              ? "Couldn't load image"
              : "Building portrait..."}
          </p>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className={`block w-full h-auto cursor-none ${
          status === "ready"
            ? ""
            : "hidden"
        }`}
        style={{
          aspectRatio: `${dimsRef.current.w}/${dimsRef.current.h}`,
        }}
        onMouseMove={(e) => {
          const pos = toLocal(e.clientX, e.clientY);
          mouseRef.current = {
            ...pos,
            active: true,
          };
        }}
        onMouseLeave={() =>
          (mouseRef.current = {
            x: -9999,
            y: -9999,
            active: false,
          })
        }
        onTouchMove={(e) => {
          if (!e.touches.length) return;

          const t = e.touches[0];
          const pos = toLocal(
            t.clientX,
            t.clientY
          );

          mouseRef.current = {
            ...pos,
            active: true,
          };
        }}
        onTouchEnd={() =>
          (mouseRef.current = {
            x: -9999,
            y: -9999,
            active: false,
          })
        }
      />
    </div>
  );
}