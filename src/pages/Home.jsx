import { Link } from "react-router-dom";
import{useNavigate} from "react-router-dom";
function Home(){
const navigate = useNavigate();
return(
    <div>
        <h1>Home</h1>
              <p>Welcome to my React application.</p>
<Link to="/developers">Go to Developers</Link>
      <br />

      <Link to="/about">Go to About</Link>
      <br />

      <Link to="/counter">Go to Developer Counter</Link>
      <button onClick={() => navigate("/counter")}>
  Go to Developer Counter
</button>
    </div>
)
}
export default Home;