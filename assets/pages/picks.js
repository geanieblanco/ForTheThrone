class ChoiceCard extends React.Component {
constructor() {
    super();
    this.state = {
    username: "",
    email: "",
    loyalty: ""
    };
}

render() {

    const choiceCard = characterData.map((character, key) =>
    <div className="col-sm-6 col-md-3">
        <div id="statusContent">
        <img src={character.statusImage}/>
        <div id="status-inner">
            <h5>{character.name}</h5>
        </div>
        </div>
    </div>
);

// handleClick = ()=> {
//   (value)=>this.setState(this.state.loyalty);
//   alert(this.state.loyalty);
// }
    return (
    <div className="row">
        <div className="form-group">
        <div className="row">
            <div className="col-sm-12 col-md-6">
            <input type="email" className="form-control" id="inputPassword" placeholder="Email"/>
            </div>
            <div className="col-sm-12 col-md-6">
            <input type="password" className="form-control" id="inputPassword" placeholder="Username"/>
            </div>
        </div>
        <div className="row" id="loyaltyButton">
            <button type="input" role="button" className="btn btn-link" id="btn-Lannister" value="Lannister">
                <i className="fas fa-shield-alt"/>
                <p>lannister</p>
            </button>
            <button type="input" role="button" className="btn btn-link" id="btn-Stark" value="Stark">
                <i className="fas fa-shield-alt"/>
                <p>stark</p>
            </button>
            <button type="input" role="button" className="btn btn-link" id="btn-Targaryen" value="Targaryen">
                <i className="fas fa-shield-alt"/>
                <p>targaryen</p>
            </button>
            <button type="input" role="button" className="btn btn-link" id="btn-Baratheon" value="Baratheon">
                <i className="fas fa-shield-alt"/>
                <p>baratheon</p>
            </button>
            <button type="input" role="button" className="btn btn-link" id="btn-Bannerless" value="Bannerless">
                <i className="fas fa-shield-alt"/>
                <p>bannerless</p>
            </button>
            <button type="input" role="button" className="btn btn-link" id="btn-Walker" value="Walker">
                <i className="fas fa-shield-alt"/>
                <p>walker</p>
            </button>               
        </div>
        </div>

        <div className="row">
            {choiceCard}
        </div>
    </div>
    
    )
    }
}
