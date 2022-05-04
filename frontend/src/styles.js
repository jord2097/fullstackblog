import { makeStyles } from '@material-ui/core/styles'


export default makeStyles((theme) => ({
    appbar: {
        height: "60px",
        backgroundColor: "transparent",       
    },
    appbarText: {
        color: "white",        
        paddingLeft: "20px",
        paddingRight: "20px"        
    },
    appbarFinalText: {
        color: "white",           
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
    toolbar: theme.mixins.toolbar,
    searchSummary: {
        padding: "2rem 0",
        maxWidth: "1100px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    container: {
        background: "#ECECEC",
        display: "flex",
        justifyContent: "center",
    },
    searchResultsNumber: {
        fontSize: ".7rem"
    },
    searchResult: {
        display: "flex",
    },
    searchResults: {
        "& div": {
            marginTop: "1rem",
            marginRight: "1rem"
        }
    },
    searchResultImage: {
        marginTop: "1rem",
        marginRight: "1rem",
        width: "210px",
        height: "125px",
        borderRadius: "4px"
    },
    searchBar: {
        paddingRight: "1rem"
    },
    searchBarButton: {
        // match dimensions with searchbar
    }

    



    
    
  }));
  