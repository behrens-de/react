import { useState, useEffect } from "react";

function Header() {
  // use State
  const [state, setstate] = useState(0);

  // use Effect
  useEffect(() => {
    console.log(`Aktueller state = %c ${state}`, "color: green");
    return () => {
      // cleanup
    };
  }, [state]);

  const updateEffect = () => {
    setstate((state) => (state += 1));
  };

  return (
    <>
      <header>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">React &amp; Bulma </p>
            <p className="subtitle">...a demo project</p>
          </div>
        </section>
        <h3>Hello React</h3>
        <button onClick={updateEffect}>Plus 1</button>
      </header>
    </>
  );
}

export default Header;
