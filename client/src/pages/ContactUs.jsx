import React from "react";
import {
  FaUserFriends,
  FaCalendarAlt,
  FaComments,
  FaBell,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-base-100 to-base-200">
      <div className="w-20 bg-base-200 flex flex-col items-center py-6 space-y-8 shadow-lg">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="avatar cursor-pointer"
        >
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.pravatar.cc/50?img=1" alt="profile" />
          </div>
        </motion.div>

        <div className="flex flex-col space-y-6 text-xl text-base-content">
          {[MdDashboard, FaUserFriends, FaCalendarAlt, FaComments, FaBell].map(
            (Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="cursor-pointer hover:text-primary transition"
              >
                <Icon />
              </motion.div>
            )
          )}
        </div>
      </div>

      <div className="w-80 border-r border-base-300 flex flex-col bg-base-100 shadow-sm">
        <div className="px-4 py-4 font-bold text-lg border-b border-base-300">
          All Messages
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 cursor-pointer transition"
            >
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={`https://i.pravatar.cc/50?img=${i + 4}`} alt="" />
                </div>
              </div>
              <div>
                <div className="font-semibold">User {i}</div>
                <div className="text-xs text-base-content/60">
                  Last message preview...
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-gradient-to-b from-base-100 to-base-200">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-3"
          >
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/50?img=7" alt="Floyd" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-primary">Floyd Miles</div>
              <div className="bg-base-200 p-3 rounded-2xl shadow-sm max-w-xs">
                Definitely pumped to get started. Did everyone get a chance to
                review the brief for Project Crypto?
              </div>
              <div className="text-xs text-base-content/50 mt-1">01:24 AM</div>
            </div>
          </motion.div>

          {/* Guy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-3"
          >
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/50?img=8" alt="Guy" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-primary">Guy Hawkins</div>
              <div className="bg-base-200 p-3 rounded-2xl shadow-sm max-w-xs">
                Yes, I've looked it over. Seems like a fun challenge. Do we have
                any initial ideas brewing?
              </div>
              <div className="text-xs text-base-content/50 mt-1">01:25 AM</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-end justify-end"
          >
            <div>
              <div className="bg-primary text-primary-content p-3 rounded-2xl shadow-md max-w-xs">
                I've got a few sketches already. Thinking of incorporating some
                sleek animations for the website interface. What do you all
                think?
              </div>
              <div className="text-xs text-base-content/50 text-right mt-1">
                01:32 AM
              </div>
            </div>
          </motion.div>
        </div>

        <div className="p-4 border-t border-base-300 flex items-center gap-3 bg-base-100">
          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered w-full rounded-xl"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary rounded-xl px-6"
          >
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
