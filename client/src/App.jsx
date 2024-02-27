import { useState, useEffect, useRef } from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import MainComponent from "./components/MainComponent";

function App() {
  const initialInputs = () => {
    const data = localStorage.getItem("userInput");
    return data
      ? JSON.parse(data)
      : {
          name: "Dhinesh",
          userName: "dhinez",
          profilePic: "../assets/Picture.jpg",
          socialPlatform: 1,
          content: `Got a love that can't be contained? Say it with a Nalgene Custom Bottle! 😍 Upload photos and graphics, or choose from our sweet stash to create one-of-a-kind gifts they'll cherish. Use code LUVYA for 20% off when you order two or more: http://bit.ly/NalgeneCustomTW`,
          selectBg: 1,
          rounded: 10,
        };
  };

  const [userDetails, setUserDetails] = useState(initialInputs());

  useEffect(() => {
    localStorage.setItem("userInput", JSON.stringify(userDetails));
  }, [userDetails]);

  const divRef = useRef(null);

  return (
    <>
      <TopNav />
      <SideNav setUserDetails={setUserDetails} userDetails={userDetails} />
      <MainComponent userDetails={userDetails} />
    </>
  );
}

export default App;
