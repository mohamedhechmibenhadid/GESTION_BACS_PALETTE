import {Link} from "react-router-dom"
import './members.css'
function Articles_tables(props){
    return(
        <div className='Members'>
        <div className='banner'>
            <h2>{props.banner}</h2>
        </div>
    <table className='table_members'>
<tr>
<th>Nom</th>
<th>famille</th>
<th>Update</th>
<th>Delete</th>
</tr>
{props.members.map(({code,famille})=>(
<tr>
<td>{code}</td>
<td>{famille}</td>



<td>update</td>
<td>delete</td>

</tr>
))}

</table>
    </div>

    )
}
export default Articles_tables;