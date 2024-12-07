import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 93vh;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

export const HeaderText = styled.span`
  color: #001524;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 20px;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: 28px;
    font-weight: 900;
    margin-top: 20px;
    line-height: 40px;
    letter-spacing: 0.8px;
    margin-bottom: 18px;
  }
`;

export const SubText = styled.span`
  color: #022c43;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.5px;
  margin-bottom: 18px;
  opacity: 0.6;
  @media screen and (max-width: 960px) {
    font-size: 20px;
    font-weight: 900;
    line-height: 36px;
    margin-bottom: 40px;
    text-align: start;
  }
`;

export const ImgWrapperContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: #cbdceb;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 30%;
    padding: 10px 0px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 75%;
  height: 96%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    padding: 0 5px;
    width: 30%;
    height: 90%;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;
`;

export const FormHeader = styled.span`
  color: #001524;
  font-size: 16px;
  font-weight: 800;
  opacity: 0.7;
  margin-bottom: 5px;
  @media screen and (max-width: 960px) {
    font-size: 14px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: 0.8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  self-align: start;
  width: 90%;
  padding: 10px 0px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #2a3335;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 15px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const AdditionalText = styled.span`
  color: #ff2929;
  font-size: 16px;
  margin-bottom: 20px;
  opacity: 0.8;
  font-weight: 600;
  @media screen and (max-width: 960px) {
    font-size: 19px;
    line-height: 2rem;
    text-align: center;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  width: 35%;
  font-size: 18px;
  background: #7ed4ad;
  color: #f5f5f5;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: #33b249;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
