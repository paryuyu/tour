import "./review.css"
import ReviewAPI from "../service/reviewAPI";
import { useRef, useState } from "react";
import { ReviewCreate } from "../service/review_API";
function Review({item}) {
 
    const [review, setReview] = useState("")
    const [writer, setWriter] = useState("")
    
    console.log(item,'리뷰화면')

    const handleSubmit =(evt)=>{
        evt.preventDefault();
        if(item){
            let fetchItem = {
                review: review,
                writer: writer,
                targetId: item.id,
                createdAt: new Date()
            }
    
            ReviewCreate(fetchItem)
        }
        
    }



    return (<div >

        {/* <input type="file"/> */}
        <input type="text" name="writer" placeholder="작성자" onChange={(evt)=>{setWriter(evt.target.value)}} />
        <input type="text" name="review" placeholder="리뷰를 등록해보세요." onChange={(evt)=>{setReview(evt.target.value)}} />
        <button onClick={handleSubmit}>등록</button>

        </div>);
}

export default Review;