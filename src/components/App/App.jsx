import React from 'react';
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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '0 auto',
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
}));

const App = () => {
  const classes = useStyles();

  const handleClick = ({ target }) => {
    const bgcStyle = target.style;
    bgcStyle.backgroundColor = target.dataset.hiddenColor;
  };

  return (
    <section className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {randomColors.map((color) => (
          <Grid item xs={3} key={Math.random()}>
            <Paper
              className={classes.paper}
              data-hidden-color={color}
              onClick={handleClick}
            ></Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default App;
