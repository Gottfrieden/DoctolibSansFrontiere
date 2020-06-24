import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import configFirebase from './firebase';

function App() {

  const [state, setstate] = useState()

  useEffect(() => {
    firebase.initializeApp(configFirebase);
    const ref = firebase.database().ref('0');
    ref.on('value', snapshot => {
      console.log(snapshot.val())
      setstate(snapshot.val())
    })
  }, [])


  return (
    <div className="App">
    </div>
  );
}

export default App;
