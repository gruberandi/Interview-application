import { useState } from "react";
import data from "./data";

const According = () => {
    const [selection, setSelection] = useState(null);
const handleSingelSelection = (getCurrentSelection)=>{
    setSelection(getCurrentSelection)
    console.log(selection);

}
    return (
        <div className="wrapper">
            {data && data.length > 0 &&
                data.map((dataItem, index) => (
                    <div className="item" key={index}>
                        <div onClick={()=>handleSingelSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selection === dataItem.id ?
                            <div className="content">
                               {dataItem.answer}
                            </div>
                            : null
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default According;
