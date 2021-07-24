import { FC, useMemo, useState } from "react";
import * as React from "react";

import { PersonalInfo, PersonalInfoForm } from "./context";

const PersonalInfoProvider: FC = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoForm>();

  const contextValue = useMemo(
    () => ({
      personalInfo,
      setPersonalInfo,
    }),
    [personalInfo, setPersonalInfo]
  );

  return (
    <PersonalInfo.Provider value={contextValue}>
      {children}
    </PersonalInfo.Provider>
  );
};

export default PersonalInfoProvider;
