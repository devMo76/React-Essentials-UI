import Header from "./components/Header/Header";
import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
