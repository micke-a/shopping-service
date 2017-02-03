import React from "react";

export const LocateShop = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <p>Locate Shop</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <form>
                        <label>Longitude</label>
                        <input type="text" name="longitude"/>

                        <label>Latitude</label>
                        <input type="text" name="latitude"/>

                        <button>Locate</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
