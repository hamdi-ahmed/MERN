import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Houses = props => (
    <tr>
        <td>{props.house.city}</td>
        <td>{props.house.price}</td>
        <td>{props.house.date}</td>
        <td>{props.house.numberOfGuests}</td>
        <td>{props.house.numberOfBedroom}</td>
        <td>{props.house.numberOfBathroom}</td>
        <td>
            <Link to={"/edit/" + props.house._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteHouse(props.house._id) }}>delete</a>
        </td>
    </tr>
)

class HousesList extends Component {
    constructor(props) {
        super(props);
        this.deleteHouse = this.deleteHouse.bind(this);

        this.state = { houses: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/house")
            .then(res => {
                this.setState({ houses: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteHouse(id) {
        axios.delete('http://localhost:5000/house/' + id)
            .then(res => console.log(res.data));

        this.setState({
            houses: this.state.houses.filter(el => el._id !== id)
        });
    }

    HousesList() {
        return this.state.houses.map(h => {
            return <Houses house={h} deleteHouse={this.deleteHouse} key={h._id} />
        })
    }

    render() {
        return (
            <div>
                <h1>Available Houses</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>City</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Number Of Guest</th>
                            <th>Number Of Bedroom</th>
                            <th>Number Of Bathroom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.HousesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HousesList;
