const IPFS_OPEN = "IPFS_OPEN"
const IPFS_CLOSE = "IPFS_CLOSE"

const actionIpfsOpen = (url)=>{
    return {
        type : IPFS_OPEN,
        url : url
    }
}

const actionIpfsClose = ()=>{
    return{
        type : IPFS_CLOSE
    }
}

const initState = {
    open : false,
    url : ""
}

const ipfsReducer = (state = initState, action) =>{

    switch(action.type)
    {
        case IPFS_OPEN :
            return {
                open : true,
                url : action.url
            }
            break;

        case IPFS_CLOSE :
            return {
                ...state,
                open : false
            }
            break;
        default : return state
    }
}

export {
    actionIpfsOpen,
    actionIpfsClose,
    ipfsReducer
}