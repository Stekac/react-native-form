
import { useReducer, useState } from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Hidden from './react-native-form/Hidden';
import RerenderCounter from './RerenderCounter';

function App() {
  const [, rerender] = useReducer(() => ({}), {});

  return (
    <div className='container mx-auto border p-2 m-2'>
      <RerenderCounter name='App' />
      <Component1 />
      <Component2 />
      <button className='rounded border-black' onClick={rerender}>Rerender</button>


      <Hidden id="my-first" />
    </div>
  );
}

export default App;
