/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Banner,
  TextHeaderContainer,
  HeadText,
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchButton,
  Dropdown,
  BoxWrapper,
  BoxContainer,
  Box,
  Grid,
  NameAndIconContainer,
  Name,
  Icon,
  CtgAndFindLinks,
  CtgName,
  BtnContainer,
  BtnText,
} from "./styles";
// Data //
import data from "../../assets/data.json";
// Router //
import { Link } from "react-router-dom";

const Main = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryNames = data.categories.map((category) => category.category);
  // Flatten the items and apply filtering //
  const allItems = data.categories.flatMap((category) => category.items);
  const filteredItems = allItems.filter(
    (item) =>
      // Filter by selected category and search term //
      (selectedCategory ? item.ctg === selectedCategory : true) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render items in boxes //
  const renderBoxes = () => {
    return filteredItems.map((item) => {
      const link = (item as any).routerLink || item.link;

      return (
        <Box key={item.id}>
          <Grid style={{ backgroundColor: item.color }}>
            <NameAndIconContainer>
              <Name>{item.name}</Name>
              <Icon src={item.img} alt={`${item.name} Icon`} />
            </NameAndIconContainer>
          </Grid>
          <CtgAndFindLinks>
            <CtgName>{item.ctg}</CtgName>
            {link ? (
              (item as any).routerLink ? (
                <Link to={link}>
                  <BtnContainer>
                    <BtnText>Edit now</BtnText>
                  </BtnContainer>
                </Link>
              ) : (
                <BtnContainer href={link}>
                  <BtnText>Visit ➤</BtnText>
                </BtnContainer>
              )
            ) : null}
          </CtgAndFindLinks>
        </Box>
      );
    });
  };

  return (
    <>
      <Banner>
        <TextHeaderContainer>
          <HeadText>
            Berlin Essentials: Documents, Housing, Transportation & More!
          </HeadText>
        </TextHeaderContainer>
        <SearchContainer>
          <SearchWrapper style={{ position: "relative", width: "100%" }}>
            <SearchInput
              type="text"
              placeholder="Search items..."
              onFocus={() => setDropdownVisible(true)}
              onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            {isDropdownVisible && (
              <Dropdown>
                {/* Display category names */}
                {categoryNames.length > 0 ? (
                  categoryNames.map((category, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedCategory(category);
                        setDropdownVisible(false);
                      }}
                    >
                      {category}
                    </div>
                  ))
                ) : (
                  <div>No categories found</div>
                )}
              </Dropdown>
            )}
          </SearchWrapper>
          <SearchButton>Search</SearchButton>
        </SearchContainer>
      </Banner>
      <BoxWrapper>
        <BoxContainer>{renderBoxes()}</BoxContainer>
      </BoxWrapper>
    </>
  );
};

export default Main;
