// import { useState } from 'react'
import About from './components/About';
import Header from './components/Header'
import Home from './components/Home'
import Functions from './components/Functions'
import { MenuProvider } from './hooks/MenuContext';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div>
    <MenuProvider>
      <Header />
      <Home />
      <About />
      <Functions />
      <Projects />
      <Contact  />
    </MenuProvider>
    </div>
    
  );
}

export default App
