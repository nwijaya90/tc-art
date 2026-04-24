"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-bg);
  animation: ${fadeIn} 0.4s ease both;
`;

export const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 24px 5vw 80px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #999;
  margin-bottom: 24px;
`;

export const BreadcrumbLink = styled.button`
  background: transparent;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0;
  font-size: 13px;
  font-family: var(--font-outfit);
  transition: color 0.2s;

  &:hover {
    color: var(--color-red);
  }
`;

export const BreadcrumbSep = styled.span`
  color: #d0d0d0;
`;

export const BreadcrumbCurrent = styled.span`
  color: var(--color-dark);
  font-weight: 600;
`;

export const HeroCard = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 32px;
  border-radius: 24px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.07);
  margin-bottom: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroImageWrap = styled.div`
  position: relative;
  min-height: 420px;
  background: #f5f5f3;
`;

export const HeroMeta = styled.div`
  padding: 32px;
`;

export const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: #fef0f0;
  color: var(--color-red);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 12px;
  margin-bottom: 16px;
`;

export const ArtistName = styled.h1`
  font-family: var(--font-playfair);
  font-size: 42px;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1.1;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const ArtistCountry = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 16px;
`;

export const ShortBio = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #666;
  margin-bottom: 22px;
  max-width: 700px;
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  border: 1.5px solid #eee;
  border-radius: 14px;
  padding: 14px;
  background: #fff;
`;

export const StatNumber = styled.div`
  font-family: var(--font-playfair);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1;
  margin-bottom: 5px;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #888;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  color: #fff;
  font-family: var(--font-outfit);
  font-size: 13px;
  font-weight: 700;
  padding: 12px 20px;
  cursor: pointer;
`;

export const GhostBtn = styled.button`
  border: 1.5px solid #e9e9e9;
  border-radius: 999px;
  background: #fff;
  color: var(--color-dark);
  font-family: var(--font-outfit);
  font-size: 13px;
  font-weight: 600;
  padding: 12px 20px;
  cursor: pointer;
`;

export const InfoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  border-radius: 18px;
  border: 1.5px solid #eee;
  background: #fff;
  padding: 20px;
`;

export const PanelTitle = styled.h2`
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 14px;
`;

export const AboutText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #555;
`;

export const TagList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #4f4f4f;
  background: #f7f7f7;
  border: 1px solid #eee;
`;

export const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TimelineItem = styled.div`
  border-left: 2px solid #f0f0f0;
  padding-left: 12px;
`;

export const TimelineDate = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: var(--color-red);
  margin-bottom: 3px;
`;

export const TimelineText = styled.div`
  font-size: 13px;
  line-height: 1.6;
  color: #666;
`;

export const WorksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WorkItem = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 12px;
`;

export const WorkTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
`;

export const WorkTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: var(--color-dark);
`;

export const WorkYear = styled.div`
  font-size: 12px;
  color: #999;
`;

export const WorkMeta = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 4px;
`;

export const WorkPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: var(--color-red);
`;

export const NotFoundState = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const NotFoundTitle = styled.h2`
  font-family: var(--font-playfair);
  font-size: 34px;
  color: var(--color-dark);
  margin: 0;
`;

export const NotFoundDesc = styled.p`
  margin: 0 0 6px;
  color: #888;
  font-size: 14px;
`;
