import SearchZone from './searchzone/searchzone';
import ListZone from './listzone/listzone';

import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            names: []
        }
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
                        <SearchZone />
                    </div>
                    <div>
                        <ListZone />
                    </div>
                </article>
            </main>
        );
    }
}

export default Search;