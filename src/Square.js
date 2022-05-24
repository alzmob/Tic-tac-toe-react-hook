import React, { useState } from "react";


function Square(props) {
  const { value, onClick } = props;
  const [checkItem, setCheckItem] = useState(null);
  return (
      <button className="square" onClick={() => onClick()}>
          {value}
      </button>
  );
}

export default Square;