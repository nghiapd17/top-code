import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    width: 1170,
    margin: "auto",
  },
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1",
  },

  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "#fff",
    backgroundSize: "cover",
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },

  avatar: {
    height: "100%",
    borderRadius: 0,
  },

  loginButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",

    "&:hover": {
      background: "blue",
      boxShadow: "0px 2px 10px #888888",
    },
  },
}));
