import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import randomColors from '../../helpers/helpers';

import Stats from '../Stats/Stats';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    width: 500,
    margin: '0 auto',
  },
  paper: {
    display: 'flex',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '0 auto',
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  active: {
    width: 100,
  },
}));

const App = () => {
  const classes = useStyles();
  const [colors, setColors] = useState(randomColors());
  const [implementation, setImplementation] = useState(0);
  const [counterAttempt, setCounterAttempt] = useState(0);
  const [wins, setWins] = useState(0);
  const [bestResult, setbestResult] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const clearState = () => {
    setColors(randomColors());
    setImplementation(0);
    setCounterAttempt(0);
  };

  useEffect(() => {
    const findOpenedColors = colors.filter((item) => item.isOpen);
    if (findOpenedColors.length === 2) {
      setCounterAttempt((prev) => prev + 1);
      setDisabled(true);
      setTimeout(() => {
        if (findOpenedColors[0].color === findOpenedColors[1].color) {
          const comletedColors = colors.map((item) =>
            item.isOpen ? { ...item, isOpen: false, isCompleted: true } : item,
          );
          setImplementation((prev) => prev + 1);
          setDisabled(false);
          return setColors(comletedColors);
        }
        const differentСolors = colors.map((item) =>
          item.isOpen ? { ...item, isOpen: false } : item,
        );
        setDisabled(false);

        return setColors(differentСolors);
      }, 500);
    }

    if (implementation === 8) {
      setWins((prev) => prev + 1);
      if (bestResult) {
        setbestResult((prev) =>
          prev > counterAttempt ? counterAttempt : prev,
        );
      } else {
        setbestResult(counterAttempt);
      }

      clearState();
    }
  }, [colors]);

  const handleClick = (i) => {
    if (colors[i].isCompleted || colors[i].isOpen) return;

    const findColorByIndex = colors.map((item, index) =>
      index === i ? { ...item, isOpen: true } : item,
    );

    setColors(findColorByIndex);
  };

  return (
    <main className={classes.root}>
      <Stats
        implementation={implementation}
        counterAttempt={counterAttempt}
        wins={wins}
        bestResult={bestResult}
      />
      <section>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          {colors.map(({ color, isOpen, isCompleted }, i) => (
            <Grid item xs={3} key={Math.random()}>
              <Paper
                className={classes.paper}
                onClick={() => !disabled && handleClick(i)}
              >
                {isCompleted ? (
                  <Paper
                    className={classes.active}
                    style={{ backgroundColor: 'transparent' }}
                  ></Paper>
                ) : (
                  <Paper
                    className={classes.active}
                    style={{ backgroundColor: isOpen ? color : '#fff' }}
                  ></Paper>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </section>
    </main>
  );
};

export default App;
