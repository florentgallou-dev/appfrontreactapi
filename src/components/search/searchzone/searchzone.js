import React from "react";

class SearchZone extends React.Component {
    //when user enters a number it is directly sent to the parent function to set it a a state var
    handleChange = (event) => {
        this.props.LookFor(event.target.value);
    }

    render() {
        return (
            <div className="row my-3">
                <div>
                    <div className="form-floating mb-3">
                        <input type="number" class="form-control bg-lightGrey txt-brightGrey"  onChange={this.handleChange} id="search" placeholder="Yoda"/>
                        <label for="search" className="txt-brightGrey">Saisissez un identifiant numérique entre 1 et 82</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchZone;