import { CHANGE_THEME, DISABLED, SUA_SINH_VIEN, THEM_SINH_VIEN, TIM_KIEM_SINH_VIEN, UPDATE_SINH_VIEN, XOA_SINH_VIEN } from "../consts/FormConsts"
import { arrTheme } from "../../Theme/ThemeManager"

const initialState = {
    currentTheme: {
        bgColor: "#fff",
        color: "#7952b3",
        borderButton: "1px solid #7952b3",
        borderRadiusButton: "none",
        hoverTextColor: "#fff",
        hoverBgColor: "#7952b3",
        borderColor: "#7952b3"
    },
    arrListSinhVien: [
        {
            ma: '1',
            hoTen: 'Nguyen Van A',
            soDienThoai: '012346789',
            email: 'a dong sun.com',
        },
        {
            ma: '2',
            hoTen: 'Nguyen Van B',
            soDienThoai: '012346789',
            email: 'b.com',
        },
        {
            ma: '3',
            hoTen: 'Nguyen Van C',
            soDienThoai: '012346789',
            email: 'c tri .com',
        },
        {
            ma: '4',
            hoTen: 'Nguyen Van D',
            soDienThoai: '012346789',
            email: 'd.com',
        },
    ],
    sinhVienEdit: {
    },
    disabled: false,
    mangDuocTimKiem: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case CHANGE_THEME:
            // ! so sánh value được gửi lên và ID trong arrTheme và set lại currentTheme
            {
                let value = payload;
                value = value * 1;
                let index = arrTheme.findIndex((theme) => {
                    return theme.id === value
                });
                let newTheme = arrTheme[index].theme;
                state.currentTheme = newTheme;
                return { ...state }
            }
        case THEM_SINH_VIEN:
            {
                return { ...state, arrListSinhVien: [...state.arrListSinhVien, payload] }
            }
        case XOA_SINH_VIEN: {
            return { ...state, arrListSinhVien: [...state.arrListSinhVien].filter(item => item.ma !== payload) }
        }
        case SUA_SINH_VIEN: {
            return { ...state, sinhVienEdit: payload, disabled: true }
        }
        case UPDATE_SINH_VIEN: {
            let sinhVien = payload;
            let mangSinhVien = state.arrListSinhVien;
            let index = mangSinhVien.findIndex(item => item.ma === sinhVien.ma);
            mangSinhVien[index] = sinhVien;
            let newSinhVienEdit = {
                ma: '',
                hoTen: '',
                soDienThoai: '',
                email: '',
            }
            return {
                ...state, arrListSinhVien: [...mangSinhVien], sinhVienEdit: newSinhVienEdit, disabled: false
            }
        }
        case TIM_KIEM_SINH_VIEN: {
            // ! payload là ten
            console.log(payload);
            let mangCanTim = state.arrListSinhVien.filter((sinhVien, index) => {
                return sinhVien.hoTen.toLocaleLowerCase().includes(payload.toLocaleLowerCase());
            })
            state.mangDuocTimKiem = mangCanTim;
            return { ...state }
        }
        default:
            return state
    }
}
