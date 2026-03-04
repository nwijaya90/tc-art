"use client";

import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 250, 248, 0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  height: 68px;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

export const LogoIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const LogoText = styled.span`
  font-family: var(--font-playfair);
  font-weight: 800;
  font-size: 22px;
  color: var(--color-dark);
  letter-spacing: -0.5px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-red);
  }
`;

export const NavActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const BtnOutline = styled.button`
  background: transparent;
  border: 1.5px solid #ddd;
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-red);
    color: var(--color-red);
  }
`;

export const BtnPrimary = styled.button`
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  border: none;
  border-radius: 50px;
  padding: 9px 22px;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 4px 15px rgba(232, 69, 69, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(232, 69, 69, 0.4);
  }
`;
