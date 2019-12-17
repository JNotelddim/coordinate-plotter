import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { addSnake } from "../state/snakes/snakes.actions";

const LabelInputPair = ({
  newSnake,
  setNewSnake,
  targetProperty,
  stopAddingSnake
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <div>
      <label>
        Snake {targetProperty.slice(0, 1).toUpperCase()}
        {targetProperty.slice(1)}:
      </label>
      <input
        value={newSnake[targetProperty]}
        onChange={e =>
          setNewSnake({ ...newSnake, [targetProperty]: e.target.value })
        }
        onKeyPress={e => {
          if (e.key === "Enter") {
            console.log(newSnake);
            dispatch(addSnake(newSnake));
            stopAddingSnake();
          }
        }}
      />
    </div>
  );
};
LabelInputPair.propTypes = {
  targetProperty: PropTypes.string,
  setNewSnake: PropTypes.func,
  stopAddingSnake: PropTypes.func,
  newSnake: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
};

export default LabelInputPair;
