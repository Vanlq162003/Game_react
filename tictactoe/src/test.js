import { useState, useRef, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={handleButtonClick}>Increase Count</button>
    </div>
  );
}
export default MyComponent