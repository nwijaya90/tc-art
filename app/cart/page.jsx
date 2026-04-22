"use client";

import Image from "next/image";
import { useState } from "react";
import useCartStore from "@/lib/cartStore";
import {
  PageWrapper,
  PageInner,
  PageTitle,
  PageSubtitle,
  CartLayout,
  CartList,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemTitle,
  CartItemArtist,
  CartItemPrice,
  QuantityRow,
  QtyBtn,
  QtyValue,
  RemoveBtn,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDesc,
  EmptyBtn,
  SummaryCard,
  SummaryTitle,
  SummaryRow,
  SummaryDivider,
  SummaryTotal,
  SummaryTotalLabel,
  SummaryTotalValue,
  CheckoutBtn,
  ContinueBtn,
  TrustRow,
  TrustItem,
  PromoRow,
  PromoInput,
  PromoBtn,
} from "./elements";

// ─── PAGE ─────────────────────────────────────────────────────
const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalCount = useCartStore((state) => state.totalCount);
  const removeItem = useCartStore((state) => state.removeItem);
  const addItem = useCartStore((state) => state.addItem);
  const decrementItem = useCartStore((state) => state.decrementItem);

  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const shipping = totalPrice > 0 ? 0 : 0; // free shipping
  const discount = promoApplied ? Math.round(totalPrice * 0.1) : 0;
  const finalTotal = totalPrice - discount;

  const handlePromo = () => {
    if (promo.toLowerCase() === "tcart10") {
      setPromoApplied(true);
    }
  };

  // ── Empty state ──
  if (items.length === 0) {
    return (
      <PageWrapper>
        <PageInner>
          <PageTitle>Your Cart</PageTitle>
          <EmptyState>
            <EmptyIcon>🛒</EmptyIcon>
            <EmptyTitle>Your cart is empty</EmptyTitle>
            <EmptyDesc>
              Looks like you haven't added any artworks yet.
              <br />
              Discover something beautiful!
            </EmptyDesc>
            <EmptyBtn href="/gallery">Explore Gallery →</EmptyBtn>
          </EmptyState>
        </PageInner>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageInner>
        <PageTitle>Your Cart</PageTitle>
        <PageSubtitle>
          {totalCount} {totalCount === 1 ? "artwork" : "artworks"} in your cart
        </PageSubtitle>

        <CartLayout>
          {/* ── LEFT: Cart items ── */}
          <CartList>
            {items.map((item) => (
              <CartItem key={item.id}>
                {/* Image */}
                <CartItemImage $color={item.color}>
                  {item.image && item.image.trim() !== "" ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="88px"
                    />
                  ) : (
                    <div
                      style={{
                        width: "88px",
                        height: "88px",
                        background: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      🖼️
                    </div>
                  )}
                </CartItemImage>

                {console.log(item)}

                {/* Info */}
                <CartItemInfo>
                  <CartItemTitle>{item.title}</CartItemTitle>
                  <CartItemArtist>{item.artist}</CartItemArtist>
                  <CartItemPrice $color={item.color}>
                    ${item.price.toLocaleString()}
                  </CartItemPrice>
                  <QuantityRow>
                    <QtyBtn onClick={() => decrementItem(item.id)}>−</QtyBtn>
                    <QtyValue>{item.quantity}</QtyValue>
                    <QtyBtn onClick={() => addItem(item)}>+</QtyBtn>
                  </QuantityRow>
                </CartItemInfo>

                {/* Remove */}
                <RemoveBtn onClick={() => removeItem(item.id)}>✕</RemoveBtn>
              </CartItem>
            ))}
          </CartList>

          {/* ── RIGHT: Order summary ── */}
          <SummaryCard>
            <SummaryTitle>Order Summary</SummaryTitle>

            {/* Promo code */}
            <PromoRow>
              <PromoInput
                placeholder="Promo code (try TCART10)"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handlePromo()}
              />
              <PromoBtn onClick={handlePromo}>
                {promoApplied ? "✓" : "Apply"}
              </PromoBtn>
            </PromoRow>

            {/* Summary rows */}
            <SummaryRow>
              <span>Subtotal ({totalCount} items)</span>
              <span>${totalPrice.toLocaleString()}</span>
            </SummaryRow>

            <SummaryRow>
              <span>Shipping</span>
              <span style={{ color: "var(--color-teal)", fontWeight: 600 }}>
                Free
              </span>
            </SummaryRow>

            {promoApplied && (
              <SummaryRow>
                <span>Discount (TCART10)</span>
                <span style={{ color: "var(--color-teal)", fontWeight: 600 }}>
                  −${discount.toLocaleString()}
                </span>
              </SummaryRow>
            )}

            <SummaryDivider />

            <SummaryTotal>
              <SummaryTotalLabel>Total</SummaryTotalLabel>
              <SummaryTotalValue>
                ${finalTotal.toLocaleString()}
              </SummaryTotalValue>
            </SummaryTotal>

            <CheckoutBtn href="/checkout">Proceed to Checkout →</CheckoutBtn>
            <ContinueBtn href="/gallery">← Continue Shopping</ContinueBtn>

            <TrustRow>
              <TrustItem>
                <span>🔒</span>Secure
              </TrustItem>
              <TrustItem>
                <span>↩️</span>14-Day Returns
              </TrustItem>
              <TrustItem>
                <span>📜</span>Certificate
              </TrustItem>
              <TrustItem>
                <span>✈️</span>Free Ship
              </TrustItem>
            </TrustRow>
          </SummaryCard>
        </CartLayout>
      </PageInner>
    </PageWrapper>
  );
};

export default CartPage;
