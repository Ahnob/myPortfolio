import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Backarrow.css";

const Backarrow = () => {
  const navigate = useNavigate(); 

  return (
    <div className="back-arrow" onClick={() => navigate("/")}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default Backarrow;
