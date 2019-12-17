import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import SnakeInput, { SnakeWrapper } from "./SnakeInput";
import { addSnake } from "../state/snakes/snakes.actions";

let idCounter = 3;

const LabelInputPair = ({ newSnake, setNewSnake, targetProperty }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Snake {targetProperty.slice(0, 1).toUpperCase()}
        {targetProperty.slice(1)}:
      </label>
      <input
        key={10 + newSnake.id + targetProperty}
        value={newSnake[targetProperty]}
        onChange={e =>
          setNewSnake({ ...newSnake, [targetProperty]: e.target.value })
        }
        onKeyPress={e => {
          if (e.key === "Enter") {
            console.log(newSnake);
            dispatch(addSnake(newSnake));
          }
        }}
      />
    </div>
  );
};
LabelInputPair.propTypes = {
  targetProperty: PropTypes.string,
  setNewSnake: PropTypes.func,
  newSnake: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
};

const SnakesOverview = ({ snakes, inputMode }) => {
  const [addingSnake, setAddingSnake] = useState(false);
  const [newSnake, setNewSnake] = useState({
    name: "New Snake",
    id: (idCounter++).toString()
  });

  const snakeSections = snakes.map(snake => (
    <SnakeInput
      id={snake.id}
      isselected={snake.id === inputMode.id}
      key={snake.id}
    />
  ));

  return (
    <Grid container item>
      {snakeSections}
      {addingSnake ? (
        <SnakeWrapper container item>
          <LabelInputPair
            key={1}
            targetProperty="name"
            newSnake={newSnake}
            setNewSnake={setNewSnake}
          />
          <LabelInputPair
            key={2}
            targetProperty="id"
            newSnake={newSnake}
            setNewSnake={setNewSnake}
          />
        </SnakeWrapper>
      ) : (
        <button onClick={() => setAddingSnake(true)}>Add Snake</button>
      )}
    </Grid>
  );
};
SnakesOverview.propTypes = {
  snakes: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
  ),
  inputMode: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
};

const mapStateToProps = state => {
  console.log(state.snakes);
  return {
    snakes: state.snakes,
    inputMode: state.grid.inputMode
  };
};

export default connect(mapStateToProps)(SnakesOverview);
