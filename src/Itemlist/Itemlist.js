import { Card } from "../Cards/Card";


const Itemlist = ({ cards }) => {
    return(
        <div>
            <div className='row container d-flex justify-content-between'>
                { cards.map((libro) => <Card key={libro.id} card={libro}/>) }
                
            </div>
        </div>
    )
}

export default Itemlist