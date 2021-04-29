import React from 'react';

//List of correspondig french words for original english category words
const traduction = {
    "people": "Personnages",
    "planets": "Planètes",
    "films": "Films",
    "species": "Espèces",
    "vehicles": "Véhicules",
    "starships": "Vaisseaux"
};

//function to send back to the parent the complete element created using props
class ListCategory extends React.Component{
    constructor(props){
        super(props);
    }

/*--------------------------------------------------------------------------------------------------------------QUOI FAIRE QUAND JE RECUPERE L'ADRESSE DE L'API SUIVANTE*/
    //Function to handle the onclick event on the element to get the api adress corresponding to the category
    handleClick = () => {
        console.log(this.props.adress);
    }
/*--------------------------------------------------------------------------------------------------------------QUOI FAIRE QUAND JE RECUPERE L'ADRESSE DE L'API SUIVANTE*/

    //Function to create an element from each data retreved by props
    arrayOfElementsDOM = (category) => {
        return(
            <div className="p-3">
                <div className="row bg-lightGrey align-items-center heightCat p-3">
                    <div className={"col-4 imgCat " + category.data}></div>{/*add category as a class to call the right backgroud picture*/}
                    <div className="col-8">
                        <input type="submit" className="btn-home text-break" onClick={this.handleClick} value={traduction[category.data]} />{/*print the category sent by the props bu translated in french*/}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-xl-4">
                {this.arrayOfElementsDOM(this.props)}
            </div>
        );
    }
}

export default ListCategory;