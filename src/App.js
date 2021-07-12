import { useContext } from "react";
import { ExampleProvider, ExampleContext } from "./Context"; 

function Header() {
  const { language, setLanguage } = useContext(ExampleContext);

  return (
    <header>
      <div>
        <h1>React Context API Example</h1>
      </div>
      <div className={"btn-grp"}>
        <button
          className={language === "en" && "active"}
          onClick={() => setLanguage("en")}
        >
          en
        </button>
        <button
          className={language === "fr" && "active"}
          onClick={() => setLanguage("fr")}
        >
          fr
        </button>
      </div>
    </header>
  );
}

function Footer() {
  const { globalData } = useContext(ExampleContext);

  return (
    <footer>
      <p>{globalData.footerText}</p>
    </footer>
  );
}

function Content() {
  const { globalData } = useContext(ExampleContext);
  return <h2>{globalData.content}</h2>;
}

function App() {
  return (
    <ExampleProvider>
      <div className="container">
        <Header />
        <div className="content">
          <Content />
        </div>
        <Footer />
      </div>
    </ExampleProvider>
  );
}

export default App;
