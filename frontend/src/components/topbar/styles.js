import { makeStyles } from '@material-ui/core/styles';

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
appBarFinalItem: {
    flexGrow: 1
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
searchBar: {
    paddingRight: "1rem"
},



}))