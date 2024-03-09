import { useRef, useEffect, useState } from 'react';

function UseRefCounter() {
  const useRefcounter = useRef<number>(0);
  const [buttonCounter, setButtonCounter] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  console.log('re-render every time there is a state or props changes...')

  useEffect(() => {
    useRefcounter.current = useRefcounter.current + 1;
    console.log("useRefcounter", useRefcounter)
  })
  return (
    <main>
      <h1>hello from counter</h1>)
      <p>rendering counter {useRefcounter.current}</p>
      <p>counter from button {buttonCounter}</p>
      <p>input entered {inputValue}</p>
      <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
      <button onClick={() => setButtonCounter(buttonCounter + 1)}>Increase Counter</button>
    </main>
  )
}

export default UseRefCounter;
