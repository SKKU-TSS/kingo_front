import { useCookies, Cookies } from "react-cookie"
import { COOKIE_TOKEN } from "../CookieConst"


const commonHeader = ()=>{

    const cookieStore = Cookies()

    return {
        Authorization : `Bearer ${cookieStore.get(COOKIE_TOKEN)}`
    }
}

export default commonHeader;