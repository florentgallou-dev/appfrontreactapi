import List from './list/list';
import Additem from './additem/additem';

function Shoppinglist() {
    const items = ["Manger", "Dormir", "Travailler", "Évacuer", "Jouer"];
    return (
        <div>
            <Additem />
            <List items = {items}/>
        </div>
    );
}

export default Shoppinglist;