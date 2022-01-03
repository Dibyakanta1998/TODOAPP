import {Table} from 'react-bootstrap';


const Mtable = () => {
    const employee = [
        { name: "abc", email: "abc@gmail", phone: 213 },
        { name: "abd", email: "abd@gmail", phone: 214 },
        { name: "abe", email: "abe@gmail", phone: 215 },
    ]
    return (<div> 
        <Table >
            <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>

            {
                employee.map((item,i) => 
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>

                    </tr>

                )
            }


 </tbody>
        </Table>
    </div>



    );
}

export default Mtable;