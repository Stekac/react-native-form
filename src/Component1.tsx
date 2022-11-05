
import { useReducer } from 'react';
import { useForm } from './react-native-form';
import RerenderCounter from './RerenderCounter';

function Component1() {
  const [, rerender] = useReducer(() => ({}), {});
  const formRef = useForm('my-first');

  return (
    <div className='container border p-2 m-2'>
      <h3>Component1</h3>
      <RerenderCounter name='Component1' />
      <form ref={formRef} className='pt-5 flex-row'>
        <label htmlFor="name">Name</label>
        <input id="name" className='border flex' name='name' />
      
        <label htmlFor="name">Surname
        <input className='border flex mt-2' name='surname'/>
        </label>
      </form>
    </div>
  );
}

export default Component1;
