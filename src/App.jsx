import {
  Card,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from "./components";
// import Hero from "./components/Hero";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
// import { heroapi } from '../src/data/data'

const App = () => {
  return (
    <>
      <Navbar />
      <Card />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapiData={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent data={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent data={sneaker} />
        <Stories stories={story} />
      </main>
      <Footer footerData={footerAPI} />
    </>
  );
};

export default App;

//! 3:09:20    ||    https://www.youtube.com/watch?v=QnykUEqAVoc&list=PL4n09bqE5YCyLF9SzMlcfJSHbsdoJAj-6&index=19
