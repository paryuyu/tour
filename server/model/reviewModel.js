import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    writer: String, //작성자
    review: { type: String }, //리뷰
    targetId: String, //관광지
    createdAt:{ type:Date}
});

export default mongoose.model("tour", reviewSchema);