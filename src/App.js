import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={handleSubmit}>
        <div className='basic'>
          <input type="text" 
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder='200 Samsung TV'></input>
          <input value={datetime} 
          onChange={ev => setDatetime(ev.target.value)} 
          type="datetime-local"></input>
        </div>
        <div className='description'>
          <input type="text"
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          placeholder='description'></input>
        </div>
        <button type='submit'>Add new transactions</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>it was time for an upgrade </div>
          </div>
          <div className='right'>
            <div className='price-red'>-$500</div>
            <div className='datetime'>05-16-2024 8:22 pm</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Job: Building Website</div>
            <div className='description'>it was time for an upgrade </div>
          </div>
          <div className='right'>
            <div className='price-green'>+400</div>
            <div className='datetime'>05-16-2024 8:22 pm</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>iPhone</div>
            <div className='description'>it was time for an upgrade </div>
          </div>
          <div className='right'>
            <div className='price-red'>-900</div>
            <div className='datetime'>05-16-2024 8:22 pm</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
