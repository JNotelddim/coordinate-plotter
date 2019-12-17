import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import SnakeInput from "./SnakeInput";
import AddSnake from "./AddSnake";

let idCounter = 3;

const SnakesOverview = ({ snakes, inputMode }) => {
  const [addingSnake, setAddingSnake] = useState(false);
  const [newSnake, setNewSnake] = useState({
    name: "Snake " + idCounter,
    id: idCounter.toString()
  });

  const snakeSections = snakes.map(snake => (
    <SnakeInput
      id={snake.id}
      isselected={snake.id === inputMode.id}
      key={snake.id}
    />
  ));

  const stopAddingSnake = () => {
    setAddingSnake(false);
    setNewSnake({
      name: "Snake " + ++idCounter,
      id: idCounter.toString()
    });
  };

  return (
    <Grid container item>
      {snakeSections}
      {addingSnake ? (
        <AddSnake
          newSnake={newSnake}
          setNewSnake={setNewSnake}
          stopAddingSnake={stopAddingSnake}
        />
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
