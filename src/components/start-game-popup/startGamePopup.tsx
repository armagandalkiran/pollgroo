import { useNavigate } from "react-router-dom";
import {
  ABORT,
  APPROVE,
  POPUP_MESSAGE,
} from "../../pages/Game/models/constants";

interface showPopup {
  id: string;
  status: boolean;
}

interface StartGamePopupProps {
  setShowPopup: (value: showPopup) => void;
  gameId: string;
}

export const StartGamePopup = ({
  setShowPopup,
  gameId,
}: StartGamePopupProps) => {
  const navigate = useNavigate();

  const handleApprove = () => {
    navigate(`/game/${gameId}`);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        opacity: "0.8",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <h3>{POPUP_MESSAGE}</h3>
        <p>{window.location.href + "game/" + gameId}</p>
        <button>{ABORT}</button>
        <button onClick={handleApprove}>{APPROVE}</button>
      </div>
    </div>
  );
};
