import { useEffect, useState } from "react";
import axios from "axios";
import MainOut from "./MainOut";
import "./style.css"

function Main() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [receivedData, setReceivedData] = useState(false);

  const idhand = (e) => {
    setId(e.target.value);
  };
  const passhand = (e) => {
    setPass(e.target.value);
  };

  const submithand = async (e) => {
    e.preventDefault();
    if (id === "" || pass === "") {
      alert("Username or Password cannot be empty");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000", {
        username: id,
        password: pass,
      });

      console.log(response);
      if (response.data) {
        console.log("Login successful");
        // 데이터를 받은 후에 상태를 변경하고자 할 때 콜백 함수 사용
        setReceivedData(true);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    setId("");
    setPass("");
    setTimeout(() => {
      setReceivedData(false);
    }, 100);
  };

  return (
    <>
      <form action="post" onSubmit={submithand}>
        <label htmlFor="username">
          Username:
          <input type="text" value={id} id="username" name="username" onChange={idhand} />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" value={pass} id="password" name="password" onChange={passhand} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <div>
        <MainOut receivedData={receivedData} />
      </div>
    </>
  );
}

export default Main;
