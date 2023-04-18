export default function Card(props) {

    function go_to_profile() {
        location.href = `https://www.ifood.com.br/delivery/esteio-rs/senhor-das-massas-centro/4961bfb0-1a4f-46bb-a442-7811498ef1af`
    }

    return (
        <div className='card'>
            <img className='profile-picture' src={props.data.image}></img>
            <div className='div-align-card-text'>
                <a className='card-name'> {props.data.name} </a>
                <a className='card-price'> R$ {props.data.price} </a>
                <a style={{display: 'none'}}> {props.data.category} </a>
                <button className="order-btn" onClick={go_to_profile}> Peça pelo ifood </button>
                <div className="card-desc">
                    <p>{props.data.desc}</p>
                    <a> {props.data.amount}</a>
                </div>
            </div>
        </div>

    )
}