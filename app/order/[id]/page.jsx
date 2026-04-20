"use client";

import { useRouter, useParams } from "next/navigation";
import {
  Wrapper,
  Container,
  Icon,
  Title,
  Subtitle,
  OrderId,
  Actions,
  BtnPrimary,
  BtnSecondary,
} from "./elements";
import useCartStore from "@/lib/cartStore";

import { useEffect } from "react";

export default function OrderPage() {
  const router = useRouter();
  const { id } = useParams();
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Icon>✅</Icon>

        <Title>Order Confirmed</Title>
        <Subtitle>Your order has been placed successfully.</Subtitle>

        <OrderId>Order ID: {id}</OrderId>

        <Actions>
          <BtnPrimary onClick={() => router.push("/")}>Back to Home</BtnPrimary>

          <BtnSecondary onClick={() => router.push("/gallery")}>
            Continue Shopping
          </BtnSecondary>
        </Actions>
      </Container>
    </Wrapper>
  );
}
