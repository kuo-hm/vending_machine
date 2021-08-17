import NavBar from "./Components/NavBar";
import { Layout } from "antd";
// import AlphaThumbnail from "./Components/AlphaThumbnail";
import Contents from "./Components/Contents";
import "./App.css";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <NavBar />
      </Header>
      {/* 
      <AlphaThumbnail /> */}
      <Content style={{ padding: "0 50px", margin: "150px 0" }}>
        <Contents />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Alpha Vending ©2021 Created by Alpha Vending
      </Footer>
    </Layout>
  );
}

export default App;
