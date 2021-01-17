import React from "react";
import wins from "../images/wins.svg";
import price from "../images/price.svg";
import bet from "../images/bet.svg";

export default function Users({ users, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list">
      <li className="list-header">
        <div>Select</div>
        <div>Player Name</div>
        <div>Level</div>
        <div>Avatar</div>
        <div>
          <img src={bet} alt="" />
          Bet
        </div>
        <div>
          <img src={wins} alt="" />
          Wins
        </div>
        <div>Lost</div>
        <div>
          <img src={price} alt="" />
          Price
        </div>
      </li>
      {users.map((user) => (
        <li key={user.Name} className="list-group-item">
          <div className="container">
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>
          </div>
          <div>{user.Name}</div>
          <div>{user.Level}</div>
          <div>
            <img src={user["Profile Image"]} alt="" />
          </div>
          <div>{user.Bet}</div>
          <div>{user.Wins}</div>
          <div>{user.Lost}</div>
          <div>{user.Price}</div>
        </li>
      ))}
    </ul>
  );
}
