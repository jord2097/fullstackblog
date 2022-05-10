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
    searchBar: {
        paddingRight: "1rem"
    },
    searchBarButton: {
        // match dimensions with searchbar
    },
    searchResultPostText: {
        fontSize: "15px",
        width: "400px",
        color: "black",
        lineHeight: "24px",
        marginTop: "15px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        height: "125px",
        webkitlineclamp: "3",
        webkitboxorient: "vertical",
        /* webkit-line-clamp only works in combination with web-kit-box-orient and display:-webkit-box or display: -webkit-inline-box */
        marginBottom: "2%",
        cursor: "pointer"             
    },
    searchResultSpacer: {
        marginBottom: "10px"       
    },
    appBarFinalItem: {
        flexGrow: 1
    }
    


    



    
    
  }));
  