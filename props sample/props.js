function Card(props) {
    return (
        <div key={props.id} className={props.plan}>
           <h2 className="plan">{props.plan}</h2>
           <h1 className="price">{props.price}</h1>
           <ul>
               <li className='grey'>{props.moneyBack}</li>
               <li>{props.storage}</li>
               <li className='grey'>{props.node}</li>
               <li>{props.database}</li>
               <li className='grey'>{props.domain}</li>
               <li>{props.free}</li>
               <li className='grey'>{props.others}</li>
           </ul>
           <button>Add plan</button>
        </div>
    )
}

export default Card;