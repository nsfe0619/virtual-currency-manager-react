import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { addData } from '../action/todolist';

function DataPage() {
    const { register, handleSubmit } = useForm();
    const onFormSumbit = (formObj, e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let submitData = { index: '', price: '', unit: '' };
        for (const pair of formData.entries()) {
            submitData[pair[0]] = pair[1];
        }
        dispatch(addData(submitData));
    };
    const dataList1 = useSelector(state => {
        return state.data1.dataList1
    });
    const dataList3 = useSelector(state => {
        return state.data3.dataList3
    });
    const dispatch = useDispatch();
    return (
        <form onSubmit={handleSubmit(onFormSumbit)}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>單價</th>
                        <th>totle</th>
                    </tr>
                </thead>
                <tbody>{
                    dataList1.map(d => {
                        let unitPrice=dataList3.find(d3=>d3.name===d.unit).value;
                        let total=d.price*unitPrice;
                        return(<tr>
                            <td>{d.index}</td>
                            <td>{d.price}</td>
                            <td>{d.unit}</td>
                            <td>{unitPrice}</td>
                            <td>{total}</td>
                        </tr>)
                    })}
                    <tr>
                        <td>
                            <input {...register("index")} />
                        </td>
                        <td>
                            <input {...register("price")} />
                        </td>
                        <td>
                            <select {...register("unit")} >{
                                dataList3.map(d => (
                                    <option>{d.name}</option>))}
                            </select>
                        </td>
                        <td>
                            <input type="submit" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </form>
    );
}

export default DataPage;