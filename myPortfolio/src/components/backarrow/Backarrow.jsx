import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./Backarrow.css";

const Backarrow = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="back-arrow" onClick={() => navigate("/")}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default Backarrow;
