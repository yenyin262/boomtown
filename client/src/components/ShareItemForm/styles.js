const styles = theme => ({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    width: '418px'
  },
  NameTextField: {
    marginTop: '45px'
  },
  DescribeItemTextField: {
    mariginTop: '19px'
  },
  SelectTextField: {
    marginTop: '100px'
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
    width: '80%',
    '&:hover': {
      backgroundColor: '#f9a825'
    },
    fontWeight: 400
  },

  bmtwnHeader: {
    color: '#000',

    marginBottom: '92px',
    width: '97%'
  },
  descriptionName: {
    fontSize: '16px',
    fontWeight: 400
  },
  button: {
    fontSize: '16px',
    padding: '8px 24px',
    width: '121px',
    marginTop: '30px',
    color: 'grey',
    boxShadow: 'none',
    backgroundColor: 'light grey'
  },
  headerOne: {
    marginTop: 0,
    fontSize: '45px',
    fontFamily: 'sans-serif',
    fontWeight: 700
  }
});

export default styles;
