import styled from "styled-components";
import { Input } from "../Form/styled";

export const ConverterWrapper = styled.div`
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 1025px) {
    grid-column: 1/4;
    flex-direction: row;
    height: 60px;
  }
`;

export const APIProvider = styled.div`
  display: flex;
  font-family: DM Sans, serif;
  flex-direction: column;
  background-color: #9381ff;
  color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 100%;
  width: 100%;
`;
export const InputConverter = styled(Input)`
  height: 25px;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  min-width: 100%;

  @media (min-width: 1025px) {
    margin-right: 30px;
    min-width: 30%;
  }
`;

export const LabelForInput = styled.label`
  font-family: DM Sans, serif;
  font-size: 17px;
`;
