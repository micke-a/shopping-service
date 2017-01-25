import React from "react";
import {connect} from "react-redux";

import { Navbar } from "../components/Navbar";
import { setName } from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
            <span>
                <Navbar navTitle="Shipping" />

                <div className="container">
                    {this.props.children}
                </div>
            </span>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
