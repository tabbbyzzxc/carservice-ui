import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faUsersGear} from "@fortawesome/free-solid-svg-icons";
import {Main} from "./Model";

export interface MainProps {
    main: Main;
    onChanged: (e: Main) => void;
}

const MainTab: React.FC<MainProps> = ({ main, onChanged }) => {

    /*const [workplaces, setWorkplaces] = useState(0);*/
    // const [carCapacity, setCarCapacity] = useState(main.carCapacity);
    return(

            <div className="container">
                <form className="row g-3">
                    {/*<div className={"col-md-6"}>
                        <label className="form-label">Number of workplaces</label>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUsersGear}/></span>
                            <input
                                type="number"
                                className="form-control"
                                value={workplaces}
                                onChange={(e) => setWorkplaces(parseInt(e.target.value))}
                                aria-describedby="basic-addon1"
                                required/>
                        </div>
                    </div>*/}
                    <div className={"col-md-6"}>
                        <label className="form-label">Car spots amount</label>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faCar}/></span>
                            <input
                                type="number"
                                className="form-control"
                                value={main ? main.carCapacity : 0}
                                onChange={(e) => onChanged({...main, carCapacity: parseInt(e.target.value) })}
                                aria-describedby="basic-addon1"
                                required/>
                        </div>
                    </div>
                </form>
            </div>
    );
}

export default MainTab;