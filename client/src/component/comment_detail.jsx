import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewFind } from "../service/review_API";

function CommentDetail({ }) {
    let { id } = useParams()
    let [reviews, setReviews] = useState([])
    console.log(id, 'params')

    async function find() {
        let res = await ReviewFind(id)
        console.log(res.data, 'ressss')
        setReviews(res.data)
    }


    useEffect(() => {
        //리뷰등록될 때, 첫 로딩화면 때 새고하기
        find()
    }, [])



    //TODO: console에 출력은 잘 되는데 화면에 출력이 안됨. 확인해야함.
    return (<>
        {reviews.length > 0 && reviews.map((one, index) => {
            <>
             <p>{one.writer}</p>
             <p>{one.review}</p>
            </>
        })}


    </>);
}

export default CommentDetail;