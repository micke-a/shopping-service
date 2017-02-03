import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Location } from '../components/Location';
import axios from 'axios';

import {  setShops } from "../actions/userActions";


class ListAllShops extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            shops: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8080/shops')
            .then(res =>{
                console.log(res.data);
                this.props.setShops(res.data);
            })
            .catch( err =>{
                console.log(err)
            });
    }

    render() {
        let rows = this.props.shops.map( shop => {
            return (<tr key={shop.id}>
                <td>{shop.name}</td>
                <td>
                    <Location long={shop.location.longitude} lat={shop.location.latitude} />
                </td>
            </tr>)
        });

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>List All Shops</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">

                        <table className="table table-bordered table-condensed">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = function(state){
    return {
        shops: state.user.shops,
    }
}


const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        setShops: setShops,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ListAllShops);