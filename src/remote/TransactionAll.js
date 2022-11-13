import axios from "axios";
import BACKEND_URL from "../ServerConst";
import handleTransaction from "./response/HandleTransaction";
import commonHeader from "./commonHeader";


const tempData = {
    body : [{
        from : "온라인 명륜당",
        to : "myungrun@skku.edu",
        type : "",
        value : "100",
        date : "2021. 07. 12",
        hash : "hashid",
    },
            {
                from : "온라인 멘토링",
                to : "myungrun@skku.edu",
                type : "",
                value : "100",
                date : "2021. 09. 22",
                hash : "hashid",
            },
            {
                from : "킹고인과의 만남",
                to : "myungrun@skku.edu",
                type : "",
                value : "100",
                date : "2022. 5. 6",
                hash : "hashid",
            },
            {
                from : "온라인 멘토링",
                to : "myungrun@skku.edu",
                type : "",
                value : "150",
                date : "2022. 07. 12",
                hash : "hashid",
            },
            {
                from : "성균색 에세이",
                to : "myungrun@skku.edu",
                type : "",
                value : "100",
                date : "2022. 07. 21",
                hash : "hashid",
            },]
}

const temp = (callback)=>{
    callback(tempData.body)
}

function getAllTransData(account, callback, option = 0)
{
    //temp(callback)
    //return

    const header = commonHeader();
    axios({
        url: `${BACKEND_URL}/api/transaction/all?option=${option}`,
        method: "get",
        headers: header,
    }).then(
            (response)=>{

                //success
                console.log(response)
                callback(
                        response.data
                        );
            }
            );

    return





}

export default getAllTransData;