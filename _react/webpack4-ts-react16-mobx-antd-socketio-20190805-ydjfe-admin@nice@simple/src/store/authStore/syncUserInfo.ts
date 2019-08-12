import { LOCALSTORAGE_KEYS } from 'constants'

export const initialUserInfo = (() => {
    const localUserInfo = localStorage.getItem(LOCALSTORAGE_KEYS.USERINFO)
    const _userInfo: IAuthStore.UserInfo = localUserInfo ? JSON.parse(localUserInfo) : {}
    return _userInfo
})()

let userInfo: IAuthStore.UserInfo = initialUserInfo

/**
 * syncUserInfo for http
 *
 * @export
 * @param {IAuthStore.UserInfo} data
 */
export function syncUserInfo(data: IAuthStore.UserInfo) {
    console.log(data)
    userInfo = data
}

export default userInfo
