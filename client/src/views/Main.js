import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Login.css"

function Main() {
  const [userdata, setUserData] = useState(null);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userNn, setUserNn] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/main')
      .then((res) => {
        console.log('Response from server:', res.data);
        setUserData(res.data);
      })
      .catch(error => console.error(error.response.data));
  }, []);

    async function handleSubmit(){
      await axios.post('http://localhost:4000/main', {id : userId, pw : userPw, Nn : userNn})
    }

  return (
    <div>
      <h1>hihi</h1>

      {userdata ? (
        userdata.map((userD) => (
          <h1 key={userD.user_id}>
            {userD.user_nickname}
          </h1>
        ))
      ) : (
        <p>Loading</p>
      )}

      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
            <input
        type="text"
        value={userPw}
        onChange={(e) => setUserPw(e.target.value)}
      />
            <input
        type="text"
        value={userNn}
        onChange={(e) => setUserNn(e.target.value)}
      />
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}


export default Main;