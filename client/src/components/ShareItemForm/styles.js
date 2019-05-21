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
    margin: '0',
    backgroundColor: '#f9a825',
    width: '100%',
    '&:hover': {
      backgroundColor: '#f9a825'
    }
  },

  bmtwnHeader: {
    fontSize: '20px',
    color: '#000',
    fontWeight: '700',
    marginBottom: '80px',
    width: '69%'
  }

  // bmtwnHeaderWrapper: {
  //   width: '69%'
  // }
  //}
});

export default styles;
