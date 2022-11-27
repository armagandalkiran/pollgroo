import usePanelData from "../../../../hooks/usePanelData";
import { StartGamePopup } from "../start-game-popup";
import { useState } from "react";
import { PanelDataItem } from "../../models/interfaces";
import { LOADING_MESSAGE, START } from "../../models/constants";
import { STATE } from "../../models/enums";

export const PanelTable = () => {
  const [showPopup, setShowpopup] = useState({ id: "", status: false });
  const panelData: any = usePanelData();

  const handleStart = (id: string) => {
    return () => setShowpopup({ id, status: true });
  };

  if (panelData === STATE.LOADING) return <div>{LOADING_MESSAGE}</div>;
  else {
    return (
      <div>
        {panelData.games.map((item: PanelDataItem) => {
          return (
            <div key={item.gameId}>
              <div>{item.gameId}</div>
              <button onClick={handleStart(item.gameId)}>{START}</button>
              <StartGamePopup
                showPopup={showPopup}
                setShowPopup={setShowpopup}
                gameId={item.gameId}
              />
            </div>
          );
        })}
      </div>
    );
  }
};
