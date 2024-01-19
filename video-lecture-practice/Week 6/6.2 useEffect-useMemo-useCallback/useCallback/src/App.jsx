import { memo, useCallback, useState } from 'react'

var a = 1;
function App() {
  const [counter, setCounter] = useState(0);

  // const a = useCallback(function a(){
  //   console.log("hi there");
  // }, []);

  var a = {
    sum: 1
  };

  return (
    <>
    <button onClick={() => {
      setCounter(counter + 1);
    }} >Counter ({counter})</button>

    <Demo a={a} />
    </>
  )
}

const Demo = memo(function({a}){
  console.log('rerender');
  return <div>
    hi there 
  </div>
})

export default App
