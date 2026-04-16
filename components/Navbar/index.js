"use client";

import Link from "next/link";
import useCartStore from "@/lib/cartStore";
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
  CartBtn,
  CartBadge,
} from "./elements";

const navItems = [
  { label: "Discover", href: "/gallery" },
  { label: "Artists", href: "/artists" },
  { label: "Styles", href: "/gallery?filter=style" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const count = useCartStore((state) => state.totalCount);

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
        <CartBtn href="/cart">
          🛒
          {count > 0 && <CartBadge>{count}</CartBadge>}
        </CartBtn>
        <BtnOutline>Log in</BtnOutline>
        <BtnPrimary>Sign up</BtnPrimary>
      </NavActions>
    </Nav>
  );
};

export default Navbar;
