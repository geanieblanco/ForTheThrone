import React from 'react';

export default class StatusCard extends React.Component {
constructor() {
    super();
    this.state = { characters: characterData }
}
render() {   
    const characterCard = this.state.characters.map((character, key) =>
    <div className="col-sm-6 col-md-3">
    <div className="card-flip">
        <div className="flip">
        <div className="front">
            <div className="card" id="characterCard">
            <div key={character.id} className="card-img-top" id={character.status.toString()}>
            <img
            
            key={character.statusImage}
            src={character.statusImage}
            alt={character.name}
            className="img-fluid"
            />
            </div>
            <div className="card-body" id="content">
            <div id="status">
                <span key={character.name}>{character.cardName}  </span>
                <i className="fas fa-shield-alt" key={character.loyalty} id={character.loyalty.toString()}/>
            </div>
            </div>
            </div>
        </div>
        <div className="back">
        <div className="card" id="characterCard">
        <div className="card-body" id="content">
        <div className="card-block">
        <h5 className="card-title">{character.name}</h5>
        <h6 className="card-subtitle">Loyalty: {character.loyalty}</h6>
        <p className="card-text">{character.bio}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
);
    return (
    <div className="row">
        {characterCard}
    </div>
    
    )
    }
}