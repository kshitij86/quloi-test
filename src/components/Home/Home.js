import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import background from "../../assets/background.jpg";

const setUserType = (user) => {
    localStorage.setItem("userType", user)
}

function Home() {
    return <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', backgroundImage: `url(${background})`, objectFit: "contain" }}>
        <div>
            <Link to="/dashboard/staff">
                <Button onClick={() => {setUserType("staff")}} variant="contained" color="primary">
                    Login to Facebook
                </Button>
            </Link> 
        </div>
        <div>
            <Link to="/dashboard/admin">
                <Button onClick={() => {setUserType("admin")}} variant="contained">
                    Continue with Google
                </Button>
            </Link>
        </div>
  </div>
}

export default Home; 
  