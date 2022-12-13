import "./review.css"
import ReviewAPI from "../service/reviewAPI";
import { useRef } from "react";
function Review() {
    const reviewRef=useRef()
    //입력 및 출력
    const handleSubmit =(evt)=>{
        evt.preventDefault();
        console.log(reviewRef.current.value)
        ReviewAPI.review(reviewRef.current.value)
    }

    return (<form >
        <input type="file" />
        <input type="text" name="review" placeholder="리뷰를 등록해보세요." ref={reviewRef}/>
        <button type="submit" onClick={handleSubmit}>등록</button>

        </form>);
}

export default Review;