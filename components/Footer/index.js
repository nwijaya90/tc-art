"use client";

import {
  FooterWrapper,
  FooterInner,
  FooterGrid,
  FooterBrand,
  FooterLogoWrapper,
  FooterLogoIcon,
  FooterLogoText,
  FooterDesc,
  FooterCol,
  FooterColTitle,
  FooterLink,
  FooterBottom,
  FooterCopy,
  FooterLegal,
  FooterLegalLink,
} from "./elements";

const footerLinks = [
  {
    title: "Discover",
    links: [
      { label: "All Art", href: "/gallery" },
      { label: "Paintings", href: "/gallery?medium=painting" },
      { label: "Prints", href: "/gallery?medium=prints" },
      { label: "Photography", href: "/gallery?medium=photography" },
    ],
  },
  {
    title: "Artists",
    links: [
      { label: "Find an Artist", href: "/artists" },
      { label: "Top Sellers", href: "/artists?sort=top" },
      { label: "New Artists", href: "/artists?sort=new" },
      { label: "Commission Art", href: "/commission" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Press", href: "/press" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterGrid>
          <FooterBrand>
            <FooterLogoWrapper href="/">
              <FooterLogoIcon>🎨</FooterLogoIcon>
              <FooterLogoText>TCArt</FooterLogoText>
            </FooterLogoWrapper>
            <FooterDesc>
              The marketplace for original art. Connecting passionate collectors
              with independent artists worldwide.
            </FooterDesc>
          </FooterBrand>

          {footerLinks.map((col) => (
            <FooterCol key={col.title}>
              <FooterColTitle>{col.title}</FooterColTitle>
              {col.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterCol>
          ))}
        </FooterGrid>

        <FooterBottom>
          <FooterCopy>© 2025 TCArt. All rights reserved.</FooterCopy>
          <FooterLegal>
            <FooterLegalLink href="/privacy">Privacy</FooterLegalLink>
            <FooterLegalLink href="/terms">Terms</FooterLegalLink>
            <FooterLegalLink href="/cookies">Cookies</FooterLegalLink>
          </FooterLegal>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
}
