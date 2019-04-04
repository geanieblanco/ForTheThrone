class FormContainer extends Component {

constructor () {
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
        userChoices: []
    }
  
}

changeHandler = event => {
    
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
    return (
        <div className="form">
            <input  
              type="email" 
              name="email" 
              value={this.state.formControls.email.value} 
              onChange={this.changeHandler} 
            />

            <input 
              type="text" 
              name="name" 
              value={this.state.formControls.name.value} 
              onChange={this.changeHandler} 
            />
        </div>      
    );
}

}
