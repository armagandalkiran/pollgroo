import { useState, useEffect } from "react";
import io from "socket.io-client";
import { PollTable } from "./components/poll-table";

const socket = io("http://localhost:5000");

export const Game = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    console.log("asda")
    socket.emit("ping");
  };
  return (
    <>
      <div>Game</div>
      <PollTable />
      <div>
        <p>Connected: {"" + isConnected}</p>
        <p>Last pong: {lastPong || "-"}</p>
        <button onClick={sendPing}>Send ping</button>
      </div>
    </>
  );
};
