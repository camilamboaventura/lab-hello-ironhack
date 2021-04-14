import "./App.css";

function App() {
  return (
    <div className="">
      <section className="background">
        <nav>
          <ul>
            <img
              className="imageTop"
              src="./images/ironhack-logo.svg"
              alt="logo iron"
            />
            <img className="menu" src="./images/menu-top.svg" alt="logo iron" />
          </ul>
        </nav>

        <div className="container">
          <div className="say-hello">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
          </div>
          <button className="button">Awesome!</button>
        </div>
      </section>
      <section className="components-box">
        <div className="declarative">
          <img
            className="component-img"
            src="./images/icon1.png"
            alt="declarative img"
          />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="components">
          <img
            className="component-img"
            src="./images/icon2.png"
            alt="components img"
          />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="single-way">
          <img
            className="component-img"
            src="./images/icon3.png"
            alt="single-way img"
          />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="jsx">
          <img className="component-img" src="./images/icon4.png" alt="jsx img" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
