import React, { useEffect, useState } from "react";
function BillingInfo() {
  const [credentials, setCredentials] = useState({
    data: localStorage.getItem("company"),
    payment: localStorage.getItem("fare"),
  });

  const [qr, setQR] = useState("");
  const { data, payment } = credentials;
  console.log(credentials);


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
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Company
          </label>
          <input
            type="text"
            value={localStorage.getItem("company")}
            disabled
            class="form-control"
            id="data"
            name="data"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Travel Number
          </label>
          <input
            type="text"
            value={localStorage.getItem("number")}
            disabled
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Fare
          </label>
          <input
            type="text"
            disabled
            value={localStorage.getItem("fare")}
            class="form-control"
            id="payment"
            name="payment"
          />
        </div>
        <div>
          <img src={qr} alt="image" />
        </div>
      </form>
    </>
  );
}

export default BillingInfo;
