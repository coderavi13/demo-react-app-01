import './MyButton.css';
export default function MyButton(props) {
  return (
    <button className="myBtn" onClick={props.handleClick} 
    >{props.name}</button>
  );
}