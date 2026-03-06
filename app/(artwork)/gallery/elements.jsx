"use client";

import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ─── PAGE ────────────────────────────────────────────────────
export const PageWrapper = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
`;

// ─── HEADER ──────────────────────────────────────────────────
export const GalleryHeader = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 48px 5vw 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderLeft = styled.div``;

export const HeaderEyebrow = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: 8px;
`;

export const HeaderTitle = styled.h1`
  font-family: var(--font-playfair);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1.1;
  margin-bottom: 12px;
`;

export const HeaderSub = styled.p`
  font-size: 15px;
  color: #999;
  line-height: 1.6;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const ResultCount = styled.div`
  font-size: 13px;
  color: #aaa;
  white-space: nowrap;
  strong {
    color: var(--color-dark);
    font-weight: 700;
  }
`;

export const SortSelect = styled.select`
  border: 1.5px solid #eee;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-dark);
  background: #fff;
  font-family: var(--font-outfit);
  cursor: pointer;
  appearance: none;
  outline: none;
  transition: border-color 0.2s;
  &:hover {
    border-color: var(--color-red);
  }
`;

// ─── LAYOUT ──────────────────────────────────────────────────
export const GalleryLayout = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5vw 80px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

// ─── SIDEBAR ─────────────────────────────────────────────────
export const Sidebar = styled.div`
  position: sticky;
  top: 88px;
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const FilterSection = styled.div`
  border-bottom: 1.5px solid #eee;
  padding: 20px 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const FilterTitle = styled.div`
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #bbb;
  margin-bottom: 14px;
`;

export const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  cursor: pointer;
  font-size: 13px;
  color: ${({ $active }) => ($active ? "var(--color-dark)" : "#888")};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  transition: color 0.15s;
  &:hover {
    color: var(--color-dark);
  }
`;

export const FilterCheckbox = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 5px;
  border: 1.5px solid
    ${({ $active }) => ($active ? "var(--color-red)" : "#ddd")};
  background: ${({ $active }) =>
    $active ? "var(--color-red)" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #fff;
  flex-shrink: 0;
  transition: all 0.15s;
`;

export const FilterCount = styled.span`
  font-size: 11px;
  color: #ccc;
  font-weight: 400;
  margin-left: auto;
`;

export const ColorRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ColorDot = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 2px solid transparent;
  outline: ${({ $active }) =>
    $active ? "2px solid var(--color-dark)" : "none"};
  outline-offset: 2px;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    transform: scale(1.15);
  }
`;

export const PriceRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PriceInput = styled.input`
  width: 100%;
  border: 1.5px solid #eee;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px;
  font-family: var(--font-outfit);
  color: var(--color-dark);
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-color: var(--color-red);
  }
`;

export const ClearBtn = styled.button`
  width: 100%;
  background: transparent;
  border: 1.5px solid #eee;
  border-radius: 50px;
  padding: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #aaa;
  font-family: var(--font-outfit);
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.2s;
  &:hover {
    border-color: var(--color-red);
    color: var(--color-red);
  }
`;

// ─── MOBILE CHIPS ─────────────────────────────────────────────
export const MobileFilterBar = styled.div`
  display: none;
  gap: 8px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 4px;
  @media (max-width: 960px) {
    display: flex;
  }
`;

export const MobileChip = styled.button`
  background: ${({ $active }) => ($active ? "var(--color-dark)" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#666")};
  border: 1.5px solid
    ${({ $active }) => ($active ? "var(--color-dark)" : "#eee")};
  border-radius: 50px;
  padding: 8px 18px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  font-family: var(--font-outfit);
  transition: all 0.2s;
`;

// ─── GRID ────────────────────────────────────────────────────
export const GridArea = styled.div``;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ViewToggle = styled.div`
  display: flex;
  gap: 4px;
`;

export const ViewBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1.5px solid
    ${({ $active }) => ($active ? "var(--color-dark)" : "#eee")};
  background: ${({ $active }) =>
    $active ? "var(--color-dark)" : "transparent"};
  color: ${({ $active }) => ($active ? "#fff" : "#bbb")};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
`;

export const ArtGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $view }) =>
    $view === "list"
      ? "1fr"
      : $view === "large"
        ? "repeat(auto-fill, minmax(320px, 1fr))"
        : "repeat(auto-fill, minmax(240px, 1fr))"};
  gap: ${({ $view }) => ($view === "list" ? "16px" : "24px")};
`;

// ─── ART CARD ────────────────────────────────────────────────
export const ArtCard = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${fadeUp} 0.4s ease ${({ $index }) => `${$index * 0.06}s`} both;
  display: ${({ $view }) => ($view === "list" ? "grid" : "block")};
  grid-template-columns: ${({ $view }) =>
    $view === "list" ? "200px 1fr auto" : "unset"};
  align-items: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
  }
`;

export const ArtCardImage = styled.div`
  position: relative;
  height: ${({ $view }) =>
    $view === "list" ? "160px" : $view === "large" ? "300px" : "220px"};
  background: ${({ $color }) => `${$color}12`};
  overflow: hidden;
  flex-shrink: 0;
`;

export const ArtCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s ease;

  ${ArtCard}:hover & {
    background: rgba(0, 0, 0, 0.32);
  }
`;

export const OverlayBtn = styled.button`
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50px;
  padding: 9px 18px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-dark);
  font-family: var(--font-outfit);
  cursor: pointer;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.25s ease ${({ $delay }) => $delay || "0s"};
  white-space: nowrap;

  ${ArtCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    background: #fff;
  }
`;

export const ArtCardBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ $color }) => $color || "var(--color-red)"};
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 50px;
  z-index: 1;
`;

export const WishlistBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.15);
  }
`;

export const ArtCardBody = styled.div`
  padding: ${({ $view }) => ($view === "list" ? "0 24px" : "16px")};
  flex: 1;
`;

export const ArtCardMeta = styled.div`
  font-size: 10px;
  color: #ccc;
  font-weight: 600;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ArtCardTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: ${({ $view }) => ($view === "large" ? "18px" : "15px")};
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 3px;
  line-height: 1.3;
`;

export const ArtCardArtist = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-bottom: 12px;
`;

export const ArtCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArtCardPrice = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${({ $color }) => $color};
  font-family: var(--font-playfair);
`;

export const ArtCardSize = styled.div`
  font-size: 11px;
  color: #ccc;
`;

export const ListActions = styled.div`
  padding: 20px;
  flex-shrink: 0;
  display: ${({ $view }) => ($view === "list" ? "flex" : "none")};
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

export const QuickBuyBtn = styled.button`
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-outfit);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(232, 69, 69, 0.3);
  }
`;

// ─── EMPTY ───────────────────────────────────────────────────
export const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 20px;
  div {
    font-size: 48px;
    margin-bottom: 16px;
  }
  h3 {
    font-family: var(--font-playfair);
    font-size: 22px;
    color: #bbb;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    color: #ccc;
  }
`;

// ─── LOAD MORE ───────────────────────────────────────────────
export const LoadMoreWrapper = styled.div`
  text-align: center;
  margin-top: 48px;
`;

export const LoadMoreBtn = styled.button`
  background: transparent;
  border: 2px solid var(--color-dark);
  border-radius: 50px;
  padding: 16px 48px;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-dark);
  font-family: var(--font-outfit);
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    background: var(--color-dark);
    color: #fff;
  }
`;
