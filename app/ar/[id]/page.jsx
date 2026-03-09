"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";

// ─── MOCK DATA ────────────────────────────────────────────────
const ARTWORKS = {
  1: {
    title: "Crimson Reverie",
    artist: "Layla Moreira",
    image: "/images/art-1.avif",
  },
  2: {
    title: "Azure Depths",
    artist: "Bima Santoso",
    image: "/images/art-2.avif",
  },
  3: {
    title: "Golden Meridian",
    artist: "Sari Dewi",
    image: "/images/art-3.avif",
  },
  4: {
    title: "Verdant Whisper",
    artist: "Eko Prasetyo",
    image: "/images/art-4.avif",
  },
};

const ARViewPage = () => {
  const router = useRouter();
  const params = useParams();
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const artwork = ARTWORKS[params?.id] || ARTWORKS[1];

  const [pos, setPos] = useState({ x: 80, y: 160 });
  const [size, setSize] = useState({ w: 220, h: 220 });
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState(false);

  const dragRef = useRef(null);
  const resizeRef = useRef(null);

  // ── Start camera ──
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
          audio: false,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setCameraReady(true);
        }
      } catch (err) {
        console.error("Camera error:", err);
        setCameraError(true);
      }
    };
    startCamera();
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  // ── Drag ──
  const onDragStart = useCallback(
    (e) => {
      e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      dragRef.current = {
        startX: clientX,
        startY: clientY,
        startPosX: pos.x,
        startPosY: pos.y,
      };

      const onMove = (ev) => {
        if (!dragRef.current) return;
        const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
        const cy = ev.touches ? ev.touches[0].clientY : ev.clientY;
        setPos({
          x: dragRef.current.startPosX + (cx - dragRef.current.startX),
          y: dragRef.current.startPosY + (cy - dragRef.current.startY),
        });
      };
      const onEnd = () => {
        dragRef.current = null;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("mouseup", onEnd);
        window.removeEventListener("touchend", onEnd);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("mouseup", onEnd);
      window.addEventListener("touchend", onEnd);
    },
    [pos],
  );

  // ── Resize ──
  const onResizeStart = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      resizeRef.current = {
        startX: clientX,
        startY: clientY,
        startW: size.w,
        startH: size.h,
      };

      const onMove = (ev) => {
        if (!resizeRef.current) return;
        ev.preventDefault();
        const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
        const cy = ev.touches ? ev.touches[0].clientY : ev.clientY;
        const delta =
          (cx - resizeRef.current.startX + (cy - resizeRef.current.startY)) / 2;
        setSize({
          w: Math.max(100, Math.min(400, resizeRef.current.startW + delta)),
          h: Math.max(100, Math.min(400, resizeRef.current.startH + delta)),
        });
      };
      const onEnd = () => {
        resizeRef.current = null;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("mouseup", onEnd);
        window.removeEventListener("touchend", onEnd);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("mouseup", onEnd);
      window.addEventListener("touchend", onEnd);
    },
    [size],
  );

  // ── Camera error ──
  if (cameraError) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100dvh",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
          textAlign: "center",
          gap: 16,
        }}
      >
        <div style={{ fontSize: 56 }}>📷</div>
        <div
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 22,
            fontWeight: 800,
            color: "#fff",
          }}
        >
          Camera access denied
        </div>
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.7,
          }}
        >
          Please allow camera access in your browser settings and try again.
        </div>
        <button
          onClick={() => router.back()}
          style={{
            marginTop: 8,
            padding: "14px 32px",
            borderRadius: 50,
            border: "1.5px solid rgba(255,255,255,0.2)",
            background: "transparent",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "var(--font-outfit)",
            cursor: "pointer",
          }}
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        background: "#000",
        position: "relative",
      }}
    >
      {/* Camera feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Loading */}
      {!cameraReady && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.1)",
              borderTopColor: "#E84545",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            Starting camera...
          </div>
        </div>
      )}

      {/* Draggable artwork */}
      {cameraReady && (
        <div
          onMouseDown={onDragStart}
          onTouchStart={onDragStart}
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: size.w,
            height: size.h,
            cursor: "grab",
            userSelect: "none",
            touchAction: "none",
            zIndex: 10,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artwork.image}
            alt={artwork.title}
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
              display: "block",
              pointerEvents: "none",
              position: "relative",
              zIndex: 2,
            }}
          />
          {/* Rustic wood frame */}
          <div
            style={{
              position: "absolute",
              inset: -18,
              borderRadius: 6,
              pointerEvents: "none",
              background:
                "linear-gradient(135deg, #8B5E3C 0%, #6B3F1F 20%, #A06B3B 35%, #7A4A22 50%, #9B6235 65%, #6B3F1F 80%, #8B5E3C 100%)",
              boxShadow:
                "0 12px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3)",
              zIndex: 1,
            }}
          >
            {/* Wood grain lines */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 6,
                opacity: 0.25,
                background: `repeating-linear-gradient(
                92deg,
                transparent 0px, transparent 3px,
                rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px,
                transparent 4px, transparent 9px,
                rgba(255,255,255,0.08) 9px, rgba(255,255,255,0.08) 10px
              )`,
              }}
            />
            {/* Inner bevel shadow */}
            <div
              style={{
                position: "absolute",
                inset: 14,
                borderRadius: 2,
                boxShadow:
                  "inset 0 2px 6px rgba(0,0,0,0.5), inset 0 -1px 3px rgba(255,255,255,0.1)",
                pointerEvents: "none",
              }}
            />
            {/* Corner accents */}
            {[
              { top: 4, left: 4 },
              { top: 4, right: 4 },
              { bottom: 4, left: 4 },
              { bottom: 4, right: 4 },
            ].map((style, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  ...style,
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: "rgba(0,0,0,0.25)",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
          {/* Resize handle */}
          <div
            onMouseDown={onResizeStart}
            onTouchStart={onResizeStart}
            style={{
              position: "absolute",
              bottom: -12,
              right: -12,
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
              cursor: "se-resize",
              touchAction: "none",
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: "#333",
            }}
          >
            ⤡
          </div>
        </div>
      )}

      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          paddingTop: "calc(16px + env(safe-area-inset-top))",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)",
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
          }}
        >
          ←
        </button>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 15,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {artwork.title}
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            {artwork.artist}
          </div>
        </div>
        <div style={{ width: 40 }} />
      </div>

      {/* Bottom hint */}
      {cameraReady && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            padding: "20px",
            paddingBottom: "calc(20px + env(safe-area-inset-bottom))",
            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 50,
              padding: "8px 20px",
              fontSize: 12,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            ✋ Drag to move · ⤡ Corner to resize
          </div>
        </div>
      )}
    </div>
  );
};

export default ARViewPage;
