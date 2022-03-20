import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import '../styles/Style.css';
import '../styles/FloorPlan.css';

function FloorPlan () {
    return(
        <div>
            <h1>Floor Plan</h1>
                <div className="mainFloor">
                    <div className="floorDiv">
                        <div className="rooms">
                            <Bedroom bedNum = "1" />
                            <Bath size = "Full"/>
                        </div>
                        <div className="parent">
                            <LivingRoom />
                            <Kitchen />
                        </div>
                        <Bedroom bedNum = "2" />
                        <div className="extRooms">
                            <Bath size = "half"/>
                            <Bedroom bedNum = "3" />
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default FloorPlan;