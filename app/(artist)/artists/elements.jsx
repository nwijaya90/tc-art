"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

// ─── PAGE ─────────────────────────────────────────────────────
export const PageWrapper = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
  animation: ${fadeIn} 0.4s ease both;
`;

// ─── HERO ─────────────────────────────────────────────────────
export const HeroSection = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 5vw 40px;
  text-align: center;
`;

export const HeroEyebrow = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before,
  &::after {
    content: "";
    width: 24px;
    height: 1px;
    background: var(--color-red);
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-playfair);
  font-size: 56px;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1.1;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroDesc = styled.p`
  font-size: 16px;
  color: var(--color-gray);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 32px;
`;

export const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 640px) {
    gap: 24px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-family: var(--font-playfair);
  font-size: 32px;
  font-weight: 800;
  color: var(--color-red);
  margin-bottom: 4px;
`;

export const StatLabel = styled.div`
  font-size: 13px;
  color: var(--color-gray);
`;

// ─── SEARCH ───────────────────────────────────────────────────
export const SearchWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 16px 20px 16px 52px;
  border: 2px solid #eee;
  border-radius: 50px;
  font-size: 15px;
  font-family: var(--font-outfit);
  color: var(--color-dark);
  background: #fff;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: var(--color-red);
    box-shadow: 0 4px 20px rgba(232, 69, 69, 0.15);
  }

  &::placeholder {
    color: #ccc;
  }
`;

// ─── GRID ─────────────────────────────────────────────────────
export const GridSection = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5vw 80px;
`;

export const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const GridCount = styled.div`
  font-size: 14px;
  color: var(--color-gray);
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FilterTab = styled.button`
  padding: 8px 20px;
  border-radius: 50px;
  border: 1.5px solid
    ${({ $active }) => ($active ? "var(--color-red)" : "#eee")};
  background: ${({ $active }) => ($active ? "var(--color-red)" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "var(--color-gray)")};
  font-size: 13px;
  font-weight: 600;
  font-family: var(--font-outfit);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-red);
    color: ${({ $active }) => ($active ? "#fff" : "var(--color-red)")};
  }
`;

// ─── MASONRY GRID ─────────────────────────────────────────────
export const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-auto-rows: 280px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 240px;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 320px;
  }
`;

export const ArtistCard = styled(Link)`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  background: #f5f5f3;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease ${({ $index }) => $index * 0.08}s both;

  /* Featured cards span multiple rows/cols */
  grid-row: ${({ $featured }) => ($featured ? "span 2" : "span 1")};
  grid-column: ${({ $wide }) => ($wide ? "span 2" : "span 1")};

  @media (max-width: 768px) {
    grid-row: span 1;
    grid-column: span 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`;

export const ArtistImage = styled.div`
  position: absolute;
  inset: 0;

  img {
    transition: transform 0.4s ease;
  }

  ${ArtistCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ArtistOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.85) 100%
  );
  pointer-events: none;
`;

export const ArtistInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  color: #fff;
  z-index: 2;
`;

export const ArtistName = styled.h3`
  font-family: var(--font-playfair);
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 4px;
  line-height: 1.2;
`;

export const ArtistCountry = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
`;

export const ArtistStats = styled.div`
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

export const StatBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ArtistHover = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;

  ${ArtistCard}:hover & {
    opacity: 0.95;
  }
`;

export const ViewProfileBtn = styled.div`
  background: #fff;
  color: var(--color-dark);
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  font-family: var(--font-outfit);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: ${float} 2s ease-in-out infinite;
`;

// ─── EMPTY STATE ──────────────────────────────────────────────
export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: var(--color-gray);
`;

export const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
`;

export const EmptyText = styled.div`
  font-size: 16px;
  color: var(--color-gray);
`;
