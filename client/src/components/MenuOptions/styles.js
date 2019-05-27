const styles = theme => ({
  menuIcon: {
    // margin: '20px 16px 0 0',
    margin: theme.spacing.unit * 2,
    ':focus': {
      outline: 'none'
    }
  },
  Link: {
    '&:hover': 'none'
  }
});

export default styles;
