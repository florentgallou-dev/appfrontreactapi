import SearchZone from './searchzone/searchzone';
import ListZone from './listzone/listzone';

import React from 'react';

let numberInRealTime = null;

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            names: [],
            searchNumber: null
        }
    }

    searchItem = (number) => {
        this.setState({
            //send redult of onchange value to props number to send it back to listzone
            searchNumber: number
        })
        numberInRealTime = number;
    }

    render(){
        return (
            <main className="text-center text-white">
                <article className="container">
                    <div className="pt-4 pb-3">
                    <h1 className="txt-yellow">Parcourir les personnages</h1>
                        <p>Saisissez l'identifiant numérique du personnage que vous désirez retrouver.</p>
                    </div>
                    <div>
                        <SearchZone LookFor = {this.searchItem}/>
                    </div>
                    <div>
                        <ListZone SearchNumber = {numberInRealTime}/>
                    </div>
                </article>
            </main>
        );
    }
}

export default Search;