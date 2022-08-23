import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Tbody, Td, Th, Thead, Tr } from '../StyledComponents/Table'
import { Button } from '../StyledComponents/Button'
import { actionSuaSinhVien, actionXoaSinhVien } from '../redux/actions/FormActions'
class TableList extends Component {
    handleDelete = (maSinhVien) => {
        this.props.dispatch(actionXoaSinhVien(maSinhVien))
    }
    handleEdit = (sinhVien) => {
        this.props.dispatch(actionSuaSinhVien(sinhVien))
    }
    renderListSinhVien = () => {
        let { arrListSinhVien } = this.props;

        return (
            arrListSinhVien.map((sinhVien, index) => (
                <Tr
                    key={index.toString + sinhVien.ma}
                >
                    <Td>{sinhVien.ma}</Td>
                    <Td>{sinhVien.hoTen}</Td>
                    <Td>{sinhVien.soDienThoai}</Td>
                    <Td>{sinhVien.email}</Td>
                    <Td >
                        <Button
                            className='col-6 rounded mx-2 my-1 btn btn-success'
                            onClick={() => {
                                this.handleEdit(sinhVien);
                            }}
                        >Sửa</Button>

                        <Button
                            className='col-6 rounded mx-2 my-1 btn btn-success'
                            onClick={() => {
                                this.handleDelete(sinhVien.ma)
                            }}
                        >Xóa</Button>
                    </Td>
                </Tr>
            ))
        )
    }
    render() {
        return (

            <Table className='table my-4 text-center'  >
                <Thead>
                    <Tr>
                        <Th>Mã SV</Th>
                        <Th>Họ tên</Th>
                        <Th>Số điện thoại</Th>
                        <Th>Email</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {this.renderListSinhVien()}
                </Tbody>
            </Table >
        )
    }
}
const mapStateToProps = (state) => ({
    arrListSinhVien: state.FormReducer.arrListSinhVien
})

export default connect(mapStateToProps)(TableList)
