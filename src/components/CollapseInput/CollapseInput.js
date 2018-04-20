import React, {Component} from 'react';

class CollapseInput extends Component {
  state = {
    objectName: ''
  };

  onChangeHandler = event => {
    this.setState({objectName: event.target.value});
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
          onClick={() => this.props.clicked(this.state.objectName)}
        >hinzufügen</button>
      </div>
    );
  }
}

export default CollapseInput;
