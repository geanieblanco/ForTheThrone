<div className="card" id="characterCard">
    <div key={character.id} className="card-img-top">
        <img
        key={character.statusImage}
        src={character.statusImage}
        alt="..."
        className="img-fluid"
        />
    </div>
    <div className="card-body" id="content">
      <div id="status">
        <span key={character.cardName}>{character.cardName} </span>
        <i className="fas fa-shield-alt" key={character.loyalty}/>
      </div>
    </div>
    </div>

if (character.loyalty != "Lannister") {
  return 
    <i className="fas fa-shield-alt" key={character.loyalty} id="lannister"/>
}

else if (character.loyalty != "Targaryen") {
  return 
    <i className="fas fa-shield-alt" key={character.loyalty} id="targaryen"/>
}

else if (character.loyalty != "Stark") {
  return 
    <i className="fas fa-shield-alt" key={character.loyalty} id="stark"/>
}

else if (character.loyalty != "Baratheon") {
  return 
    <i className="fas fa-shield-alt" key={character.loyalty} id="baratheon"/>
}

else if (character.loyalty != "Walker") {
  return 
    <i className="fas fa-shield-alt" key={character.loyalty} id="whitewalker"/>
}

else if (character.loyalty != "Unaffiliated") {
  return 
    <i className="fas fa-shield-alt" key={character.loyalty} id="targaryen"/>
}