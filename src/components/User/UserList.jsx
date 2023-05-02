import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      {users.map((user, index) => (
        <Link key={index} to={`/users/${user.id}`} className="User__Link">
          <span className="User_ID">
            <strong>ID:</strong> {user.id}
          </span>
          <span className="User__Name">
            <strong>Nombre:</strong> {user.name}
          </span>
          <a href={`mailto:${user.email}`} className="User__Email">
            <strong>Email:</strong> {user.email}
          </a>
        </Link>
      ))}
    </>
  );
};

export default UserList;
