const styles = theme => ({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    width: '418px'
  },
  NameTextField: {
    marginTop: '45px',
    marginBottom: '16px'
  },
  DescribeItemTextField: {
    mariginTop: '19px',
    marginBottom: '16px'
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
  selectImgBtnReset: {
    margin: '0',
    backgroundColor: '#fafafa',
    border: '1px solid grey',
    width: '80%',
    '&:hover': {
      backgroundColor: 'E2E2E2'
    },
    fontWeight: 400,
    boxShadow: 'none'
  },
  bmtwnHeader: {
    color: '#000',
    marginBottom: '92px',
    width: '97%'
  },
  descriptionName: {
    fontSize: '16px',
    fontWeight: 400,
    '&:valid': {
      backgroundColor: '#f9a825'
    }
  },
  button: {
    fontSize: '16px',
    padding: '8px 24px',
    width: '121px',
    marginTop: '30px',
    color: 'grey',
    boxShadow: 'none',
    backgroundColor: 'dark grey'
  },
  headerOne: {
    marginTop: 0,
    fontSize: '45px',
    fontFamily: 'sans-serif',
    fontWeight: 700
  }
});

export default styles;
