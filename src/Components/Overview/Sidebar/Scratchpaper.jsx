handleClick(event) {
  const {id, data} = props;
  const eventData = event.target.alt.split(' ');
  this.setState({
    target: id,
    targetID: data,
  });
}