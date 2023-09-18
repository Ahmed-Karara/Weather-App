import React from "react";

const TopNav = ({ setLocation }) => {
  const buttons = [
    { id: 0, city: "london" },
    { id: 1, city: "paris" },
    { id: 2, city: "new york" },
    { id: 3, city: "tokyo" },
    { id: 4, city: "berlin" },
  ];

  return (
    <div className="flex mx-auto items-center justify-around gap-3 my-6 w-3/4 flex-wrap">
      {buttons.map((button) => {
        return (
          <button
            key={button.id}
            className="text-white text-lg font-medium capitalize transition ease-out   hover:text-red-400"
            onClick={() => setLocation({ q: button.city })}
          >
            {button.city}
          </button>
        );
      })}
    </div>
  );
};

export default TopNav;
