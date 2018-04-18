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
                <div>
                  <p data-toggle="collapse" data-target="#cardOne">Eine Karte hinzufügen...</p>
                  <div id="cardOne" className="collapse">
                    <div className="input-group input-group-lg">
                      <input type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-info my-2">hinzufügen</button>
                  </div>
                </div>
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
                <div>
                  <p data-toggle="collapse" data-target="#cardTwo">Eine Karte hinzufügen...</p>
                  <div id="cardTwo" className="collapse">
                    <div className="input-group input-group-lg">
                      <input type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-info my-2">hinzufügen</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="bg-light rounded px-3">
                <div>
                  <p className="p-2" data-toggle="collapse" data-target="#cardThree">Eine Liste hinzufügen...</p>
                  <div id="cardThree" className="collapse">
                    <div className="input-group input-group-lg">
                      <input type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-info my-2">hinzufügen</button>
                  </div>
                </div>
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
