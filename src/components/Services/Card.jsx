

function Card(props) {
    const {title, url} = props.data;
    return <div className="card">
        <div className="image">
            <img src={url} alt={title} loading="lazy"/>
        </div>
        <div className="title">{title}</div>
    </div>
}

export default Card;