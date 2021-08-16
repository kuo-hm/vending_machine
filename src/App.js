import NavBar from "./Components/NavBar";
import { Layout } from "antd";
// import AlphaThumbnail from "./Components/AlphaThumbnail";
import Contents from "./Components/Contents";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      {/* 
      <AlphaThumbnail /> */}
      <Content style={{ padding: "0 50px" }}>
        <Contents />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Alpha Vending ©2021 Created by Alpha Vending
      </Footer>
    </Layout>
  );
}

export default App;
