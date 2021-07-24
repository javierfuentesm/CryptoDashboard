import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import useForm from "../hooks/useForm";
import { FormEvent, useEffect } from "react";
import { PersonalInfoForm, useInfoContext } from "../context/context";

export const Home = (props: RouteComponentProps) => {
  const { form, handleInput } = useForm<PersonalInfoForm>({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const { setPersonalInfo } = useInfoContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPersonalInfo(form);
    props.navigate("/dashboard");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          name="name"
          value={form.name}
          placeholder="Name"
          required
        />

        <input
          type="text"
          onChange={handleInput}
          value={form.lastName}
          name="lastName"
          placeholder="LastName"
          required
        />
        <input
          type="email"
          onChange={handleInput}
          value={form.email}
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="phone"
          onChange={handleInput}
          name="phoneNumber"
          value={form.phoneNumber}
          placeholder="PhoneNumber"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};
