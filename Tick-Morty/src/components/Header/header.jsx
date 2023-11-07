import { Svgfondo } from "../utilidades/svgfondo";
import { Svgtop } from "../utilidades/svgtop";
function Header() {
  return (
    <header>
      <div className="fotito">
        <Svgtop />
        <div className="botones">
          <a className="dous" href="https://rickandmortyapi.com/documentation">
            Docs
          </a>
          <a className="dous_about" href="https://rickandmortyapi.com/about">
            about
          </a>
          <a className="support" href="https://rickandmortyapi.com/support-us/">
            Support us
          </a>
        </div>
      </div>
      <div className="titulo">
        <h1> The Rick and Morty API</h1>
      </div>
      <div className="fondo">
        <Svgfondo />
      </div>
    </header>
  );
}

export default Header;
