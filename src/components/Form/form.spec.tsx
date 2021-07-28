import React from "react";

import { FormComponent } from "./index";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import PersonalInfoProvider from "../../context/provider";
import { LocationProvider } from "@reach/router";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { useInfoContext } from "../../context/context";

const Form = () => (
  <LocationProvider>
    <PersonalInfoProvider>
      <FormComponent />
      <ComponentForTestingTheContext />
    </PersonalInfoProvider>
  </LocationProvider>
);

const FIRST_NAME = "first-name";
const LAST_NAME = "last-name";
const EMAIL = "email";
const PHONE = "phone-number";

const ComponentForTestingTheContext = () => {
  const { personalInfo } = useInfoContext();
  return (
    <>
      Name :<span data-testid={FIRST_NAME}>{personalInfo?.firstName}</span>
      Last Name :<span data-testid={LAST_NAME}>{personalInfo?.lastName}</span>
      Email :<span data-testid={EMAIL}>{personalInfo?.email}</span>
      Phone number :<span data-testid={PHONE}>{personalInfo?.phoneNumber}</span>
    </>
  );
};

describe("Homepage accordion component", () => {
  const nameText = "Javier";
  const lastNameText = "Fuentes Mora";
  const emailText = "test@hotmail.com";
  const phoneNumberText = "5513559665";

  it("Should render correctly", () => {
    render(<Form />);
    expect(screen.getAllByText("Welcome to our platform!"));
  });

  it("Should not go to the next screen if the fields are empty", () => {
    render(<Form />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submitButton);
    expect(screen.getAllByText("Welcome to our platform!"));
  });

  it("useForm hook should fill the form correctly", () => {
    render(<Form />);
    const lastName = screen.getByRole("textbox", { name: /last name/i });
    const name = screen.getByRole("textbox", { name: /first name/i });
    const email = screen.getByRole("textbox", { name: /email/i });
    const phoneNumber = screen.getByRole("textbox", {
      name: /phone number/i,
    });

    expect(screen.getAllByText("Welcome to our platform!"));
    userEvent.type(name, nameText);
    userEvent.type(lastName, lastNameText);
    userEvent.type(email, emailText);
    userEvent.type(phoneNumber, phoneNumberText);

    expect(name).toHaveValue(nameText);
    expect(lastName).toHaveValue(lastNameText);
    expect(email).toHaveValue(emailText);
    expect(phoneNumber).toHaveValue(phoneNumberText);
  });

  it("useForm hook should update the context correctly", () => {
    render(<Form />);
    const lastName = screen.getByRole("textbox", { name: /last name/i });
    const name = screen.getByRole("textbox", { name: /first name/i });
    const email = screen.getByRole("textbox", { name: /email/i });
    const phoneNumber = screen.getByRole("textbox", {
      name: /phone number/i,
    });
    const submit = screen.getByRole("button", {
      name: /submit/i,
    });

    expect(screen.getAllByText("Welcome to our platform!"));
    userEvent.type(name, nameText);
    userEvent.type(lastName, lastNameText);
    userEvent.type(email, emailText);
    userEvent.type(phoneNumber, phoneNumberText);
    userEvent.click(submit);

    expect(screen.queryByTestId(FIRST_NAME)?.textContent).toBe(nameText);
    expect(screen.queryByTestId(LAST_NAME)?.textContent).toBe(lastNameText);
    expect(screen.queryByTestId(EMAIL)?.textContent).toBe(emailText);
    expect(screen.queryByTestId(PHONE)?.textContent).toBe(phoneNumberText);
  });
});
