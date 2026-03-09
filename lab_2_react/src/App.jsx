import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Education />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;