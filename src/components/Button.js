import React from 'react';

function Button({ children }) {
  return (
    <button className="font-phudu text-5xl text-orange border-solid border border-orange rounded-3xl py-4 px-12 h-auto  text-center hover:text-white hover:bg-orange max-w-3xl sm:max-w-full">
      {children}
    </button>
  );
}

export default Button;
