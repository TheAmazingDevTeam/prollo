import React, {Component} from 'react';

class Board extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Board title</h1>
        <div className="row">
          <div className="col-2">
            <h3>List 1</h3>
            <div className="card">
              <div className="card-body">
                <h5>Card Title</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5>Card Title</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5>Card Title</h5>
              </div>
            </div>
          </div>
          <div className="col-2">
            <h3>List 2</h3>
            <div className="card">
              <div className="card-body">
                <h5>Card Title</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5>Card Title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
