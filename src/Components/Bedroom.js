function Bedroom (props) {
    return(
        <div className="bedroomDiv" id = {`bed-${props.bedNum}`}>
            <h3>Bedroom {props.bedNum}</h3>
        </div>
    )
}


export default Bedroom;