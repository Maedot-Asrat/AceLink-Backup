import "./profilecard.css";
import { Link } from 'react-router-dom';

export default function Profilecard({ id, image, name, title, cost }) {
    console.log(id); 
  return (
    <div className="profilecard">
       
      <div className="cont">
        <img src={image} alt="" />
        <div className="text">
          <span className="name">{name}</span>
          <div className="title">{title}</div>
          <div className="cost">${cost} per Session</div>
        </div>
      </div>
      <div className="btn">
        <Link to={`/tutorProfile/${id}`}>View {name}'s profile</Link> {/* Use id correctly here */}
      </div>
    </div>
  );
}
