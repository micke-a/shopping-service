import React from "react";

export const ListAllShops = (props) => {

    let rows = (
        <tr>
            <td>A name</td>
            <td>a location</td>
        </tr>);
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
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                        </tr>
                        {rows}
                    </table>
                </div>
            </div>
        </div>
    );
}
