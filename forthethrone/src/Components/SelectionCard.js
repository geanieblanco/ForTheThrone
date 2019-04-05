const choiceCard = characterData.map((character, key) => {
    return (
<div className="col-md-3 col-sm-6">
  <div id="choiceContent" key={character.id}>
    <img src={character.statusImage}/>
    <div id="choice-inner">
      <span>{character.cardName}</span>
      <div id="inputs">
      {choices.map(choice => {
          return (
            <div className="form-check">
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