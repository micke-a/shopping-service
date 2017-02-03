import React from "react";
import { Navbar } from "../components/Navbar";

class App extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <span>
                <Navbar navTitle="Shops Thingy" />

                <div className="container">
                    {this.props.children}
                </div>
            </span>
        );
    }
}

export default App;
