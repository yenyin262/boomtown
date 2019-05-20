const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  input: {
    display: 'none'
  },
  selectImgBtn: {
    margin: theme.spacing.unit,
    backgroundColor: '#f9a825',
    width: '30%',
    '&:hover': {
      backgroundColor: '#f9a825'
    }
  }
});

export default styles;
