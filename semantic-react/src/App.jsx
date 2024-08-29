import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Article from "./Article";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <div className="section">
        <Article></Article>
        <Aside></Aside>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

// function App (){
//   const name = 'Billy';
//   function printName(param){
//     return <div>{param}</div>;
//   }
//   return <div>Hello {printName("Khaliukaa")}</div>;
// }
// export default App;
