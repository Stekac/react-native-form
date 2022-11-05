
import { useReducer, useState } from 'react';
import './App.css';
import Component1 from './Component1';
import { useForm } from './react-native-form';
import Hidden from './react-native-form/Hidden';

function App() {
  const [, rerender] = useReducer(() => ({}), {});

  return (
    <div className='container mx-auto px-4'>

      <Component1 />
      <button className='rounded border-black' onClick={rerender}>Rerender</button>


      <Hidden id="my-first" />
    </div>
  );
}

export default App;
