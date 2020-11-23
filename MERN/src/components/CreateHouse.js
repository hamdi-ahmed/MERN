import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateHouse extends Component {
    constructor(props) {
        super(props);

        //4- to make this refer to HouseList class
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeNumberOfGuests = this.onChangeNumberOfGuests.bind(this);
        this.onChangeNumberOfBedroom = this.onChangeNumberOfBedroom.bind(this);
        this.onChangeNumberOfBathroom = this.onChangeNumberOfBathroom.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //1- make the values of the DB in the initial state
        this.state = {
            city: '',
            price: 0,
            date: new Date(),
            numberOfGuests: 0,
            numberOfBedroom: 0,
            numberOfBathroom: 0,
        }
    }

    //2- to change values => target = body
    onChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeNumberOfGuests(e) {
        this.setState({
            numberOfGuests: e.target.value
        });
    }

    onChangeNumberOfBedroom(e) {
        this.setState({
            numberOfBedroom: e.target.value
        });
    }

    onChangeNumberOfBathroom(e) {
        this.setState({
            numberOfBathroom: e.target.value
        });
    }

    //3-
    onSubmit(e) {
        e.preventDefault();
        const house = {
            city: this.state.city,
            price: this.state.price,
            date: this.state.date,
            numberOfGuests: this.state.numberOfGuests,
            numberOfBedroom: this.state.numberOfBedroom,
            numberOfBathroom: this.state.numberOfBathroom
        }

        console.log(house);

        //Send user's data to the backend server
        axios.post('http://localhost:5000/house/add', house)
            .then(res => console.log(res.data));



        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Add New House</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>City: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <Datepicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Number Of Guest: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.numberOfGuests}
                            onChange={this.onChangeNumberOfGuests}
                        />
                    </div>

                    <div className="form-group">
                        <label>Number Of Bedroom: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.numberOfBedroom}
                            onChange={this.onChangeNumberOfBedroom}
                        />
                    </div>

                    <div className="form-group">
                        <label>Number Of Bathroom: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.numberOfBathroom}
                            onChange={this.onChangeNumberOfBathroom}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add New House" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateHouse;
