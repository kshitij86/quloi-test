import { AppBar, Button, Tab, Tabs} from "@material-ui/core";
import { Link } from "react-router-dom";

const logout = () => {
  localStorage.setItem("userType", null);
}

const isLoggedIn = () => {
  return localStorage.getItem("userType") !== null;
}

const LogoutButton = () => {
  if(isLoggedIn){
    return (
      <Link to="/">
        <Button onClick={logout} style={{fontSize: 15, position: "relative", margin: "auto"}}>
          Log out
        </Button>
      </Link>
    )
  } else {
    return null;
  }
}

function Navigator() {
    
    return <AppBar color="inherit" position="static">
    <Tabs aria-label="navigator">
        <Tab style={{fontSize: 30}} label="Quloi"/>
        <LogoutButton />
    </Tabs>
  </AppBar>
}

export default Navigator;