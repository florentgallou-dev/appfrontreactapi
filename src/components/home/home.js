const categories = ["Personnages", "Planètes", "Films", "Espèces", "Véhicules", "Vaisseaux"];

//Function to transform accentuated character by non accentuated characters.
String.prototype.sansAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
     
    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
    return str;
}

let arrayOfElementsDOM = categories.map((category) => <div className="col-12 col-sm-6 col-xl-4"><div className="p-3"><div className="row bg-lightGrey align-items-center heightCat p-3"><div className={"col-4 imgCat " + category.sansAccent().toLowerCase()}></div><div className="col-8"><input type="submit" className="btn-home text-break" value={category} /></div></div></div></div>);

function Home() {
    return (
        <main className="text-center text-white">
            <article className="container">
                <div className="pb-3">
                    <h1 className="txt-yellow">Home</h1>
                </div>
                <div className="row">
                   {arrayOfElementsDOM}
                </div>
            </article>
        </main>
    );
}

export default Home;