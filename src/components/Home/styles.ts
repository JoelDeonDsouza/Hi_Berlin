import styled from "styled-components";

export const Banner = styled.div`
  height: 400px;
  background-image: url("https://i.ibb.co/WFjXg5q/home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  & > * {
    position: relative;
    z-index: 2;
  }
  @media screen and (max-width: 960px) {
    height: 300px;
  }
`;

export const TextHeaderContainer = styled.div`
  display: flex;
  text-align: center;
  width: 80%;
  padding-bottom: 20px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const HeadText = styled.span`
  font-size: 50px;
  font-weight: 700;
  text-transform: capitalize;
  color: #fff;
  base-palette: 7;
  @media screen and (max-width: 960px) {
    display: flex;
    text-align: center;
    font-size: 28px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 55%;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    padding: 15px;
    gap: 10px;
    max-width: 90%;
  }
`;

export const SearchWrapper = styled.div`
position: relative,
width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  width: 97%;
  &:focus {
    border-color: #4a90e2;
  }
  &::placeholder {
    color: #aaa;
    font-size: 16px;
  }
  @media screen and (max-width: 960px) {
    flex: 1;
    width: 92%;
    min-width: 10rem;
  }
`;

export const SearchButton = styled.button`
  background-color: #7ed4ad;
  color: #f5f5f5;
  border: none;
  padding: 18px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  @media screen and (max-width: 960px) {
    padding: 17px 10px;
    width: 80px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  max-height: 200px;
  div {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  padding: 20px 10px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export const Box = styled.div`
  height: 160px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  border-radius: 10px;
  padding: 5px 5px;
`;

export const Grid = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 5px;
  padding: 5px 0px;
`;

export const NameAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
  object-fit: cover;
`;

export const CtgAndFindLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 30px;
`;

export const CtgName = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
`;

export const BtnContainer = styled.a`
  display: flex;
  height: 30px;
  width: 100px;
  border-radius: 100px;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const BtnText = styled.span`
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  opacity: 0.7;
  color: #000;
`;