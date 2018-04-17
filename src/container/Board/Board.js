import React, {Component} from 'react';
import CardModal from '../../components/CardModal/CardModal';

class Board extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="h3 my-4">Board title</h1>
          <div className="row">
            <div className="col-2">
              <div className="bg-light rounded px-3 py-1">
                <h2 className="h4 my-2">List 1</h2>
                <div data-toggle="modal" data-target="#cardModal">
                  <div className="card my-2">
                    <div className="card-body">
                      <h5>Card Title</h5>
                    </div>
                  </div>
                </div>
                <div data-toggle="modal" data-target="#cardModal">
                  <div className="card my-2">
                    <div className="card-body">
                      <h5>Card Title</h5>
                    </div>
                  </div>
                </div>
                <div data-toggle="modal" data-target="#cardModal">
                  <div className="card my-2">
                    <div className="card-body">
                      <h5>Card Title</h5>
                    </div>
                  </div>
                </div>
                <p>Eine Karte hinzufügen...</p>
              </div>
            </div>
            <div className="col-2">
              <div className="bg-light rounded px-3 py-1">
                <h2 className="h4 my-2">List 2</h2>
                <div data-toggle="modal" data-target="#cardModal">
                  <div className="card my-2">
                    <div className="card-body">
                      <h5>Card Title</h5>
                    </div>
                  </div>
                </div>
                <div data-toggle="modal" data-target="#cardModal">
                  <div className="card my-2">
                    <div className="card-body">
                      <h5>Card Title</h5>
                    </div>
                  </div>
                </div>
                <p>Eine Karte hinzufügen...</p>
              </div>
            </div>
            <div className="col-2">
              <div className="bg-light rounded">
              <p className="p-2">Eine Karte hinzufügen...</p>
              </div>
            </div>
          </div>
        </div>
        <CardModal />
      </div>
    );
  }
}

export default Board;
