import {Router} from "express"
const router = Router();

import reviewSchema from "../model/reviewModel.js"




//쿼리로 전달받은 아이디에 해당하는 리뷰를 응답보내는게 목적
router.get("/get", async (req, res) => {
    const { id } = req.query;
    console.log(id,"targetId")
    try{
        const found = await reviewSchema.find({targetId:id}).lean();
        res.json({result:true , data:found})
    }catch(e){
        res.json({result:false, message: "리뷰를 불러올 수 없습니다."})
        console.log(e)
    }

})



//멀터쓰려면 여기서 써야함

//리뷰등록하기.
router.post("/post", async (req, res) => {
    
    const input = {
        writer: req.body.writer, //작성자
        review: req.body.review, //리뷰
        targetId: req.body.targetId, //관광지
        createdAt: req.body.createdAt
    }
    
    const reviewCreate = await reviewSchema.create(input);
    
    console.log(reviewCreate,"reviewCreate")
    res.status(200).json({result:true, data:reviewCreate})
})

export default router;