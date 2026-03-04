"use client";

import {
  Nav,
  LogoWrapper,
  LogoIcon,
  LogoText,
  NavLinks,
  NavLink,
  NavActions,
  BtnOutline,
  BtnPrimary,
} from "./elements";

const navItems = [
  { label: "Discover", href: "/gallery" },
  { label: "Artists", href: "/artists" },
  { label: "Styles", href: "/gallery?filter=style" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <Nav>
      <LogoWrapper href="/">
        <LogoIcon>🎨</LogoIcon>
        <LogoText>TCArt</LogoText>
      </LogoWrapper>

      <NavLinks>
        {navItems.map((item) => (
          <NavLink key={item.label} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </NavLinks>

      <NavActions>
        <BtnOutline>Log in</BtnOutline>
        <BtnPrimary>Sign up</BtnPrimary>
      </NavActions>
    </Nav>
  );
}
