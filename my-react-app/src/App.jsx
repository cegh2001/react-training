// import { useState } from 'react'
import About from './components/About';
import Header from './components/Header'
import Home from './components/Home'
import { MenuProvider } from './hooks/MenuContext';


function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div>
    <MenuProvider>
      <Header />
      <Home />
      <About />
    </MenuProvider>
    </div>
    
  );
}

export default App
