import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import randomColors from '../../utils/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    width: 500,
    margin: '0 auto',
    borderStyle: ' solid',
    borderColor: '#000',
    borderRadius: 5,
  },
  paper: {
    display: 'flex',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '0 auto',
    width: 100,
    height: 100,
  },
  active: {
    width: 100,
  },
}));

const App = ({ implementation, counter }) => {
  const classes = useStyles();
  const [colors, setColors] = useState(randomColors);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const findOpenedColors = colors.filter((item) => item.isOpen);
    if (findOpenedColors.length === 2) {
      setDisabled(true);
      setTimeout(() => {
        if (findOpenedColors[0].color === findOpenedColors[1].color) {
          const comletedColors = colors.map((item) =>
            item.isOpen ? { ...item, isOpen: false, isCompleted: true } : item,
          );
          counter(implementation + 1);
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
  }, [colors]);

  const handleClick = (i) => {
    if (colors[i].isOpen || colors[i].isComplete) return;

    const findColorByIndex = colors.map((item, index) =>
      index === i ? { ...item, isOpen: true } : item,
    );

    setColors(findColorByIndex);
  };

  return (
    <section className={classes.root}>
      <h2>You have matched {implementation} colors</h2>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
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
                  style={{ backgroundColor: color }}
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
  );
};

export default App;
