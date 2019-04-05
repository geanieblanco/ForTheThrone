import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
return (
<Router>
    <div>
    <Header />
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/topics" component={Game} />
        <Route path="/oaths" component={Oaths} />
        <Route path="/swearit" component={SwearIt} />
        <Route path="/players" component={Players} />
    </div>
</Router>
);
}

function Home() {
    return <h2>Home</h2>;
}

function Leaderboard() {
    return <h2>Leaderboard</h2>;
}

function Game() {
    return <h2>Game</h2>;
}

function Oaths() {
    return <h2>Oaths</h2>;
}

function SwearIt() {
    return <h2>Swear It</h2>;
}

function Players() {
    return <h2>Players</h2>
}



function Header() {
return (
<ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/leaderboard">Leaderboard</Link>
    </li>
    <li>
    <Link to="/oaths">Oaths</Link>
    </li>
</ul>
);
}

export default AppRouter;