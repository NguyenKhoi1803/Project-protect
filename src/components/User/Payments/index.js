import React, { useState } from "react";
import { useSelector } from "react-redux";

function Payments() {
  const paymentsArr = useSelector((state) => state.fetchTourReducer.cart);
  console.log("paymentsArr", paymentsArr);

  const [formFields, setFormFields] = useState([
    {
      name: "",
      phone: "",
      address: "",
      sex: "",
      idCard: "",
      age: "",
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
  };

  const addFields = () => {
    let object = {
      name: "",
      phone: "",
      address: "",
      sex: "",
      idCard: "",
      age: "",
    };
    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="payments__form">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                onChange={(event) => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name="phone"
                placeholder="Phone"
                onChange={(event) => handleFormChange(event, index)}
                value={form.phone}
              />
              <input
                name="address"
                placeholder="Address"
                onChange={(event) => handleFormChange(event, index)}
                value={form.address}
              />
              <input
                name="idCard"
                placeholder="ID Card"
                onChange={(event) => handleFormChange(event, index)}
                value={form.idCard}
              />
              <input
                name="age"
                placeholder="Age"
                onChange={(event) => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}> Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}> Thêm Người </button>
      <button onClick={submit}> Hoàn Thành </button>
    </div>
  );
}

export default Payments;
