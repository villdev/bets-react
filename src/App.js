import React from "react";
// import axios from "axios";
import UsersList from "./components/UsersList";
import Menu from "./components/Menu";
import "./css/style.css";

//----- users api endpoint
const endpoint =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json";

export default function App() {
  return (
    <div className="wrapper">
      <Menu />
      <UsersList endpoint={endpoint} />
    </div>
  );
}
