import {Router} from "express"
const router = Router();

import reviewSchema from "../model/reviewModel.js"


router((req, res, next) => {
    next()
});




//쿼리로 전달받은 아이디에 해당하는 리뷰를 응답보내는게 목적
router.get("/get", async (req, res) => {
    const { id } = req.query;
    try{
        const found = await reviewSchema.find({target:id}).lean();
        res.json({result:true })
    }catch(e){
        res.json({result:false, message: "리뷰를 불러올 수 없습니다."})
        console.log(e)
    }

})



//멀터쓰려면 여기서 써야함

//리뷰등록하기.
router.post("/post", async (req, res) => {
    const photos=[];
    const input = {
        writer: req.body.writer, //작성자
        review: req.body.review, //리뷰
        targetId: req.body.targetId, //관광지
        score: req.body.score, //별점   
        photos: req.body.photos, //사진들은 src array로 불러오기.
        createdAt: req.body.createdAt
    }
    //=={...req.body, photos}
    
    const reviewCreate = await reviewSchema.create({}).lean();
    
    console.log(reviewCreate,"reviewCreate")
    res.status(200).json({result:true, data:reviewCreate})
})

export default router;