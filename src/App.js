import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NavigationItems from "./components/NavigationItems";
import AddNavigation from "./components/AddNavigation";
import Categories from "./components/Categories";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "./data";
import AddCategory from "./components/AddCategory";
import Banners from "./components/Banners";
import BannerItems from "./components/BannerItems";
import HomePageBanners from "./components/HomePageBanners";
import HomeBannersItems from "./components/HomeBannersItems"
import NewHomeBanner from "./components/NewHomeBanner";


function App() {
  const NavigationElements = data.map((items) => {
    return (
      <NavigationItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const CategoryElements = data.map((items) => {
    return (
      <Categories
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const BannersElemets = data.map((items) => {
    return (
      <BannerItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  const HomeBannersElemets = data.map((items) => {
    return (
      <HomeBannersItems
        pagename={items.pagename}
        menutab={items.menutab}
        url={items.url}
        appearance={items.appearance}
        order={items.order}
        status={items.status}
        action={items.action}
      />
    );
  });
  console.log(CategoryElements);
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Navbar />
          </Col>
          <Col>
            <Container>
              <Card>
                <Card.Body>
                  {/* <AddCategory/> */}
                  {/* <AddNavigation/> */}
                  {/* <Categories /> */}
                  {/* <AddNavigation/> */}
                  <Navigation />
                  {NavigationElements}
                  {/* <Banners />
                  {BannersElemets} */}
                  {/* <HomePageBanners/>
                  {HomeBannersElemets} */}
                  {/* <NewHomeBanner/> */}
                  {/* {CategoryElements} */}
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
