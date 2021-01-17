import React, { useState, useEffect } from "react";
import Users from "./Users";
import Pagination from "./Pagination";

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function UsersList({ endpoint }) {
  //----- state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage, setUsersPerPage] = useState(10)
  const usersPerPage = 10;

  //----- fetch users from api
  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        const newList = json.map((user) => {
          user["Level"] = getRandomInt(1, 20);
          user["Wins"] = getRandomInt(1, 35);
          user["Lost"] = getRandomInt(1, 35);
          return user;
        });
        setUsers(newList);
        setLoading(false);
      })
      .catch((e) => console.log("error: ", e));
  }, []);

  //----- Get current users (for pagination)
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);
  //----- func handling page select for pagination
  const paginate = (number) => {
    setCurrentPage((page) => clamp(page + number, 1, totalPages));
  };
  console.log(users);
  return (
    <div className="userlist-wrapper">
      <h2 className="userlist-header">Select Playing 9</h2>
      <input
        type="text"
        name="search-user"
        id=""
        placeholder="Search Players"
        className="userlist-search"
      />
      <Users users={currentUsers} loading={loading} />
      <Pagination
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
}
