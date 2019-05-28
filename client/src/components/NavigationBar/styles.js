const styles = theme => ({
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
    borderRadius: '32px',
    padding: 0
  },
  navContainer: {
    display: 'flex'
  },

  // itemLink: {
  //   flexBasis: '83%'
  // },
  childContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export default styles;
