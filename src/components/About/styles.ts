import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 30px;
  height: 80vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    height: 100%;
  }
`;

export const TextMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 0 60px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media screen and (max-width: 960px) {
    padding: 0 10px;
  }
`;

export const HeaderText = styled.span`
  color: #001524;
  font-size: 46px;
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

export const MainContainerImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  border-radius: 12px;
  @media screen and (max-width: 960px) {
    padding: 0 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  @media screen and (max-width: 960px) {
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const TextSubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: #7bd3ea;
  border-radius: 12px;
  margin-right: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  justify-content: center;
  align-items: center;
`;
export const Box2 = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: #a1eebd;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  text-align: center;
  justify-content: center;
  justify-content: center;
  align-items: center;
`;

export const BoxText = styled.span`
  color: #001524;
  font-size: 36px;
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
