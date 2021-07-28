import styled from "styled-components";

export const ProfilebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(193, 189, 213, 0.12);
  @media (min-width: 1025px) {
    padding-left: 24px;
    margin-left: 24px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 56px auto 36px auto;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: DM Sans, serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #352e5b;
`;

export const Name = styled(Title)`
  font-size: 16px;
  line-height: 21px;
`;

export const Label = styled(Title)`
  font-size: 14px;
  line-height: 21px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #a69ed6;
`;
