import React from 'react';
import Axios from 'axios';

import CharacterList from './characterlist/characterlist';

//function called in the class to send back the list of elements created by the datas in response
function returnElementWithCharacterList(response){
    let listOfElements = [];
    for(let character of response){
        listOfElements.push(<CharacterList Character = {character}/>);
    }
    return listOfElements;
}

class ListZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false,
            data: null,
            characters: null
        }
    }

    // http request with axios
    componentDidMount(){

        // Make a request to the api SWAPI
        Axios.get('http://swapi.dev/api/people/')

        // handle successfull response
        .then( (response) => {
            console.log(response.data);
                this.setState({
                loaded: true,
                data: response.data, //Fill data with the raw datas from response
                characters: returnElementWithCharacterList(response.data.results)
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
    
    render() {
        return (
            <ul className="list-group list-group-flush p-3 my-5">
                {this.state.characters}
            </ul>
        );
    }
}

export default ListZone;




//     // http request with axios
//     componentDidMount(){

//         // Make a request to the api SWAPI
//         Axios.get('https://swapi.dev/api/')

//         // handle successfull response
//         .then( (response) => {
//             //Fill categories with HTML elements coming from listcategory using datas from the api usin the returnElementWithDatas function
//             let categories = returnElementWithDatas(response);
//             this.setState({
//                 loaded: true,
//                 data: response.data, //Fill data with the raw datas from response
//                 categories: categories //Fill categories with the complete element list created with the data in response
//             });
//         })
//         // handle response errors
//         .catch( (error) => {
//             this.setState({
//                 loaded: true,
//                 error: error
//             });
//         });
//     }

//     //Render html elements sent to the parent app
//     render(){
//         //Handle http state loaded
//         if(this.state.loaded){
//             //Handle http state loaded but with an error
//             if(this.state.error){
//                 return(
//                     <h3 className="text-white bg-danger p-5 text-center">une erreur "{this.state.error.message}" est survenue !</h3>
//                 );
//             }
//             //Handle http state loaded without and error
//             return(
//                 <main className="text-center text-white">
//                 <article className="container">
//                     <div className="pb-3">
//                         <h1 className="txt-yellow">Bienvenue dans la base de données de l'univers Star Wars</h1>
//                         <p>Parcourez à volonté les données pour retrouver les informations que vous désirez.</p>
//                     </div>
//                     <div className="row">
//                         {this.state.categories}
//                     </div>
//                 </article>
//             </main>
//             );
//         }
//         //Handle http state not loaded yet
//         return (
//             <div>
//                 <h2 className="text-white bg-yellow p-5 text-center jediFont">Données en cours de chargements</h2>
//             </div>
//         );
//     }
// }

// export default Home;