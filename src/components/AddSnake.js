import React from "react";
import PT from "prop-types";

import { SnakeWrapper } from "./SnakeInput";
import LabelInputPair from "./LabelInputPair";

const AddSnake = ({ newSnake, setNewSnake, stopAddingSnake }) => {
  return (
    <SnakeWrapper container item>
      <LabelInputPair
        key={1}
        targetProperty="name"
        newSnake={newSnake}
        setNewSnake={setNewSnake}
        stopAddingSnake={stopAddingSnake}
      />
      <LabelInputPair
        key={2}
        targetProperty="id"
        newSnake={newSnake}
        setNewSnake={setNewSnake}
        stopAddingSnake={stopAddingSnake}
      />
      <button style={{ float: "right" }} onClick={stopAddingSnake}>
        Cancel
      </button>
    </SnakeWrapper>
  );
};
AddSnake.propTypes = {
  newSnake: PT.shape({ name: PT.string, id: PT.string }),
  setNewSnake: PT.func,
  stopAddingSnake: PT.func
};

export default AddSnake;
