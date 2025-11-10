import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Chatting from "../components/Chatting";
import api from "../config/Api";
import socketAPI from "../config/WebSocket";
import { toast } from "react-hot-toast";

const ChatPage = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");

  const fetchAllUser = async () => {
    try {
      const res = await api.get("/user/allUsers");
      setUsers(res.data.data);
    } catch (error) {
      console.error("Error during fetching users:", error);
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    if (!user && !isLogin) {
      navigate("/login");
    } else {
      fetchAllUser();
      socketAPI.emit("CreatePath", user._id);
    }

    return () => {
      user?._id && socketAPI.emit("DeletePath", user._id);
    };
  }, [user, isLogin, navigate]);

  return (
    <div className="min-h-screen bg-base-200 flex">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-base-300 bg-base-100 shadow-lg flex flex-col">
        {/* Current User */}
        <div className="flex gap-4 items-center p-4 border-b border-base-300">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photo || "/default-avatar.png"} alt="me" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary">
              {user?.fullName}
            </h2>
            <p className="text-sm text-secondary">{user?.email}</p>
          </div>
        </div>

        {/* Friends List */}
        <div className="flex-1 overflow-y-auto p-3">
          <h3 className="text-sm font-bold text-secondary mb-2">Friends</h3>
          <div className="space-y-2">
            {users &&
              users.map((element, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition 
            ${
              selectedFriend?._id === element._id
                ? "bg-primary text-primary-content"
                : "bg-base-200 hover:bg-primary hover:text-primary-content"
            }`}
                  onClick={() => setSelectedFriend(element)}
                >
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                      <img
                        src={element.photo || "/default-avatar.png"}
                        alt={element.fullName}
                      />
                    </div>
                  </div>
                  <span className="text-lg font-medium">
                    {element.fullName}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Chatting Area */}
      <div className="flex-1 flex flex-col">
        {selectedFriend ? (
          <Chatting friend={selectedFriend} />
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-400 text-lg">
            👋 Select a friend to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
