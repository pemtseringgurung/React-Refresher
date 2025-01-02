import {CORE_CONCEPTS } from "./data.js"
import Header from './components/Header/Header.jsx'
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";



function App() {
  function handleClick(){
    console.log("Hello World! - selected")
}
  return (
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
              <TabButton onSelect={handleClick}>Components</TabButton>
              <TabButton onSelect={handleClick}>JSX</TabButton>
              <TabButton onSelect={handleClick}>Props</TabButton>
              <TabButton onSelect={handleClick}>State</TabButton>
          </menu>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;