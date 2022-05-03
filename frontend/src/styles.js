import { makeStyles } from '@material-ui/core/styles'


export default makeStyles((theme) => ({
    appbar: {
        height: "60px",
        backgroundColor: "transparent",       
    },
    appbarText: {        
        paddingLeft: "20px",
        paddingRight: "20px"        
    },
    appbarFinalText: {        
        paddingLeft: "20px",
        paddingRight: "20px",
        flexGrow: 1     
    },
    appbarIcons: {
        alignItems: "left"
    },
    appbarTextContainer: {
        alignItems: "center",
        flexGrow: 1
    },    
    toolbar: theme.mixins.toolbar
    
    
  }));
  