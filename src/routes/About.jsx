import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
function About() {
  const [myselfData, setMyselfData] = useState({});

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/myself/', {
        headers: { Authorization: 'Token 83c1e3ae6757ef9b5d9878a3f96dc99e32ce41b0' }
      })
      .then(res => {
        setMyselfData(res.data);
      });
  }, []);
  return (
    <div>
      <Header />
      About
      <p>ID: {myselfData.id}</p>
      <p>UserName: {myselfData.username}</p>
      <p>Pass: {myselfData.password}</p>
    </div>
  );
}

export default About;
