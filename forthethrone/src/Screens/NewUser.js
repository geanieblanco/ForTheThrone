import React from 'react';

export default class NewUser extends React.Component {
constructor(props){
    super()
    this.state = {
        formControls: {
            email: {
            value: ''
            },
            username: {
            value: ''
            }
        },
        userChoices: [],
        loyalty: {
        value: ''
        }
    }
}


handleSubmit = ()=> {
    db.collection("users")
    .doc(this.state.formControls.username.value.toString())
    .set({
        name: this.state.formControls.username.value.toString(),
        email: this.state.formControls.email.value.toString(),
        choices: this.state.userChoices,
        loyalty: this.state.loyalty,
        totalPoints: 0,
        correctGuesses: 0,
        incorrectGuesses: 0
    });
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
    alert('Welcome to the Game');
    form.reset();
}


handleUserChoice = (choice, key) => {
    this.setState(
        prevState => ({
        userChoices: { ...prevState.userChoices, [key]: choice }
    }));
};

handleUserLoyalty = (e) => {
    this.setState(
    { loyalty: e.target.id },() => {
    console.log(this.state.loyalty)
});
}


addNewUser = event => {
    
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
    formControls: {
        ...this.state.formControls,
        [name]: {
        ...this.state.formControls[name],
        value
        }
    }
    });
}

render() {

const choices = [
    "Alive",
    "Dead",
    "Walker"
]

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

const houses = [
    "Lannister",
    "Baratheon",
    "Targaryen",
    "Stark",
    "Bannerless",
    "Walker"
]

const houseButtons = houses.map((house => {
    return (
    <div className="col-md-2 col-sm-2">
        <button
        key={house}
        type="input" 
        className="btn btn-link hvr-float-shadow" 
        id={house}
        onClick={this.handleUserLoyalty}>
            <i className="fas fa-shield-alt" id={house}/>
            <p>{house}</p>
        </button>
    </div>
    )
}));

    return (
    <div className="container" id="newUser">
    <div className="row">
        <h1>Swear Your Sword</h1>
    </div>
    <div className="form">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <input
                type="username" 
                name="username"
                placeholder="Username"
                value={this.state.formControls.username.value} 
                onChange={this.addNewUser} 
                />
            </div>
            <div className="col-sm-12 col-md-6">
                <input 
                type="email" 
                name="email" 
                placeholder="Email Address"
                value={this.state.formControls.email.value} 
                onChange={this.addNewUser} 
                />
            </div>
        </div>
        <div className="row" id="loyaltyButton">
            {houseButtons}
        </div>
        <div className="row">
            {choiceCard}
        </div>
        <div className="row">
            <button type="button" onClick={()=>{this.handleSubmit()}}>Submit</button> 
        </div>
    </div>
</div>
    )
}
}