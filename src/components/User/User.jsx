import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserList.css";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  });

  return (
    <>
      <span className="User_ID">
        <strong>ID:</strong> {user.id}
      </span>
      <span className="User__Name">
        <strong>Nombre:</strong> {user.name}
      </span>
      <a href={`mailto:${user.email}`} className="User__Email">
        <strong>Email:</strong> {user.email}
      </a>
    </>
  );
};

export default User;
