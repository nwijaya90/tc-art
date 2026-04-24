"use client";

import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-bg);
  animation: ${fadeUp} 0.4s ease both;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 5vw 90px;
`;
export const HeroBanner = styled.section`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 520px;
  margin-bottom: 22px;
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.2);
`;

export const HeroBannerImage = styled.div`
  position: absolute;
  inset: 0;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    rgba(8, 8, 8, 0.76) 0%,
    rgba(8, 8, 8, 0.42) 48%,
    rgba(8, 8, 8, 0.2) 100%
  );
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: clamp(28px, 5vw, 54px);
  max-width: 760px;
  margin-bottom: 36px;
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 14px;
  border: 1px solid rgba(255, 255, 255, 0.26);
`;

export const HeroTitle = styled.h1`
  margin: 0 0 16px;
  font-family: var(--font-playfair);
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1.1;
  color: #fff;
`;

export const HeroDesc = styled.p`
  margin: 0;
  max-width: 680px;
  font-size: 16px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.9);
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const HeroPrimaryBtn = styled.button`
  border: none;
  border-radius: 999px;
  background: #fff;
  color: var(--color-red);
  font-family: var(--font-outfit);
  font-size: 13px;
  font-weight: 700;
  padding: 12px 20px;
  text-decoration: none;
`;

export const HeroGhostBtn = styled.button`
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  border-radius: 999px;
  background: transparent;
  color: #fff;
  font-family: var(--font-outfit);
  font-size: 13px;
  font-weight: 700;
  padding: 12px 20px;
  text-decoration: none;
`;

export const StatsRow = styled.div`
  margin: 0 auto 22px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  border: 1.5px solid #eee;
  border-radius: 14px;
  background: #fff;
  padding: 14px;
  text-align: center;
`;

export const StatNumber = styled.div`
  font-family: var(--font-playfair);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1;
  margin-bottom: 6px;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #888;
`;

export const IntroGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const IntroTextCard = styled.div`
  background: #fff;
  border: 1.5px solid #eee;
  border-radius: 18px;
  padding: 24px;
`;

export const IntroLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: 8px;
`;

export const IntroHeading = styled.h2`
  margin: 0 0 14px;
  font-family: var(--font-playfair);
  font-size: clamp(24px, 2.6vw, 36px);
  line-height: 1.2;
  color: var(--color-dark);
`;

export const IntroParagraph = styled.p`
  margin: 0 0 16px;
  color: #5f5f5f;
  font-size: 14px;
  line-height: 1.8;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const IntroImageCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 220px 220px;
  gap: 12px;
`;

export const IntroImageCardLarge = styled.div`
  grid-column: span 2;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
`;

export const IntroImageCardSmall = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
`;

export const IntroImageWrap = styled.div`
  position: absolute;
  inset: 0;
`;

export const Panel = styled.section`
  background: #fff;
  border: 1.5px solid #eee;
  border-radius: 18px;
  padding: 22px;
  margin-bottom: 16px;
`;

export const PanelTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 14px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #666;
`;

export const PanelText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #565656;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 14px;
  padding: 14px;
  background: #fcfcfc;
`;

export const ValueIcon = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const ValueTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 700;
  color: var(--color-dark);
`;

export const ValueDesc = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: #6a6a6a;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TimelineItem = styled.div`
  border-left: 2px solid #f0f0f0;
  padding-left: 12px;
`;

export const TimelineYear = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: var(--color-red);
  margin-bottom: 3px;
`;

export const TimelineText = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
  color: #666;
`;

export const GallerySection = styled.section`
  border-radius: 18px;
  background: #fff;
  border: 1.5px solid #eee;
  padding: 20px;
  margin-bottom: 16px;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryCard = styled.div`
  border-radius: 14px;
  overflow: hidden;
  background: #f8f8f8;
  border: 1px solid #f0f0f0;
`;

export const GalleryCardImage = styled.div`
  position: relative;
  height: 170px;
`;

export const GalleryCardCaption = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #4d4d4d;
  padding: 10px 12px;
`;

export const CTASection = styled.section`
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    var(--color-red) 0%,
    var(--color-orange) 45%,
    var(--color-yellow) 100%
  );
  margin-top: 8px;
`;

export const CTAInner = styled.div`
  padding: 32px 24px;
  text-align: center;
`;

export const CTATitle = styled.h2`
  margin: 0 0 8px;
  color: #fff;
  font-family: var(--font-playfair);
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 800;
`;

export const CTADesc = styled.p`
  margin: 0 auto 18px;
  max-width: 520px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  line-height: 1.7;
`;

export const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
  border: none;
  border-radius: 999px;
  background: #fff;
  color: var(--color-red);
  font-family: var(--font-outfit);
  font-size: 13px;
  font-weight: 700;
  padding: 12px 20px;
  text-decoration: none;
`;

export const GhostBtn = styled.button`
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  border-radius: 999px;
  background: transparent;
  color: #fff;
  font-family: var(--font-outfit);
  font-size: 13px;
  font-weight: 700;
  padding: 12px 20px;
  text-decoration: none;
`;
