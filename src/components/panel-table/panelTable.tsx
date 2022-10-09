import usePanelData from "../../hooks/usePanelData";
import { StartGamePopup } from "../start-game-popup";
import { useState } from "react";
import { PanelDataItem } from "../../pages/Panel/models/interfaces";
import { LOADING_MESSAGE, START } from "../../pages/Panel/models/constants";
import { STATE } from "../../pages/Panel/models/enums";

export const PanelTable = () => {
  const [showPopup, setShowpopup] = useState({ id: "", status: false });
  const panelData = usePanelData();

  const handleStart = (id: string) => {
    setShowpopup({ id, status: true });
  };

  if (panelData === STATE.LOADING) return <div>{LOADING_MESSAGE}</div>;
  else {
    return (
      <div>
        {panelData.map((item: PanelDataItem) => {
          return (
            <div key={item.id}>
              <div>{item.id}</div>
              <button onClick={() => handleStart(item.id)}>{START}</button>
              {showPopup.id === item.id && showPopup.status && (
                <StartGamePopup setShowPopup={setShowpopup} gameId={item.id} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
};
