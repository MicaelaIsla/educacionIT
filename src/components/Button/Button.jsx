import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <Link className={props.class} to={props.link}>
      {props.text}
    </Link>
  );
};

export default Button;
