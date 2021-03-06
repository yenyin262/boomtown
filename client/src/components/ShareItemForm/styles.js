const styles = theme => ({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    width: '418px'
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

  button: {
    fontSize: '16px',
    padding: '8px 24px',
    width: '121px',
    marginTop: '30px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    fontWeight: 400
  },
  validButton: {
    backgroundColor: '#f9a825',
    '&:hover': {
      backgroundColor: 'rgb(174, 117, 25)'
    }
  },

  headerOne: {
    marginTop: 0,
    fontSize: '45px',
    fontFamily: 'sans-serif',
    fontWeight: 700
  },
  icon: {
    paddingTop: '5px'
  }
});

export default styles;
