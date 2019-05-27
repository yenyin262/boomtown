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
    width: '29%',
    '&:hover': {
      backgroundColor: '#f9a825'
    }
  },

  bmtwnHeader: {
    fontSize: '20px',
    color: '#000',
    fontWeight: '700',
    marginBottom: '80px',
    width: '23%'
  },
  descriptionName: {
    fontSize: '16px',
    fontWeight: 400
  },
  button: {
    fontSize: '16px',
    padding: '8px 24px',
    width: '200px',
    marginTop: '30px'
  }
});

export default styles;
