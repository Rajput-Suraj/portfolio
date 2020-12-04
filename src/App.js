import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Work from "./pages/Work/Work";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route exact path="/work" component={Work} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
