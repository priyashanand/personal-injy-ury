import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Footer from './components/Footer';
import InfiniteSlider from './components/InfiniteSlider'


function App() {
  return (
    <div className="font-inter antialiased text-gray-900 bg-white"> 
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <InfiniteSlider/>
        <Section8 />
        <Section9 />

        <Footer/>

      </main>
    </div>
  );
}

export default App;