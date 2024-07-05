import React, { useState } from 'react';
import View from './components/View';
import Button from './components/UI/Button';
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const countHandler = () => {
    setCount(prevcount => prevcount + 1)
  }

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-4xl'>
      <Button countHandler={countHandler}/>
      <View count={count} />
    </div>
  );
}

export default App;
