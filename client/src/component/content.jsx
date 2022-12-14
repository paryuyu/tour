import Map from "./map";
import Item from "./item";
import "./content.css"

function Content({ datas , onSelected}) {
    //console.log(datas, "<=====content-datas-length")

    return (<div className="contentOut">
     
            <div style={{overflow:"scroll", height:"500px"}}>
                {datas.map((one) => {
                    return <Item data={one} key={one.id} className="itemList" onSelected={onSelected}/>
                })}
            </div>
    </div>);
}

export default Content;