<label key={character.id}>
  <div className="col-sm-12 col-md-3" id="choiceCard">
  <div className="card">
    <div className="" id="choiceContent">
      <img src={character.statusImage}/>
      <div id="choice-inner">
        <span>{character.name}</span>
        {choices.map(choice => {
            return (
              <div>
                <input
                    key={choice}
                    type="radio"
                    value={choice}
                    checked={this.state.userChoices[key] === choice}
                    onChange={() => this.handleChange(choice, key)}
                />
                <label className="form-check-label" for={choice.toString()}>{choice}</label>
                </div>
            );
        })}
      </div>
    </div>
  </div>
  </div>
</label>