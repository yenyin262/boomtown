const styles = theme => ({
  profileContainer: {
    padding: '80px',
    backgroundColor: 'black',
    height: '100%',
    minHeight: '100vh'
  },
  sharedHeader: {
    color: '#f9a825',
    fontSize: '37px',
    fontWeight: '400',
    fontFamily: ' Roboto'
  },
  profileGrid: {
    display: 'flex'
  },
  body: {
    backgroundColor: 'black'
  },
  error: {
    fontSize: '60px',
    textAlign: 'center',
    marginTop: '100px'
  },
  text: {
    fontSize: '20px',
    textAlign: 'center',
    color: 'black',
    '&:hover': {
      color: 'blue'
    }
  }
});

export default styles;
