import * as React from "react";
import { FormEvent } from "react";
import useForm from "../../hooks/useForm";
import { PersonalInfoForm, useInfoContext } from "../../context/context";
import {
  Form,
  Input,
  Title,
  TextContainer,
  Text,
  Submit,
  Wrapper,
} from "./styled";
import { useNavigate } from "@reach/router";

export const FormComponent = () => {
  const { form, handleInput } = useForm<PersonalInfoForm>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  const { setPersonalInfo } = useInfoContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPersonalInfo(form);
    navigate("/dashboard");
  };

  return (
    <Wrapper>
      <TextContainer>
        <Title>Welcome to our platform!</Title>
        <Text>
          You just have to register in order to access the dashboard where you
          are gonna be able to see all the information about crypto
        </Text>
      </TextContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={handleInput}
          id="firstName"
          name="firstName"
          value={form.firstName}
          placeholder="First Name"
          aria-label="First Name"
          required
        />

        <Input
          type="text"
          onChange={handleInput}
          value={form.lastName}
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          aria-label="Last Name"
          required
        />
        <Input
          type="email"
          onChange={handleInput}
          value={form.email}
          name="email"
          id="email"
          placeholder="Email"
          aria-label="Email"
          required
        />
        <Input
          type="phone"
          onChange={handleInput}
          id="phoneNumber"
          name="phoneNumber"
          value={form.phoneNumber}
          placeholder="Phone Number"
          aria-label="Phone Number"
          required
        />
        <Submit type="submit" aria-label="Submit" value="Submit" />
      </Form>
    </Wrapper>
  );
};
