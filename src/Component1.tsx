
import { useReducer } from 'react';
import { useForm } from './react-native-form';

function Component1() {
  const [, rerender] = useReducer(() => ({}), {});
  const formRef = useForm('my-first');

  return (
    <div className='container mx-auto px-4'>
      <form ref={formRef} className='pt-5 flex-row'>
        <label htmlFor="name">Name</label>
        <input id="name" className='border flex' name='name' />
      
        <label htmlFor="name">Surname
        <input className='border flex mt-2' name='surname'/>
        </label>
      </form>

      <button className='rounded border-black' onClick={rerender}>Rerender</button>
    </div>
  );
}

export default Component1;
