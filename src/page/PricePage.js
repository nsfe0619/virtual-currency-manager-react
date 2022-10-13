import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { addData3 } from '../action/todolist';

function PricePage() {
    const { register, handleSubmit } = useForm();
    const onFormSumbit = (formObj, e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let submitData = { type: '', name: '', value: '' };
        for (const pair of formData.entries()) {
            submitData[pair[0]]=pair[1];
        }
        dispatch(addData3(submitData));
    };
    const dataList3 = useSelector(state => {
        return state.data3.dataList3
    });
    const dispatch = useDispatch();
    return (
        <form onSubmit={handleSubmit(onFormSumbit)}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>類型</th>
                        <th>名稱</th>
                        <th>價值</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{
                    dataList3.map(d => (<tr>
                        <td>{d.type}</td>
                        <td>{d.name}</td>
                        <td>{d.value}</td>
                    </tr>))}
                    <tr>
                        <td>
                            <select {...register("type")} >
                                <option>法定貨幣</option>
                                <option>虛擬貨幣</option>
                            </select>
                        </td>
                        <td>
                            <input {...register("name")} />
                        </td>
                        <td>
                            <input {...register("value")} />
                        </td>
                        <td>
                            <input type="submit"/>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </form>
    );
}

export default PricePage;