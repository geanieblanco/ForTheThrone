characterData = [];

getCharacterData = ()=> {
    db.collection("characters").get().then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
            characterData.push(doc.data());
            });
        });
}

const killswitch = characterData.map((character, key) => {
    return (
<div className="col-md-3 col-sm-6">
  <div id="choiceContent" key={character.id}>
    <img src={character.statusImage}/>
    <div id="choice-inner">
      <span>{character.cardName}</span>
      <div id="inputs">
      {choices.map(choice => {
          return (
            <div className="form-check" id="choice-button">
              <input
                className="form-check-input"
                key={character.cardName}
                type="radio"
                value={choice}
                checked={this.state.userChoices[character.cardName] === choice}
                onChange={() => this.handleUserChoice(choice, character.cardName)}
              />
              <label className="form-check-label" for={choice.toString()}>{choice}</label>
            </div>
          );
      })}
    </div>
    </div>
    </div>
  </div>
    );
});