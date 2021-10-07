import React, { Component } from "react";
import AddApointments from "./AddApointments";
import ListApointments from "./ListApointments";
import SearchApointments from "./SearchApointments";
import { without } from "lodash"

class App extends Component {

  constructor() {
    super();
    this.state = {
      myAppointments: [],
      lastIndex: 0,
      formDisplay: false,
      // Sortierung
      orderBy: 'petName',
      orderDir: 'asc'
    }
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toogleForm = this.toogleForm.bind(this);
    this.addApointment = this.addApointment.bind(this);
  }

  // LifeCircle Method - FirstRun
  componentDidMount() {
    // Fetch the data from LocalFile
    fetch('./data.json').then(response => response.json())
      .then(result => {
        const apts = result.map(item => {

          item.aptID = this.state.lastIndex;
          // Setzen von States über set State
          this.setState({ lastIndex: this.state.lastIndex + 1 })

          return item
        });
        // Set the State
        this.setState({
          myAppointments: apts
        });
      });
  }

  deleteAppointment(apt) {
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt);

    this.setState({
      myAppointments: tempApts
    })

  }

  toogleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  addApointment(apt) {
    let tempApts = this.state.myAppointments;
    apt.aptID = this.state.lastIndex;
    tempApts.unshift(apt);

    this.setState({
      myAppointments: tempApts,
      lastIndex: this.state.lastIndex + 1
    })

  }


  render() {

    let order;
    let filteredApts = this.state.myAppointments;
    if (this.state.oderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts.sort((a, b) => {
      if(a[this.state.orderBy] < b[this.state.orderBy]){
        return -1 * order;
      } else {
        return 1 * order;
      }
    });

    return (
      // JSX = HTML UND JS GEMIXED
      <main className="page bg-white" id="petratings">
        <div className="container">
          <h1>Hallo Projekt</h1>
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {this.state.myLocation}
                <hr />
                <AddApointments
                  formDisplay={this.state.formDisplay}
                  toogleForm={this.toogleForm}
                  addApointment={this.addApointment}
                />

                <SearchApointments
                orderBy={this.state.orderBy}
                oderDir={this.state.orderDir}
                />

                <ListApointments
                  appointments={filteredApts}
                  deleteAppointment={this.deleteAppointment}
                />


              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
