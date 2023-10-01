import React from 'react';
import Call from '../images/call-me-back.svg';

function CallMeBack() {
  return (
    <div className="fixed bottom-10 left-10 z-10 cursor-pointer">
      <img src={Call} className="h-28 w-28 md:h-full md:w-full" />
    </div>
  );
}

export default CallMeBack;
