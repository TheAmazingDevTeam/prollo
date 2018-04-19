import React, {Component} from 'react';

class CollapseInput extends Component {
  state = {
    cardName: ''
  };

  onChangeHandler = event => {
    this.setState({cardName: event.target.value});
  };
  
  render() {
    return (
      <div>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            onChange={this.onChangeHandler}
          />
        </div>
        <button
          className="btn btn-info my-2"
          onClick={() => this.props.clicked(this.state.cardName)}
        >hinzufügen</button>
      </div>
    );
  }
}

export default CollapseInput;
