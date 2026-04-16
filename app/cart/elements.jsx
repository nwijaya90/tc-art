"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ─── PAGE ─────────────────────────────────────────────────────
export const PageWrapper = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
  animation: ${fadeIn} 0.4s ease both;
`;

export const PageInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 5vw 100px;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-playfair);
  font-size: 36px;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 8px;
`;

export const PageSubtitle = styled.p`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 40px;
`;

// ─── LAYOUT ───────────────────────────────────────────────────
export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
  align-items: start;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
`;

// ─── CART ITEMS ───────────────────────────────────────────────
export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CartItem = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 88px 1fr auto;
  gap: 20px;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 540px) {
    grid-template-columns: 72px 1fr;
    grid-template-rows: auto auto;
  }
`;

export const CartItemImage = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ $color }) => `${$color}15`};
  position: relative;
  flex-shrink: 0;

  @media (max-width: 540px) {
    width: 72px;
    height: 72px;
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const CartItemTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CartItemArtist = styled.div`
  font-size: 12px;
  color: var(--color-gray);
`;

export const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${({ $color }) => $color || "var(--color-red)"};
  margin-top: 4px;
`;

// ─── QUANTITY CONTROL ─────────────────────────────────────────
export const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

export const QtyBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid #eee;
  background: #f5f5f3;
  color: var(--color-dark);
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  line-height: 1;

  &:hover {
    border-color: var(--color-red);
    color: var(--color-red);
    background: #fff;
  }
`;

export const QtyValue = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: var(--color-dark);
  min-width: 20px;
  text-align: center;
`;

export const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  color: #ccc;
  font-size: 18px;
  padding: 4px;
  transition: color 0.2s;
  align-self: flex-start;

  &:hover {
    color: var(--color-red);
  }

  @media (max-width: 540px) {
    grid-column: 2;
    grid-row: 2;
    justify-self: end;
  }
`;

// ─── EMPTY STATE ──────────────────────────────────────────────
export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  gap: 16px;
`;

export const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 8px;
`;

export const EmptyTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 24px;
  font-weight: 800;
  color: var(--color-dark);
`;

export const EmptyDesc = styled.div`
  font-size: 14px;
  color: var(--color-gray);
  line-height: 1.7;
`;

export const EmptyBtn = styled(Link)`
  margin-top: 8px;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  border: none;
  border-radius: 50px;
  padding: 14px 32px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-outfit);
  box-shadow: 0 4px 16px rgba(232, 69, 69, 0.3);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(232, 69, 69, 0.4);
  }
`;

// ─── ORDER SUMMARY ────────────────────────────────────────────
export const SummaryCard = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 88px;

  @media (max-width: 860px) {
    position: static;
    width: 100%;
  }
`;

export const SummaryTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 20px;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 24px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${({ $bold }) => ($bold ? "var(--color-dark)" : "var(--color-gray)")};
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  margin-bottom: ${({ $bold }) => ($bold ? "0" : "12px")};
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background: #eee;
  margin: 16px 0;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
`;

export const SummaryTotalLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-dark);
`;

export const SummaryTotalValue = styled.div`
  font-family: var(--font-playfair);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-red);
`;

export const CheckoutBtn = styled(Link)`
  display: block;
  width: 100%;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  border: none;
  border-radius: 50px;
  padding: 16px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-outfit);
  box-shadow: 0 8px 24px rgba(232, 69, 69, 0.3);
  transition: all 0.2s;
  text-align: center;
  margin-bottom: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(232, 69, 69, 0.4);
  }
`;

export const ContinueBtn = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 14px;
  border-radius: 50px;
  border: 1.5px solid #eee;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-gray);
  font-family: var(--font-outfit);
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-dark);
    color: var(--color-dark);
  }
`;

export const TrustRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const TrustItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #bbb;
  text-align: center;

  span {
    font-size: 18px;
  }
`;

export const PromoRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

export const PromoInput = styled.input`
  flex: 1;
  border: 1.5px solid #eee;
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 13px;
  font-family: var(--font-outfit);
  color: var(--color-dark);
  background: #f5f5f3;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--color-red);
    background: #fff;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const PromoBtn = styled.button`
  border: 1.5px solid #eee;
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-dark);
  background: #fff;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-red);
    color: var(--color-red);
  }
`;
