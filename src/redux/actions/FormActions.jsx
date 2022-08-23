import { CHANGE_THEME, DISABLED, SUA_SINH_VIEN, THEM_SINH_VIEN, TIM_KIEM_SINH_VIEN, UPDATE_SINH_VIEN, XOA_SINH_VIEN } from "../consts/FormConsts";

export const actionChangeTheme = (payload) => ({
    type: CHANGE_THEME,
    payload
})
export const actionThemSinhVien = (payload) => ({
    type: THEM_SINH_VIEN,
    payload
})
export const actionXoaSinhVien = (payload) => ({
    type: XOA_SINH_VIEN,
    payload
})
export const actionSuaSinhVien = (payload) => ({
    type: SUA_SINH_VIEN,
    payload
})
export const actionUpdate = (payload) => ({
    type: UPDATE_SINH_VIEN,
    payload
})
export const actionTimKiem = (payload) => ({
    type: TIM_KIEM_SINH_VIEN,
    payload
})




