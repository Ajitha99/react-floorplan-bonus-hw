function Bath (props){
    return(
        <div className="bathDiv" id = {`bath - ${props.size}`}>
            <h3>{props.size} Bath</h3>
        </div>
    )
}
export default Bath;