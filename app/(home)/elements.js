"use client";

import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(3deg); }
`;

const floatAlt = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(-2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// ─── PAGE WRAPPER ───────────────────────────────────────────
export const PageWrapper = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
`;

// ─── HERO ───────────────────────────────────────────────────
export const HeroSection = styled.section`
  padding: 80px 5vw 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 48px 5vw 40px;
  }
`;

export const HeroBgGlow = styled.div`
  position: absolute;
  top: -40px;
  right: 10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ color }) => color}18 0%,
    transparent 70%
  );
  transition: background 1.5s ease;
  pointer-events: none;
`;

export const HeroContent = styled.div`
  animation: ${slideIn} 0.7s ease both;
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #111;
  color: #fff;
  border-radius: 50px;
  padding: 6px 16px 6px 8px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 28px;
  letter-spacing: 0.5px;
`;

export const HeroBadgeDot = styled.span`
  background: var(--color-red);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-playfair);
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-dark);
  margin-bottom: 24px;
`;

export const HeroTitleAccent = styled.span`
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroDesc = styled.p`
  font-size: 17px;
  color: #666;
  line-height: 1.7;
  max-width: 440px;
  margin-bottom: 40px;
`;

export const HeroCTA = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.button`
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  border: none;
  border-radius: 50px;
  padding: 16px 36px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 8px 30px rgba(232, 69, 69, 0.35);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(232, 69, 69, 0.45);
  }
`;

export const BtnOutline = styled.button`
  background: transparent;
  border: 2px solid var(--color-dark);
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 15px;
  font-weight: 700;
  color: var(--color-dark);
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-dark);
    color: #fff;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 48px;
`;

export const StatItem = styled.div``;

export const StatNumber = styled.div`
  font-family: var(--font-playfair);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-dark);
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #999;
  font-weight: 500;
  margin-top: 2px;
`;

// ─── HERO VISUAL ────────────────────────────────────────────
export const HeroVisual = styled.div`
  position: relative;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeroCardMain = styled.div`
  width: 280px;
  height: 340px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  animation: ${float} 5s ease-in-out infinite;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;

export const HeroCardMainImg = styled.div`
  height: 240px;
  background: ${({ color }) =>
    `linear-gradient(135deg, ${color}30, ${color}10)`};
  transition: background 1.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 80px;
`;

export const HeroCardBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--color-red);
  color: #fff;
  border-radius: 50px;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  letter-spacing: 1px;
`;

export const HeroCardInfo = styled.div`
  padding: 18px;
`;

export const HeroCardTitle = styled.div`
  font-family: var(--font-playfair);
  font-weight: 700;
  font-size: 15px;
  color: var(--color-dark);
`;

export const HeroCardSub = styled.div`
  font-size: 11px;
  color: #999;
  margin-top: 2px;
`;

export const HeroCardPrice = styled.div`
  font-weight: 800;
  font-size: 20px;
  color: var(--color-red);
  margin-top: 8px;
`;

export const HeroCardSecondary = styled.div`
  width: 180px;
  height: 220px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  position: absolute;
  bottom: 40px;
  right: 20px;
  animation: ${floatAlt} 6s ease-in-out 1s infinite;
  overflow: hidden;
  z-index: 1;
`;

export const HeroCardSecImg = styled.div`
  height: 150px;
  background: linear-gradient(135deg, #2176ae20, #7b2d8b20);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

export const HeroCardSecInfo = styled.div`
  padding: 12px;
`;

export const HeroCardSecTitle = styled.div`
  font-family: var(--font-playfair);
  font-weight: 700;
  font-size: 12px;
  color: var(--color-dark);
`;

export const HeroCardSecPrice = styled.div`
  font-weight: 800;
  font-size: 15px;
  color: var(--color-blue);
  margin-top: 4px;
`;

export const FloatingDot = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.15;
  animation: ${float} ${({ duration }) => duration}s ease-in-out
    ${({ delay }) => delay}s infinite;
  top: ${({ top }) => (top !== undefined ? `${top}px` : "auto")};
  left: ${({ left }) => (left !== undefined ? `${left}px` : "auto")};
  right: ${({ right }) => (right !== undefined ? `${right}px` : "auto")};
  bottom: ${({ bottom }) => (bottom !== undefined ? `${bottom}px` : "auto")};
`;

// ─── SEARCH + FILTER ────────────────────────────────────────
export const FilterSection = styled.section`
  padding: 0 5vw 50px;
  max-width: 1300px;
  margin: 0 auto;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 260px;
  position: relative;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 18px 14px 46px;
  border: 2px solid #eee;
  border-radius: 50px;
  font-size: 14px;
  font-family: var(--font-outfit);
  outline: none;
  background: #fff;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: var(--color-red);
  }
`;

export const CategoryBtn = styled.button`
  padding: 12px 22px;
  border-radius: 50px;
  border: ${({ $active }) => ($active ? "none" : "1.5px solid #ddd")};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, var(--color-red), var(--color-orange))"
      : "#fff"};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-size: 13px;
  font-weight: 600;
  font-family: var(--font-outfit);
  box-shadow: ${({ $active }) =>
    $active ? "0 4px 15px rgba(232,69,69,0.3)" : "none"};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

// ─── ART GRID ───────────────────────────────────────────────
export const GallerySection = styled.section`
  padding: 0 5vw 80px;
  max-width: 1300px;
  margin: 0 auto;
`;

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const GalleryTitle = styled.h2`
  font-family: var(--font-playfair);
  font-size: 32px;
  font-weight: 800;
  color: var(--color-dark);
`;

export const GalleryCount = styled.p`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const SortSelect = styled.select`
  padding: 10px 20px;
  border-radius: 50px;
  border: 1.5px solid #eee;
  font-size: 13px;
  font-family: var(--font-outfit);
  background: #fff;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export const ArtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
`;

// ─── ART CARD ───────────────────────────────────────────────
export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ $hovered, color }) =>
    $hovered ? `0 20px 60px ${color}40` : "0 4px 20px rgba(0,0,0,0.08)"};
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform: ${({ $hovered }) =>
    $hovered ? "translateY(-8px)" : "translateY(0)"};
  cursor: pointer;
  animation: ${fadeUp} 0.5s ease ${({ $index }) => $index * 0.1}s both;
`;

export const CardImage = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
  background: ${({ color }) => `${color}15`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImageEmoji = styled.div`
  font-size: 48px;
  opacity: 0.25;
  position: relative;
  z-index: 1;
`;

export const CardAccentBlur = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.5;
  filter: blur(8px);
`;

export const CardTag = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${({ tag }) =>
    tag === "Sale"
      ? "var(--color-red)"
      : tag === "Hot"
        ? "#FF6B6B"
        : tag === "Featured"
          ? "var(--color-blue)"
          : "#111"};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 5px 12px;
  border-radius: 20px;
  z-index: 2;
`;

export const WishlistBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ $liked, color }) =>
    $liked ? color : "rgba(255,255,255,0.9)"};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ color }) => `${color}CC`};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  z-index: 3;
`;

export const OverlayBtn = styled.button`
  background: #fff;
  color: ${({ color }) => color};
  border: none;
  border-radius: 50px;
  padding: 12px 28px;
  font-family: var(--font-outfit);
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
`;

export const CardBody = styled.div`
  padding: 20px 22px 22px;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 4px;
`;

export const CardArtist = styled.div`
  font-size: 12px;
  color: #888;
`;

export const CardSize = styled.div`
  font-size: 11px;
  color: #bbb;
  margin-top: 2px;
`;

export const CardPrice = styled.div`
  font-weight: 800;
  font-size: 18px;
  color: ${({ color }) => color};
`;

export const CardAddBtn = styled.button`
  margin-top: 16px;
  width: 100%;
  background: ${({ color }) => `${color}15`};
  border: 1.5px solid ${({ color }) => `${color}40`};
  border-radius: 50px;
  padding: 10px 0;
  color: ${({ color }) => color};
  font-family: var(--font-outfit);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ color }) => color};
    color: #fff;
  }
`;

// ─── ARTISTS SECTION ────────────────────────────────────────
export const ArtistsSection = styled.section`
  background: #111;
  padding: 80px 5vw;
  position: relative;
  overflow: hidden;
`;

export const ArtistsBgGlow = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232, 69, 69, 0.12), transparent 70%);
  pointer-events: none;
`;

export const ArtistsInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
`;

export const SectionEyebrow = styled.div`
  font-size: 12px;
  letter-spacing: 3px;
  color: var(--color-red);
  font-weight: 700;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-playfair);
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
`;

export const SectionLink = styled.a`
  color: var(--color-orange);
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid var(--color-orange);
  padding-bottom: 2px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const ArtistCard = styled.div`
  background: #1a1a1a;
  border-radius: 20px;
  padding: 28px 24px;
  border: 1px solid ${({ $hovered, color }) => ($hovered ? color : "#2A2A2A")};
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${({ $hovered }) =>
    $hovered ? "translateY(-4px)" : "translateY(0)"};
  animation: ${fadeUp} 0.5s ease ${({ $index }) => $index * 0.1}s both;
`;

export const ArtistAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: ${({ color }) => `${color}25`};
  border: 2px solid ${({ color }) => `${color}50`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 16px;
`;

export const ArtistName = styled.div`
  font-family: var(--font-playfair);
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
`;

export const ArtistCountry = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
`;

export const ArtistWorksTag = styled.div`
  font-size: 12px;
  color: ${({ color }) => color};
  font-weight: 600;
  background: ${({ color }) => `${color}15`};
  border-radius: 50px;
  padding: 4px 14px;
  display: inline-block;
`;

// ─── CTA ────────────────────────────────────────────────────
export const CTASection = styled.section`
  padding: 80px 5vw;
  background: linear-gradient(
    135deg,
    var(--color-red) 0%,
    var(--color-orange) 50%,
    var(--color-yellow) 100%
  );
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-family: var(--font-playfair);
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: -1px;
`;

export const CTADesc = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 auto 36px;
  max-width: 480px;
`;

export const CTABtn = styled.button`
  background: #fff;
  color: var(--color-red);
  border: none;
  border-radius: 50px;
  padding: 18px 48px;
  font-size: 16px;
  font-weight: 800;
  font-family: var(--font-outfit);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
`;
