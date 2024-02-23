import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css"

const MainOut = ({ receivedData }) => {
  const [userData, setUserData] = useState(null);
  const { username, password } = userData || {};


  useEffect(() => {
    if (receivedData === true) {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/");
          console.log(response)
          setUserData(response.data);
        } catch (error) {
          console.log('데이터 수신 중 오류 발생', error);
        }
      };

      fetchData();
    }
  }, [receivedData,]);
  return (
    <>
      {
        userData &&(
          <div>
              <h2>Received Data:</h2>
              <p>Username: {username}</p>
              <p>Password: {password}</p>
          </div>
        )
      }
    </>
  );
};

export default MainOut; 