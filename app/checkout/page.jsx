"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useCartStore from "@/lib/cartStore";
import {
  PageWrapper,
  PageInner,
  ProgressBar,
  ProgressStep,
  ProgressDot,
  ProgressArrow,
  CheckoutLayout,
  FormSection,
  SectionTitle,
  FormCard,
  FormGrid,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  PaymentOptions,
  PaymentOption,
  PaymentLabel,
  PaymentIcon,
  SummaryCard,
  SummaryTitle,
  SummaryItem,
  SummaryItemImage,
  SummaryItemInfo,
  SummaryItemTitle,
  SummaryItemArtist,
  SummaryItemPrice,
  SummaryItemQty,
  SummaryRow,
  SummaryDivider,
  SummaryTotal,
  SummaryTotalLabel,
  SummaryTotalValue,
  PlaceOrderBtn,
  BackBtn,
  TrustBadges,
  TrustBadge,
} from "./elements";

const CheckoutPage = () => {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalCount = useCartStore((state) => state.totalCount);
  const clearCart = useCartStore((state) => state.clearCart);
  // ── Form state ──
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    paymentMethod: "credit-card",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate order ID
    const orderId = `TC${Date.now().toString().slice(-8)}`;

    // Redirect to confirmation
    router.push(`/order/${orderId}`);
  };

  const shipping = 0; // free
  const tax = Math.round(totalPrice * 0.1);
  const total = totalPrice + shipping + tax;

  return (
    <PageWrapper>
      <PageInner>
        {/* ── Progress indicator ── */}
        <ProgressBar>
          <ProgressStep $completed>
            <ProgressDot $completed>✓</ProgressDot>
            Cart
          </ProgressStep>
          <ProgressArrow>→</ProgressArrow>
          <ProgressStep $active>
            <ProgressDot $active>2</ProgressDot>
            Checkout
          </ProgressStep>
          <ProgressArrow>→</ProgressArrow>
          <ProgressStep>
            <ProgressDot>3</ProgressDot>
            Confirmation
          </ProgressStep>
        </ProgressBar>

        <CheckoutLayout>
          {/* ── LEFT: Form ── */}
          <FormSection>
            <form onSubmit={handleSubmit}>
              {/* Shipping Address */}
              <SectionTitle>Shipping Address</SectionTitle>
              <FormCard>
                <FormGrid $cols={2}>
                  <FormGroup>
                    <FormLabel>First Name *</FormLabel>
                    <FormInput
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Last Name *</FormLabel>
                    <FormInput
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </FormGroup>
                </FormGrid>

                <FormGrid>
                  <FormGroup>
                    <FormLabel>Address *</FormLabel>
                    <FormInput
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main Street"
                      required
                    />
                  </FormGroup>
                </FormGrid>

                <FormGrid>
                  <FormGroup>
                    <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
                    <FormInput
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                      placeholder="Apt 4B"
                    />
                  </FormGroup>
                </FormGrid>

                <FormGrid $cols={2}>
                  <FormGroup>
                    <FormLabel>City *</FormLabel>
                    <FormInput
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="New York"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>State / Province *</FormLabel>
                    <FormInput
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="NY"
                      required
                    />
                  </FormGroup>
                </FormGrid>

                <FormGrid $cols={2} $noMargin>
                  <FormGroup>
                    <FormLabel>ZIP / Postal Code *</FormLabel>
                    <FormInput
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder="10001"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Country *</FormLabel>
                    <FormSelect
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Indonesia</option>
                    </FormSelect>
                  </FormGroup>
                </FormGrid>
              </FormCard>

              {/* Contact Info */}
              <SectionTitle>Contact Information</SectionTitle>
              <FormCard>
                <FormGrid $cols={2} $noMargin>
                  <FormGroup>
                    <FormLabel>Email *</FormLabel>
                    <FormInput
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormInput
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </FormGroup>
                </FormGrid>
              </FormCard>

              {/* Payment Method */}
              <SectionTitle>Payment Method</SectionTitle>
              <FormCard>
                <PaymentOptions>
                  <PaymentOption
                    $selected={formData.paymentMethod === "credit-card"}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === "credit-card"}
                      onChange={handleChange}
                    />
                    <PaymentLabel>
                      <PaymentIcon>💳</PaymentIcon>
                      <span>Credit / Debit Card</span>
                    </PaymentLabel>
                  </PaymentOption>

                  <PaymentOption
                    $selected={formData.paymentMethod === "paypal"}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={handleChange}
                    />
                    <PaymentLabel>
                      <PaymentIcon>🅿️</PaymentIcon>
                      <span>PayPal</span>
                    </PaymentLabel>
                  </PaymentOption>

                  <PaymentOption $selected={formData.paymentMethod === "bank"}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === "bank"}
                      onChange={handleChange}
                    />
                    <PaymentLabel>
                      <PaymentIcon>🏦</PaymentIcon>
                      <span>Bank Transfer</span>
                    </PaymentLabel>
                  </PaymentOption>
                </PaymentOptions>
              </FormCard>
            </form>
          </FormSection>

          {/* ── RIGHT: Order Summary ── */}
          <SummaryCard>
            <SummaryTitle>Order Summary</SummaryTitle>

            {/* Items */}
            {items.map((item) => (
              <SummaryItem key={item.id}>
                <SummaryItemImage $color={item.color}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="56px"
                  />
                </SummaryItemImage>
                <SummaryItemInfo>
                  <SummaryItemTitle>{item.title}</SummaryItemTitle>
                  <SummaryItemArtist>{item.artist}</SummaryItemArtist>
                  <SummaryItemQty>Qty: {item.quantity}</SummaryItemQty>
                </SummaryItemInfo>
                <SummaryItemPrice $color={item.color}>
                  ${(item.price * item.quantity).toLocaleString()}
                </SummaryItemPrice>
              </SummaryItem>
            ))}

            <SummaryDivider />

            {/* Summary */}
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
            <SummaryRow>
              <span>Tax (est.)</span>
              <span>${tax.toLocaleString()}</span>
            </SummaryRow>

            <SummaryDivider />

            <SummaryTotal>
              <SummaryTotalLabel>Total</SummaryTotalLabel>
              <SummaryTotalValue>${total.toLocaleString()}</SummaryTotalValue>
            </SummaryTotal>
            <form onSubmit={handleSubmit}>
              <PlaceOrderBtn type="submit" disabled={loading}>
                {loading ? "Processing..." : "Place Order →"}
              </PlaceOrderBtn>
            </form>

            <BackBtn href="/cart">← Back to Cart</BackBtn>

            <TrustBadges>
              <TrustBadge>
                <span>🔒</span>
                <div>Secure checkout with SSL encryption</div>
              </TrustBadge>
              <TrustBadge>
                <span>↩️</span>
                <div>Free 14-day return policy</div>
              </TrustBadge>
              <TrustBadge>
                <span>📜</span>
                <div>Certificate of authenticity included</div>
              </TrustBadge>
              <TrustBadge>
                <span>✈️</span>
                <div>Free worldwide shipping</div>
              </TrustBadge>
            </TrustBadges>
          </SummaryCard>
        </CheckoutLayout>
      </PageInner>
    </PageWrapper>
  );
};

export default CheckoutPage;
