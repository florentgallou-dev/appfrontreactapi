import React from "react";

class Additem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit = (event) => console.log(event.target.value);
    

    render() {
        return (
            <div className="row my-3">
                <form>
                    <div className="col-8">
                        <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="col-4">
                        <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Additem;