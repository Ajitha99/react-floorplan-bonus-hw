import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen (){
    return(
    
        <div className="kitchenDiv">
            <div className="kitProDiv">
                <Oven />
                <Sink />
            </div>
            <div><h3>Kitchen</h3></div>
        </div>
   
    )
}
export default Kitchen;