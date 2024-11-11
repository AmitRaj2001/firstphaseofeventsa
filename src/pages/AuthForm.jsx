import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from '../components/Button';
import Input from '../components/Input';

const PinInput = ({ value, onChange, label }) => {
  return (
    <div className="space-y-2">
      <label>{label}</label>
      <div className="flex space-x-2">
        {[0, 1, 2, 3].map((index) => (
          <Input
            key={index}
            type="text"
            maxLength={1}
            value={value[index]}
            onChange={(e) => onChange(index, e.target.value)}
            className="w-12 h-12 text-center"
          />
        ))}
      </div>
    </div>
  );
};

const AuthForm = () => {
  const [view, setView] = useState("initial");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [pin, setPin] = useState(["", "", "", ""]);
  const [otp, setOtp] = useState("");
  const [isPhoneSignUp, setIsPhoneSignUp] = useState(true);

  const navigate = useNavigate(); // Initialize navigate

  const handlePinChange = (index, value) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", {
      view,
      phoneOrEmail,
      pin: pin.join(""),
      otp,
    });
    // Redirect after form submission, can use history.push or useNavigate here
    window.location.href = "/homepage";  // This will simulate a redirect to /homepage
  };

  
  
  const renderInitialView = () => (
    <>
      <div className="flex space-x-2 mb-6">
        <Button
          onClick={() => {
            setView("sign_up");
            navigate("/sign_up"); // Change URL when clicked
          }}
          className={`flex-1 bg-gray-200 text-black border border-gray-300`}
        >
          sign_up
        </Button>
        <Button
          onClick={() => {
            setView("log_in");
            navigate("/log_in"); // Change URL when clicked
          }}
          className={`flex-1 bg-gray-200 text-black border border-gray-300`}
        >
          log_in
        </Button>
      </div>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Enter Phone Number/Email ID"
          value={phoneOrEmail}
          onChange={(e) => setPhoneOrEmail(e.target.value)}
        />
        <PinInput value={pin} onChange={handlePinChange} label="Enter Temporary Pin" />
        <PinInput value={["", "", "", ""]} onChange={() => {}} label="Create New Pin" />
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
          Submit
        </button>
      </div>
    </>
  );

  const renderLoginView = () => (
    <>
      <div className="flex space-x-2 mb-6">
        <Button
          onClick={() => {
            setView("sign_up");
            navigate("/sign_up");
          }}
          className={`flex-1 ${view === "sign_up" ? 'bg-gray-400 text-white' : 'bg-gray-200 text-black'} border border-gray-300`}
        >
          sign_up
        </Button>
        <Button
          onClick={() => {
            setView("log_in");
            navigate("/log_in");
          }}
          className={`flex-1 ${view === "log_in" ? 'bg-gray-400 text-white' : 'bg-gray-200 text-black'} border border-gray-300`}
        >
          log_in
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter Phone Number/Email ID"
          value={phoneOrEmail}
          onChange={(e) => setPhoneOrEmail(e.target.value)}
        />
        <PinInput value={pin} onChange={handlePinChange} label="Enter Pin" />
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
          Submit
        </button>
      </form>
    </>
  );

  const renderSignupView = () => (
    <>
      <div className="flex space-x-2 mb-6">
        <Button
          onClick={() => {
            setView("sign_up");
            navigate("/sign_up");
          }}
          className={`flex-1 ${view === "sign_up" ? 'bg-gray-400 text-white' : 'bg-gray-200 text-black'} border border-gray-300`}
        >
          sign_up
        </Button>
        <Button
          onClick={() => {
            setView("log_in");
            navigate("/log_in");
          }}
          className={`flex-1 ${view === "log_in" ? 'bg-gray-400 text-white' : 'bg-gray-200 text-black'} border border-gray-300`}
        >
          log_in
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4 mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              checked={isPhoneSignUp}
              onChange={() => setIsPhoneSignUp(true)}
              className="mr-2"
            />
            By Phone Number
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              checked={!isPhoneSignUp}
              onChange={() => setIsPhoneSignUp(false)}
              className="mr-2"
            />
            By Email ID
          </label>
        </div>
        <Input
          type={isPhoneSignUp ? "tel" : "email"}
          placeholder={`Enter ${isPhoneSignUp ? "Phone Number" : "Email ID"}`}
          value={phoneOrEmail}
          onChange={(e) => setPhoneOrEmail(e.target.value)}
        />
        <Input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <PinInput value={pin} onChange={handlePinChange} label="Create Pin" />
        <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
          Submit
        </button>
      </form>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {view === "initial" && renderInitialView()}
        {view === "log_in" && renderLoginView()}
        {view === "sign_up" && renderSignupView()}
      </div>
    </div>
  );
};

export default AuthForm;
