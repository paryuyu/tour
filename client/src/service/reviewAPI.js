class ReviewAPI{
    constructor(baseURL){
        this.baseURL = baseURL;
        
        this.getOption = {
            method: "get"
        }

        this.postOption = {
            method: "post",
            headers: {
                "content-type": "application/json"
            }
    }
}


async review(review){
    const response = await fetch(this.baseURL + "/api/review",{
        ...this.postOption,
        body: JSON.stringify({review})
    })

    return await response.json();
}



}

export default ReviewAPI;