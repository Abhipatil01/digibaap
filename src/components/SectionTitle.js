import React from 'react';

function SectionTitle({
  title,
  color,
  borderColor,
  borderGapColor,
  textAlign = 'center',
}) {
  return (
    <h2
      className={`font-phudu text-8xl text-${color} text-${textAlign}`}
      style={{
        textShadow: `2px 2px ${borderGapColor}, 3px 3px ${borderColor}`,
      }}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
