import { useContext, createContext } from "react";

export type PersonalInfoForm = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

interface PersonalInfoType {
  personalInfo: PersonalInfoForm;
  setPersonalInfo: (form: PersonalInfoForm) => void;
}

export const PersonalInfo = createContext<PersonalInfoType | undefined>(
  undefined
);

export const useInfoContext = (): PersonalInfoType => {
  const context = useContext(PersonalInfo);
  if (context === undefined) {
    throw new Error("usePersonalInfo must be used within a PersonalInfo");
  }
  return context;
};
