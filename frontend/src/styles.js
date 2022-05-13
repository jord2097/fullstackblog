import { makeStyles } from '@material-ui/core/styles'


export default makeStyles((theme) => ({
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
        marginBottom: "40px"
    },
    searchResults: {
        flex:"10",
        display:"flex",
        flexWrap: "wrap",
        margin: "10px",
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
    searchResultContent: {
        flexGrow: 1
    },
    searchResultPostText: {
        maxHeight: "150px",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
    
    

    



    
    
  }));
  