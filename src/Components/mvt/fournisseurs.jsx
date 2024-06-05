import {Link} from "react-router-dom"
import './members.css'
function Fournisseurs(props){
    return(
        <div className='Members'>
        <div className='banner'>
            <h2>{props.banner}</h2>
        </div>
    <table className='table_members'>
<tr>
<th>name</th>

<th>cmd</th>
<th>immatriculation_camion</th>
<th>quantinte</th>
<th>bl</th>
<th>codemvt</th>
<th> groupe</th>
</tr>
{props.members.map(({nom,email,cmd,immatriculation_camion,quantinte,bl,codemvt,groupe})=>(
<tr>
<td><div className="member">
<div className='user_info'><strong className='user_name'>{nom}</strong><br/><small>{email}</small></div>
</div></td>
<td>{cmd}</td>

<td>{immatriculation_camion}</td>
<td>{quantinte}</td>
<td>{bl}</td>

<td>{codemvt}</td>
<td>{groupe}</td>


</tr>
))}

</table>
    </div>

    )
}
export default Fournisseurs;