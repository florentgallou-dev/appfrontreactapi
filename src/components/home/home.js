import React from 'react';
import Axios from 'axios';

import ListCategory from './listcategory/listcategory';

//function called in the class to send back the list of elements created by the datas in response
function returnElementWithDatas(response){
    let listOfElements = [];
    for(let data in response.data){
        listOfElements.push(<ListCategory data={data} adress={response.data[data]} />);
    }
    return listOfElements;
}


//Function to create and send the element home to the app
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            loaded: false,
            error: false,
            data: null,
            categories: null
        }
    }

    // http request with axios
    componentDidMount(){

        // Make a request to the api SWAPI
        Axios.get('https://swapi.dev/api/')

        // handle successfull response
        .then( (response) => {
            console.log(response);
            //Fill categories with HTML elements coming from listcategory using datas from the api usin the returnElementWithDatas function
            let categories = returnElementWithDatas(response);
            this.setState({
                loaded: true,
                data: response.data, //Fill data with the raw datas from response
                categories: categories //Fill categories with the complete element list created with the data in response
            });
        })
        // handle response errors
        .catch( (error) => {
            this.setState({
                loaded: true,
                error: error
            });
        });
    }

    //Render html elements sent to the parent app
    render(){
        //Handle http state loaded
        if(this.state.loaded){
            //Handle http state loaded but with an error
            if(this.state.error){
                return(
                    <h3 className="text-white bg-danger p-5 text-center">une erreur "{this.state.error.message}" est survenue !</h3>
                );
            }
            //Handle http state loaded without and error
            return(
                <main className="text-center text-white">
                <article className="container">
                    <div className="pb-3">
                        <h1 className="txt-yellow">Bienvenue dans la base de données de l'univers Star Wars</h1>
                        <p>Parcourez à volonté les données pour retrouver les informations que vous désirez.</p>
                    </div>
                    <div className="row">
                        {this.state.categories}
                    </div>
                </article>
            </main>
            );
        }
        //Handle http state not loaded yet
        return (
            <div>
                <h2 className="text-white bg-yellow p-5 text-center jediFont">Données en cours de chargements</h2>
            </div>
        );
    }
}

export default Home;