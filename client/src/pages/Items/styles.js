const styles = theme => ({
  ItemContainer: {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr 1fr',
    // gridGap: '30px',
    // width: '95%',
    // margin: '20px auto',
    backgroundColor: 'black'
  },
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    margin: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit
  },

  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },

  shareBtn: {
    // marginRight: theme.spacing.unit,
    margin: theme.spacing.unit
  },
  navContainer: {
    display: 'flex'
  },

  itemLink: {
    flexBasis: '69%'
  }
});

export default styles;
