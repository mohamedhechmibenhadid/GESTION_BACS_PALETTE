import {Link} from "react-router-dom"
import './members.css'
function Members_Table(props){
    return(
        <div className='Members'>
        <div className='banner'>
            <h2>{props.banner}</h2>
        </div>
    <table className='table_members'>
<tr>
<th>Nom</th>
<th>Matricule</th>
<th>Mail</th>
<th>Groupe Name</th>
<th>Update</th>
<th>Delete</th>
</tr>
{props.members.map(({name,email,pic,work,url,date})=>(
<tr>
<td><div className="member">
<div className='user_info'><strong className='user_name'>{name}</strong><br/><small>{email}</small></div>
</div></td>
<td>{work}</td>
<td>{date}</td>
<td>{date}</td>

<td>{date}</td>

<td><Link to={"/group/member/"+url} onClick={()=>hidenav()}>see</Link></td>
</tr>
))}

</table>
    </div>

    )
}
export default Members_Table;