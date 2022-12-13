//dotenv로 키값 받아오기.

export class TourAPI {

    constructor() {
        this.baseURL = "http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo"
    }


    async getInfos(tourDestNm){
    const key = process.env.REACT_APP_SERVICE_KEY;
        const type="json"


       const response = await fetch(this.baseURL+"?serviceKey="+key+"&type="+type)

       return await response.json();
    }

}





