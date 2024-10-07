// const Input = () => {
//   return (
//     // <div className="flex flex-col gap-[48px]">
//     //   <input
//     //     className="border-2  bg-red-300 w-[100px]"
//     //     type="text"
//     //     placeholder="abcd"
//     //   />
//     //   <input
//     //     className="border-2  bg-red-300 w-[100px]"
//     //     type="password"
//     //     placeholder="****"
//     //   />
//     //   <input className="border-2  bg-red-300 w-[100px]" type="email" />
//     //   <input className="border-2  bg-red-300 w-[100px]" type="number" />
//     //   <input className="border-2  bg-red-300 w-[200px]" type="checkbox" />
//     //   <input className="border-2  bg-red-300 w-[200px]" type="radio" />
//     //   <input className="border-2 w-[100px]" type="hidden" />
//     //   <input className="border-2 w-[100px]" type="button" />
//     //   <input className="border-2 w-[100px]" type="color" />
//     //   <input type="file" />
//     //   <input type="image" />
//     // </div>

import { useState } from "react";

// };
// export default Input;

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("");
  const [premium, setPremium] = useState("");
  const [ultimate, setUltimate] = useState("");
  const [membership, setMembership] = useState("");

  const handleFirstName = (param) => {
    setFirstName(param);
  };
  const handleLastName = (param) => {
    setLastName(param);
  };
  const handleAddress = (param) => {
    setAddress(param);
  };
  const handleAddress2 = (param) => {
    setAddress2(param);
  };
  const handleCity = (param) => {
    setCity(param);
  };
  const handleProvince = (param) => {
    setProvince(param);
  };
  const handleZipCode = (param) => {
    setZipCode(param);
  };
  const handlePhone = (param) => {
    setPhone(param);
  };
  const handleEmail = (param) => {
    setEmail(param);
  };
  const handleStandard = (param) => {
    setStandard(param);
  };
  const handlePremium = (param) => {
    setPremium(param);
  };
  const handleUltimate = (param) => {
    setUltimate(param);
  };
  const handleRadioInput = (param) => {
    setMembership(param);
  };
  const submitButton = () => {
    console.log([
      { FirstName: firstName },
      { LastName: lastName },
      { Address: address },
      { Address2: address2 },
      { City: city },
      { State: province },
      { Postal: zipCode },
      { Phone: phone },
      { Email: email },
      { Membership: membership },
    ]);
  };
  return (
    <div className="  flex  flex-col items-center gap-[80px] px-[200px] py-[200px] border-[4px]">
      <div>
        <h1 className="text-blue-400 text-[32px] font-light">
          New Member Registration
        </h1>
      </div>
      <div className="flex flex-col gap-[48px]">
        <div className="flex gap-[48px]">
          <div className="flex flex-col w-[300px] gap-[16px] ">
            <span>First Name</span>
            <input
              name="firstName"
              className="border-[1px] rounded-xl"
              type="text"
              onChange={(event) => handleFirstName(event.target.value)}
            />
          </div>
          <div className="flex flex-col w-[300px] gap-[16px] ">
            <span>Last Name</span>
            <input
              className="border-[1px] rounded-xl"
              type="text"
              onChange={(event) => handleLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-[48px]">
          <div className="flex flex-col w-[300px] gap-[16px] ">
            <span>Address</span>
            <input
              className="border-[1px] rounded-xl"
              type="text"
              onChange={(event) => handleAddress(event.target.value)}
            />
          </div>
          <div className="flex flex-col w-[300px] gap-[16px] ">
            <span>Address 2</span>
            <input
              className="border-[1px] rounded-xl"
              type="text"
              onChange={(event) => handleAddress2(event.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-[300px] gap-[16px] ">
          <span>City</span>
          <input
            className="border-[1px] rounded-xl"
            type="text"
            onChange={(event) => handleCity(event.target.value)}
          />
        </div>
        <div className="flex gap-[24px] items-center">
          <div className="flex flex-col w-[200px] gap-[16px] ">
            <span>State/Province</span>
            <input
              className="border-[1px] rounded-xl"
              type="text"
              onChange={(event) => handleProvince(event.target.value)}
            />
          </div>
          <div className="flex flex-col w-[150px] gap-[16px] ">
            <span>Zip/Postal Code</span>
            <input
              className="border-[1px] rounded-xl"
              type="number"
              onChange={(event) => handleZipCode(event.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-[300px] gap-[16px] ">
          <span>Phone</span>
          <input
            className="border-[1px] rounded-xl"
            type="number"
            placeholder="(___) ___-___"
            onChange={(event) => handlePhone(event.target.value)}
          />
        </div>
        <div className="flex flex-col w-[300px] gap-[16px] ">
          <span>Email Adress</span>
          <input
            className="border-[1px] rounded-xl"
            type="email"
            onChange={(event) => handleEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col w-[300px] gap-[16px] ">
          <span>Membership Type</span>
          <div className="flex gap-[10px]">
            <div className="flex gap-[5px]">
              <input
                value="Standard"
                name="membershipType"
                className="border-[1px] rounded-xl "
                type="radio"
                onChange={(event) => handleRadioInput(event.target.value)}
              />
              <span>Standard</span>
            </div>
            <div className="flex gap-[5px]">
              <input
                value="Premium"
                name="membershipType"
                className="border-[1px] rounded-xl "
                type="radio"
                onChange={(event) => handleRadioInput(event.target.value)}
              />
              <span>Premium</span>
            </div>
            <div className="flex gap-[5px]">
              <input
                value="Ultimate"
                name="membershipType"
                className="border-[1px] "
                type="radio"
                onChange={(event) => handleRadioInput(event.target.value)}
              />
              <span>Ultimate</span>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={submitButton}
            className="bg-blue-300 text-white px-[16px] rounded-xl hover:bg-blue-100 font-extralight"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
