import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import Moment from 'react-moment';

export default class ListApointments extends Component {

    render() {
        // const listItems = this.props.appointments.map(item => (
        //     <div>
        //         {item.petName} - {item.ownerName}

        //     </div>
        // ));
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (

                    <div className="pet-item col media py-3" key={item.aptID}>
                        <div className="mr-3">
                            <button className="pet-delete btn btn-sm btn-danger" onClick={()=>this.props.deleteAppointment(item)}>
                                <FaTimes />
                            </button>
                        </div>

                        <div className="pet-info media-body">
                            <div className="pet-head d-flex">
                                <span className="pet-name">{item.aptID} ) {item.petName}</span>
                                <span className="apt-date ml-auto">

                                    <Moment
                                        date={item.aptDate} // Datensatz
                                        parse="YY-MM-dd hh:mm"   // Eingehendes Datumsformat
                                        format="DD.MM.YYYY hh:mm" // Ausgehendes Datumsformat
                                    />
                                </span>
                            </div>

                            <div className="owner-name">
                                <span className="label-item">Besitzer: </span>
                                <span>{item.ownerName}</span>
                            </div>
                            <div className="apt-notes">{item.aptNotes}</div>
                        </div>

                    </div>
                ))}
            </div>
        );
    }
}