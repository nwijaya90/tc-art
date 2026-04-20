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
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 5vw 100px;
`;

// ─── PROGRESS INDICATOR ───────────────────────────────────────
export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
`;

export const ProgressStep = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ $active, $completed }) =>
    $completed ? "var(--color-teal)" : $active ? "var(--color-dark)" : "#ccc"};
  transition: all 0.3s;
`;

export const ProgressDot = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $active, $completed }) =>
    $completed
      ? "var(--color-teal)"
      : $active
        ? "linear-gradient(135deg, var(--color-red), var(--color-orange))"
        : "#eee"};
  color: ${({ $active, $completed }) =>
    $active || $completed ? "#fff" : "#ccc"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  transition: all 0.3s;
`;

export const ProgressArrow = styled.div`
  color: #ddd;
  font-size: 16px;
`;

// ─── LAYOUT ───────────────────────────────────────────────────
export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 40px;
  align-items: start;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

// ─── LEFT: FORM ───────────────────────────────────────────────
export const FormSection = styled.div`
  animation: ${fadeIn} 0.5s ease 0.1s both;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-playfair);
  font-size: 24px;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 20px;
`;

export const FormCard = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $cols }) => ($cols === 2 ? "1fr 1fr" : "1fr")};
  gap: 16px;
  margin-bottom: ${({ $noMargin }) => ($noMargin ? "0" : "16px")};

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--color-dark);
`;

export const FormInput = styled.input`
  border: 1.5px solid #eee;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 14px;
  font-family: var(--font-outfit);
  color: var(--color-dark);
  background: #f5f5f3;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: var(--color-red);
    background: #fff;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const FormSelect = styled.select`
  border: 1.5px solid #eee;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 14px;
  font-family: var(--font-outfit);
  color: var(--color-dark);
  background: #f5f5f3;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    border-color: var(--color-red);
    background: #fff;
  }
`;

// ─── PAYMENT METHOD ───────────────────────────────────────────
export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 2px solid
    ${({ $selected }) => ($selected ? "var(--color-red)" : "#eee")};
  border-radius: 16px;
  background: ${({ $selected }) => ($selected ? "#fff5f5" : "#f5f5f3")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-red);
  }

  input {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ddd;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &:checked {
      border-color: var(--color-red);
      background: var(--color-red);
    }

    &:checked::after {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const PaymentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;

  span {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-dark);
  }
`;

export const PaymentIcon = styled.div`
  font-size: 24px;
`;

// ─── RIGHT: ORDER SUMMARY ─────────────────────────────────────
export const SummaryCard = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 88px;
  animation: ${fadeIn} 0.5s ease 0.2s both;

  @media (max-width: 960px) {
    position: static;
    width: 100%;
  }
`;

export const SummaryTitle = styled.h3`
  font-family: var(--font-playfair);
  font-size: 20px;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 24px;
`;

export const SummaryItem = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #f5f5f5;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 20px;
  }
`;

export const SummaryItemImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ $color }) => `${$color}15`};
  position: relative;
  flex-shrink: 0;
`;

export const SummaryItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SummaryItemTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: var(--color-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

export const SummaryItemArtist = styled.div`
  font-size: 11px;
  color: var(--color-gray);
  margin-bottom: 4px;
`;

export const SummaryItemPrice = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

export const SummaryItemQty = styled.div`
  font-size: 11px;
  color: var(--color-gray);
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${({ $bold }) => ($bold ? "var(--color-dark)" : "var(--color-gray)")};
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  margin-bottom: ${({ $bold }) => ($bold ? "0" : "10px")};
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background: #eee;
  margin: 20px 0;
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
  font-size: 32px;
  font-weight: 800;
  color: var(--color-red);
`;

// ─── BUTTONS ──────────────────────────────────────────────────
export const PlaceOrderBtn = styled.button`
  width: 100%;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  border: none;
  border-radius: 50px;
  padding: 18px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-outfit);
  box-shadow: 0 8px 24px rgba(232, 69, 69, 0.3);
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(232, 69, 69, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  border-radius: 50px;
  border: 1.5px solid #eee;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-gray);
  font-family: var(--font-outfit);
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    border-color: var(--color-dark);
    color: var(--color-dark);
  }
`;

export const TrustBadges = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #eee;
`;

export const TrustBadge = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 11px;
  color: var(--color-gray);
  line-height: 1.5;

  span {
    font-size: 18px;
    flex-shrink: 0;
  }
`;
