import styled from "styled-components";

export const Input = styled.input`
  height: 60px;
  width: 100%;
  margin: 16px 0;
  background: #edf2f7;
  border-radius: 12px;
  border-width: 0;
  padding-left: 20px;
  ::placeholder {
    color: #718096;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px;
  @media (min-width: 1025px) {
    width: 480px;
  }
`;

export const Submit = styled(Input)`
  font-family: DM Sans, serif;
  background: linear-gradient(90.81deg, #f56565 0%, #ed64a6 100%);
  border-radius: 12px;
  color: white;
`;

export const Wrapper = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    190.57deg,
    rgba(255, 255, 255, 0.56) 19.25%,
    rgba(248, 248, 255, 0.71) 54.39%,
    rgba(255, 255, 255, 0.59) 90.02%
  );
  box-shadow: -8.54241px 41.5133px 119.594px rgba(126, 123, 160, 0.2);
  width: 100%;
  @media (min-width: 1025px) {
    width: 560px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
  @media (min-width: 1025px) {
  font-size: 48px;
  }
  
`;

export const TextContainer = styled.div`
  margin: 40px;
  @media (min-width: 1025px) {
    height: 146px;
    width: 480px;
  }
`;

export const Text = styled.div`
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #718096;
`;
