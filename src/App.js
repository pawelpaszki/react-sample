import { useState, useEffect } from "react";
import logo from './crest.svg';
import './App.css';

import { increaseCounter } from '../src/api/counter'

function App() {
  // eslint-disable-next-line
  const [counter, setCounter] = useState(0)
  // eslint-disable-next-line
  const [instanceID, setInstanceID] = useState("")
  // eslint-disable-next-line
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function getCounter() {
      if (!fetched) {
        const instanceData = await increaseCounter();
        setCounter(instanceData.counter);
        setInstanceID(instanceData.instanceId);
        console.log(`fetched from db: counter value: '${instanceData.counter}', instance ID: '${instanceData.instanceId}'`);
        setFetched(true);
      }
    }

    getCounter()
  }, []);

  if (!fetched) {
    return <>
      <div>
        Counter: {counter}
      </div>
    </>
  }

  return <>
    <div>
      <div>
        Counter:
      </div>
      <h4 id="counter">
        {counter}
      </h4>
      <div>
        Instance ID:
      </div>
      <h5 id="instance-id">
        {instanceID}
      </h5>
      <img alt="" src={logo} className="logo react" />
    </div>
  </>
}

export default App
