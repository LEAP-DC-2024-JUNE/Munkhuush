import "../App.css";
import Nav from "../Nav";

function Home() {
  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <header>Header</header>
        <bar>Navbar</bar>
        <div className="section">
          <article>Article</article>
          <aside>Aside</aside>
        </div>
        <footer>Footer</footer>
      </div>
    </div>
  );
}

export default Home;
