handleUserLoyalty = (house) => {
  this.setState({
    formControls: {
        loyalty: { house }
    }
  });
}