const styles = theme => ({
  progressCircle: {
    color: '#f9a825',
    margin: theme.spacing.unit * 2,
    width: '50px',
    height: '50px'
  },

  containerLoader: {
    backgroundColor: 'black',
    height: '100vh',
    display: 'flex'
  },

  loaderImgCaption: {
    margin: 'auto',
    fontSize: '21px',
    textAlign: 'Center',
    color: '#f9a825',
    fontFamily: 'Roboto'
  }
});

export default styles;
