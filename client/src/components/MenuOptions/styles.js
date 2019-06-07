const styles = theme => ({
  menuIcon: {
    margin: theme.spacing.unit * 2,
    a: {
      '&:focus': 'none',
      outline: 'none'
    }
  },
  menuContainer: {
    marginTop: '5px'
  },

  Link: {
    '&:hover': 'none'
  }
});

export default styles;
