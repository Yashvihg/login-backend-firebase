import { React, useEffect, useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.conifg";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import users from "./users.json";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebase.conifg";
// import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  // const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    phoneNumber: "",
  });



  // const getUsers = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   // const users = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  //   // setUser(users);
  //   setUser(user);
  // };

  // useEffect(() => {
  //   getUsers();
  // });

  const handleUser = (e) => {
    console.log("e -->", e)
    const newUser = {...user};
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
    console.log(newUser);
  }

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

  //   const formatPh = "+" + ph;
    const formatPh = "+" + user.phoneNumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="bg-stone-900 flex items-center justify-center h-screen">
      <div>
        {/* <Toaster toastOptions={{ duration: 4000 }} /> */}
        {/* <div id="recaptcha-container"></div> */}
        {!user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍 Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            {showOTP ? (
              <>
                <div className="bg-white text-stone-600 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="ph"
                  className="text-center font-bold text-xl text-white"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-stone-600 hover:bg-stone-700 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-stone-600 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <form className="flex flex-col justify-center space-y-3">
                  <label className="text-center font-bold text-xl text-white">Enter Username</label>
                  <input
                    type="text"
                    htmlFor="name"
                    onChange={(e) => handleUser(e)}
                    value={user.fullName}
                    placeholder="Enter your Full Name"
                    className="w-full rounded-md h-11 outline-none px-4 font-bold"
                  />
                  <label
                    htmlFor="ph"
                    className="text-center font-bold text-xl text-white"
                  >
                    Verify your phone number
                  </label>
                  <PhoneInput country={"in"} value={user.phoneNumber} onChange={(e) => handleUser(e)} />
                  <button
                    // type="submit"
                    onClick={onSignup}
                    className="mt-11 py-2.5 bg-stone-600 hover:bg-stone-700 w-full flex gap-1 items-center justify-center text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Send code via SMS</span>
                  </button>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
