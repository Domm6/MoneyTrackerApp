import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type="text" placeholder='200 Samsung TV'></input>
          <input type="datetime-local"></input>
        </div>
        <div className='description'>
          <input type="text" placeholder='description'></input>
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
            <div className='price'>$500</div>
            <div className='datetime'>05-16-2024 8:22 pm</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>it was time for an upgrade </div>
          </div>
          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>05-16-2024 8:22 pm</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>it was time for an upgrade </div>
          </div>
          <div className='right'>
            <div className='price'>$500</div>
            <div className='datetime'>05-16-2024 8:22 pm</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
