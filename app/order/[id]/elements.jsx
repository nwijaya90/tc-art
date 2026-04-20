import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 24px;
`;

export const OrderId = styled.div`
  font-weight: 600;
  background: #f5f5f5;
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 32px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const BtnPrimary = styled.button`
  background: black;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const BtnSecondary = styled.button`
  background: transparent;
  border: 1px solid #ddd;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
`;
