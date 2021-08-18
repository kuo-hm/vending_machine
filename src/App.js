import NavBar from "./Components/NavBar";
import { Layout } from "antd";
// import AlphaThumbnail from "./Components/AlphaThumbnail";
import Contents from "./Components/Contents";
import "./App.css";
const { Header, Footer } = Layout;

function App() {
  return (
    <div>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <NavBar />
      </Header>
      {/* 
      <AlphaThumbnail /> */}
      <Contents />
      <Footer style={{ textAlign: "center" }}>
        Alpha Vending ©2021 Created by Alpha Vending
      </Footer>
    </div>
  );
}

export default App;
