import './App.css';
// import { useContext } from 'react';
// import { Mycontext } from './components/context';
import { chakra } from '@chakra-ui/react';
import Router from './components/router';

function App() {

  return (
    <chakra.div className="App" 
    maxW={'100vw'} 
    // border={'1px solid green'}
    p={2}
    bg={'#000000'}>
      <Router />
    </chakra.div>
  );
}

export default App;
