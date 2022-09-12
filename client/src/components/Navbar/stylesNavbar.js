import { makeStyles } from "@material-ui/core/styles";
import { deepPurple, red } from "@material-ui/core/colors";
import { borderRadius, style } from "@mui/system";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
    border: "1px solid rgba(0,183,255, 1)",
    borderRadius: "5%"
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    color: "rgba(0,183,255, 1)"
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "rgba(0,183,255, 1)"
    //backgroundColor: deepPurple[500],
  },
}));
