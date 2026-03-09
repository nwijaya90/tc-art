"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import {
  ARPage,
  TopBar,
  BackBtn,
  TopTitle,
  TopSubtitle,
  TopRight,
  ModelViewerWrapper,
  FallbackWrapper,
  FallbackImage,
  FallbackOverlay,
  FallbackBadge,
  FallbackDot,
  BottomPanel,
  ArtworkInfo,
  ArtworkInfoTitle,
  ArtworkInfoMeta,
  ARButton,
  ARButtonSecondary,
  ComingSoonBadge,
  LoadingWrapper,
  Spinner,
  LoadingText,
  DesktopWarning,
  DesktopIcon,
  DesktopTitle,
  DesktopDesc,
  DesktopBackBtn,
} from "./elements";

// ─── MOCK DATA (nanti dari API) ───────────────────────────────
const ARTWORKS = {
  1: {
    title: "Crimson Reverie",
    artist: "Layla Moreira",
    image: "/images/art-1.avif",
    glbUrl: null,
  },
  2: {
    title: "Azure Depths",
    artist: "Bima Santoso",
    image: "/images/art-2.avif",
    glbUrl: null,
  },
  3: {
    title: "Golden Meridian",
    artist: "Sari Dewi",
    image: "/images/art-3.avif",
    glbUrl: null,
  },
  4: {
    title: "Verdant Whisper",
    artist: "Eko Prasetyo",
    image: "/images/art-4.avif",
    glbUrl: null,
  },
};

// ─── AR PAGE ─────────────────────────────────────────────────
const ARViewPage = () => {
  const router = useRouter();
  const params = useParams();
  const [isMobile, setIsMobile] = useState(null);
  const [modelViewerReady, setModelViewerReady] = useState(false);
  const modelRef = useRef(null);

  const artworkId = params?.id;
  const artwork = ARTWORKS[artworkId] || ARTWORKS[1];

  // ── Detect device ──
  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    setIsMobile(mobile);
  }, []);

  // ── Load model-viewer script (only on mobile) ──
  useEffect(() => {
    if (!isMobile) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js";
    script.onload = () => setModelViewerReady(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [isMobile]);

  const handleActivateAR = () => {
    if (modelRef.current) {
      modelRef.current.activateAR();
    }
  };

  // ── Loading state ──
  if (isMobile === null) {
    return (
      <ARPage>
        <LoadingWrapper>
          <Spinner />
          <LoadingText>Loading AR experience...</LoadingText>
        </LoadingWrapper>
      </ARPage>
    );
  }

  // ── Desktop: show warning ──
  if (!isMobile) {
    return (
      <ARPage>
        <TopBar>
          <BackBtn onClick={() => router.back()}>←</BackBtn>
          <div>
            <TopTitle>View in AR</TopTitle>
          </div>
          <TopRight />
        </TopBar>
        <DesktopWarning>
          <DesktopIcon>📱</DesktopIcon>
          <DesktopTitle>Open on your phone</DesktopTitle>
          <DesktopDesc>
            AR experience is only available on mobile devices. Scan the QR code
            on the artwork page or open this link on your phone.
          </DesktopDesc>
          <DesktopBackBtn onClick={() => router.back()}>
            ← Go Back
          </DesktopBackBtn>
        </DesktopWarning>
      </ARPage>
    );
  }

  // ── Mobile: AR view ──
  return (
    <ARPage>
      {/* Top bar */}
      <TopBar>
        <BackBtn onClick={() => router.back()}>←</BackBtn>
        <div>
          <TopTitle>{artwork.title}</TopTitle>
          <TopSubtitle>{artwork.artist}</TopSubtitle>
        </div>
        <TopRight />
      </TopBar>

      {/* Model viewer or fallback */}
      {artwork.glbUrl && modelViewerReady ? (
        // ── Has GLB: show 3D model ──
        <ModelViewerWrapper>
          <model-viewer
            ref={modelRef}
            src={artwork.glbUrl}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            auto-rotate
            shadow-intensity="1"
            exposure="1"
            style={{ width: "100%", height: "100%" }}
          />
        </ModelViewerWrapper>
      ) : (
        // ── No GLB yet: show 2D preview ──
        <FallbackWrapper>
          <FallbackImage>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={artwork.image} alt={artwork.title} />
          </FallbackImage>
          <FallbackOverlay />
          <FallbackBadge>
            <FallbackDot />
            Preview Mode
          </FallbackBadge>
        </FallbackWrapper>
      )}

      {/* Bottom panel */}
      <BottomPanel>
        <ArtworkInfo>
          <ArtworkInfoTitle>{artwork.title}</ArtworkInfoTitle>
          <ArtworkInfoMeta>{artwork.artist}</ArtworkInfoMeta>
        </ArtworkInfo>

        {artwork.glbUrl ? (
          // ── Has GLB: show AR button ──
          <ARButton onClick={handleActivateAR}>
            <span>📷</span> View in Your Room
          </ARButton>
        ) : (
          // ── No GLB: coming soon ──
          <>
            <ARButton disabled>
              <span>📷</span> View in Your Room
            </ARButton>
            <ComingSoonBadge>✦ AR COMING SOON</ComingSoonBadge>
          </>
        )}

        <ARButtonSecondary onClick={() => router.back()}>
          ← Back to Artwork
        </ARButtonSecondary>
      </BottomPanel>
    </ARPage>
  );
};

export default ARViewPage;
