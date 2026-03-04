"use client";

import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  background: #0a0a0a;
  padding: 60px 5vw 30px;
  color: #fff;
`;

export const FooterInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrand = styled.div``;

export const FooterLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  margin-bottom: 16px;
`;

export const FooterLogoIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const FooterLogoText = styled.span`
  font-family: var(--font-playfair);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.5px;
`;

export const FooterDesc = styled.p`
  color: #666;
  font-size: 13px;
  line-height: 1.7;
  max-width: 260px;
`;

export const FooterCol = styled.div``;

export const FooterColTitle = styled.div`
  font-size: 11px;
  letter-spacing: 2.5px;
  color: var(--color-red);
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const FooterLink = styled(Link)`
  display: block;
  color: #666;
  font-size: 13px;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #1a1a1a;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export const FooterCopy = styled.div`
  font-size: 12px;
  color: #444;
`;

export const FooterLegal = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterLegalLink = styled(Link)`
  font-size: 12px;
  color: #444;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #888;
  }
`;
