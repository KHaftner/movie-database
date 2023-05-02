import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NavMain from "./components/NavMain";

function App() {
  return (
    <div className="App">
      <Header className="Page-header">
        <NavMain /> 
      </Header>

      <Main className="page-content" />

      <Footer className="footer" />
    </div>
  );
}

export default App;
