import React, { FC } from "react";
import {
  ProfilebarWrapper,
  Profile,
  Label,
  Name,
  Title,
  InfoContainer,
  Info,
} from "./styled";
import { useInfoContext } from "../../context/context";

export const Profilebar: FC = () => {
  const { personalInfo } = useInfoContext();
  return (
    <ProfilebarWrapper>
      <Profile>
        <Title>User information</Title>
        <Name>{`${personalInfo.name} ${personalInfo.lastName}`}</Name>
      </Profile>
      <InfoContainer>
        <Label>Email</Label>
        <Info>{personalInfo.email}</Info>
      </InfoContainer>

      <InfoContainer>
        <Label>Phone</Label>
        <Info>${personalInfo.phoneNumber}</Info>
      </InfoContainer>
    </ProfilebarWrapper>
  );
};
