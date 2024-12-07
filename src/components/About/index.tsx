import {
  HeroBannerContainer,
  TextMainContainer,
  HeaderText,
  SubText,
  MainContainerImg,
  ImageContainer,
  Image,
  TextSubContainer,
  Box,
  Box2,
  BoxText,
} from "./styles";

const Main = () => {
  return (
    <HeroBannerContainer>
      <TextMainContainer>
        <HeaderText>HiBerlin streamlines Berlin's essentials.</HeaderText>
        <SubText>
          HiBerlin is a platform that helps residents and newcomers in Berlin
          manage essential tasks like processing documents and scheduling
          appointments. It’s designed to simplify complex bureaucratic
          processes, saving users time and effort. Whether it’s registering a
          residence or applying for permits, HiBerlin makes it easier. We do not
          collect any data from users at any level in this application.
        </SubText>
      </TextMainContainer>
      <MainContainerImg>
        <ImageContainer>
          <Image
            src="https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1726733994/800x600/"
            alt="banner"
          />
        </ImageContainer>
        <TextSubContainer>
          <Box>
            <BoxText>Forms</BoxText>
          </Box>
          <Box2>
            <BoxText>Appointments</BoxText>
          </Box2>
        </TextSubContainer>
      </MainContainerImg>
    </HeroBannerContainer>
  );
};

export default Main;
