import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },    
    sidebar: {
        marginTop: '16px',
    }

  }));