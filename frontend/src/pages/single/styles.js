import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
      height: 0,
      paddingTop: '56.25%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundBlendMode: 'darken',
    },
    border: {
      border: 'solid',
    },
    fullHeightCard: {
      height: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '0%',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
    },
    overlay2: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      color: 'white',
    },
    grid: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    tags: {
      padding: '0 16px'
    },
    manageButtons: {
      padding: '0 16px'
    },
    card: {
      borderRadius: '15px',
      width: '75%',
      marginTop:'25px',
      marginBottom: '40px',   
    },
    mainText: {
      fontSize: '15px',
      marginTop: '5px',
      padding: '0 16px',
      lineHeight: '24px',
      marginBottom: '2%'


    }
  });
  