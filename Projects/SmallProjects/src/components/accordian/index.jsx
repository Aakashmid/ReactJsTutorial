import { useState } from "react";
import data from "./data";
import "./style.css";
export default function Accordian() {
    const [selectedId, setSelectedId] = useState(null);
    const [multipleIds, setMultipleIds] = useState([]);
    const [isMultipleSelection, setIsMultipleSelection] = useState(false);

    const handleToggleSingleSelection = (getCurrentId) => {
        console.log(getCurrentId);
        if (selectedId === getCurrentId) {
            setSelectedId(null);
            return;
        }
        setSelectedId(getCurrentId);
    }


    const handleMultipleSelection = (getCurrentId) => {
        if (isMultipleSelection) {
            if (multipleIds.includes(getCurrentId)) {
                setMultipleIds(multipleIds.filter((id) => id !== getCurrentId));
            } else {
                setMultipleIds([...multipleIds, getCurrentId]);
            }
        } else {
            setSelectedId(getCurrentId);
        }
    }

    return <>
        <div className="wrapper">
            <div className="content">

                <button onClick={() => setIsMultipleSelection(!isMultipleSelection)} className="enable-multiple-btn">{!isMultipleSelection ? 'Enable Multiple Selection' : 'Disable Multiple Selection'} </button>
                {data && data.length > 0 ?
                    <div className="items">
                        {data.map((obj) => {
                            return <div className="accordian-item">
                                <div className="title" onClick={isMultipleSelection ?()=>handleMultipleSelection(obj.id) :() => handleToggleSingleSelection(obj.id)}>
                                    <h3 className="ques">{obj.question}</h3>
                                    <span className="">+</span>
                                </div>

                                {isMultipleSelection ?
                                    multipleIds.includes(obj.id) && <div className="answer">
                                        {obj.answer}
                                    </div>
                                    :
                                    selectedId === obj.id && <div className="answer">
                                        {obj.answer}
                                    </div>
                                }

                            </div>
                        })}
                    </div>
                    :
                    <div className="accordian-item">data not found</div>
                }
            </div>
        </div>
    </>
}