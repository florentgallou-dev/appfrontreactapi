import React from "react";

class SearchZone extends React.Component {
    constructor(props){
        super(props);
        // valeurs de stockage des input
        this.state = {
            searchInput: ""
        }
    }

    handleChange = (event) => {
        this.setState({searchInput: event.target.value});
        this.props.searchItem(this.state.searchInput);
    }

    render() {
        return (
            <div className="row my-3">
                <div>
                    <div className="form-floating mb-3">
                        <input type="number" class="form-control bg-lightGrey txt-brightGrey"  onChange={this.handleChange} value={this.state.searchInput} id="search" placeholder="Yoda"/>
                        <label for="search" className="txt-brightGrey">Saisissez un identifiant numérique entre 1 et 82</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchZone;