"use client";
import test from "node:test";
import React, { useEffect, useRef, useState } from "react";

import io, { Socket } from "socket.io-client";
const Chats = () => {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const divRef = useRef<any>();
  const send = (val: string) => {
    socket?.emit("ping", message);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message) send(message);
    setMessage("");
  };
  useEffect(() => {
    if (!socket) {
      const newSocket = io(process.env.WS_URL as string);
      setSocket(newSocket);
    }
  }, []);
  useEffect(() => {
    if (divRef.current)
      divRef.current.scrollTop = divRef.current.scrollHeight + 400;
  }, [messages]);
  useEffect(() => {
    console.log("test");

    socket?.on("pong", (data) => {
      setMessages((prv) => [...prv, data]);
    });
  }, [socket]);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div>
        <div ref={divRef} className=" overflow-y-auto h-[400px] max-h-[80%] ">
          <ul className="list-none p-0 flex min-h-full flex-col justify-end">
            {messages.map((message, i) => (
              <li
                key={i}
                className="flex items-center py-2 border-b border-gray-200"
              >
                <p className="text-gray-800 mr-2">{message}</p>
                {/* <span className="text-gray-500 text-sm">{message.sender}</span> */}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="flex mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Send
          </button>
        </form>{" "}
      </div>
    </div>
  );
};

export default Chats;
