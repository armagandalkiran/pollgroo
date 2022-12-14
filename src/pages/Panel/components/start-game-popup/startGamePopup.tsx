import { useNavigate } from "react-router-dom";
import {
  ABORT,
  APPROVE,
  START_GAME_POPUP_MESSAGE,
} from "../../../Panel/models/constants";

interface ShowPopup {
  id: string;
  status: boolean;
}

interface StartGamePopupProps {
  showPopup: ShowPopup;
  setShowPopup: (value: ShowPopup) => void;
  gameId: string;
}

export const StartGamePopup = ({
  showPopup,
  setShowPopup,
  gameId,
}: StartGamePopupProps) => {
  const navigate = useNavigate();
  if (!showPopup.status && showPopup.id !== gameId) {
    return null;
  }

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
        <h3>{START_GAME_POPUP_MESSAGE}</h3>
        <p>{window.location.href + "game/" + gameId}</p>
        <button>{ABORT}</button>
        <button onClick={handleApprove}>{APPROVE}</button>
      </div>
    </div>
  );
};
