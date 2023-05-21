import React, { useEffect, useState } from "react";

function Dummy(props) {
  const [credentials, setCredentials] = useState({
    data: "",
    payment: localStorage.getItem("fare")
  });

  const [qr, setQR] = useState("");
  const { data, payment } = credentials;
  console.log(credentials)
 
  useEffect(() => {
    setQR(
      `https://api.qrserver.com/v1/create-qr-code/?data=${data} fare=${payment}  &amp"`
    );
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };
  const onChange = (e) => {
 
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="data" id="data" onChange={onChange}  />
          <hr />
          <input type="text" name="payment" id="payment" value={localStorage.getItem("fare")} disabled onChange={onChange} />
        </div>

        <button>OK</button>
      </form>
      <div>
        <img src={qr} alt="image" />
      </div>
    </>
  );
}

export default Dummy;
