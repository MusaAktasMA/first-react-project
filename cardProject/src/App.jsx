import "bulma/css/bulma.css";
import "./App.css";
import { Course } from "./Course";
import cyberpunk from "./images/cyberpunk.jpg";
import hades from "./images/whatremainsofedithfinch.jpg";
import little from "./images/littlenightmares.jpg";
import satisfactory from "./images/satisfactory.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-danger">
        <div className="hero-body">
          <p className="title">Games</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
        <div className="columns">
          <div className="column">
            <Course
              image={cyberpunk}
              title="Cyberpunk 2077"
              description="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem quaerat, autem impedit earum pariatur. Elapiente volupt"
            />
          </div>
          <div className="column">
            <Course
              image={hades}
              title="Edith Finch"
              description="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem quaerat, autem impedit earum pariatur. Elapiente volupt"
            />
          </div>
          <div className="column">
            <Course
              image={little}
              title="Little Nightmares"
              description="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem quaerat, autem impedit earum pariatur. Elapiente volupt"
            />
          </div>
          <div className="column">
            <Course
              image={satisfactory}
              title="Zelda"
              description="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem quaerat, autem impedit earum pariatur. Elapiente volupt"
            />
          </div>
        </div>
        </section>
        
      </div>
    </div>
  );
}

export default App;
