"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// ─── PAGE ────────────────────────────────────────────────────
export const ARPage = styled.div`
  width: 100vw;
  height: 100dvh;
  background: #0a0a0a;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.4s ease;
`;

// ─── TOP BAR ─────────────────────────────────────────────────
export const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top));
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
`;

export const BackBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const TopTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

export const TopSubtitle = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

export const TopRight = styled.div`
  width: 40px;
`;

// ─── MODEL VIEWER WRAPPER ────────────────────────────────────
export const ModelViewerWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;

  model-viewer {
    width: 100%;
    height: 100%;
    --poster-color: transparent;
  }
`;

// ─── FALLBACK (no glb yet) ───────────────────────────────────
export const FallbackWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const FallbackImage = styled.div`
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 60px 24px;
  }
`;

export const FallbackOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, #0a0a0a 100%);
  pointer-events: none;
`;

export const FallbackBadge = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -160px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 8px;
  animation: ${pulse} 2s ease infinite;
`;

export const FallbackDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-red);
  animation: ${pulse} 1s ease infinite;
`;

// ─── BOTTOM PANEL ─────────────────────────────────────────────
export const BottomPanel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 24px 20px;
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  animation: ${slideUp} 0.5s ease 0.2s both;
`;

export const ArtworkInfo = styled.div`
  margin-bottom: 20px;
`;

export const ArtworkInfoTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 2px;
`;

export const ArtworkInfoMeta = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
`;

export const ARButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  font-family: var(--font-outfit);
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(232, 69, 69, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ARButtonSecondary = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font-outfit);
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ComingSoonBadge = styled.div`
  text-align: center;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 12px;
  letter-spacing: 1px;
`;

// ─── LOADING ─────────────────────────────────────────────────
export const LoadingWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--color-red);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingText = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
`;

// ─── DESKTOP WARNING ─────────────────────────────────────────
export const DesktopWarning = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  gap: 16px;
  animation: ${slideUp} 0.5s ease both;
`;

export const DesktopIcon = styled.div`
  font-size: 64px;
  margin-bottom: 8px;
`;

export const DesktopTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 4px;
`;

export const DesktopDesc = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.7;
  max-width: 300px;
`;

export const DesktopBackBtn = styled.button`
  margin-top: 8px;
  padding: 14px 32px;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font-outfit);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
