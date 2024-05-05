"use client";
import test from "node:test";
import React, { useEffect, useState } from "react";

import io, { Socket } from "socket.io-client";
const Signin = () => {
  const [socket, setSocket] = useState<Socket>();
  const [mesages, setMessages] = useState<string[]>([]);
  const send = (val: string) => {
    console.log(val);

    socket?.emit("ping", { user: "me", message: val });
  };
  useEffect(() => {
    if (!socket) {
      const newSocket = io(process.env.WS_URL as string);
      setSocket(newSocket);
    }
  }, []);
  useEffect(() => {
    socket?.on("pong", (data) => {
      console.log(data);
    });
  });
  return (
    <>
      <button onClick={() => send("message")}>SEND</button>
    </>
  );
};

export default Signin;
