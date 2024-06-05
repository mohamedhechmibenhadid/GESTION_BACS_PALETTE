import './member.css'
import {CiTwitter} from 'react-icons/ci';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Member(props){

    return(
        
        <div className="card">
        <Link style={{textDecoration:'none'}}  to={"/group/member/"+ props.url} >
        <div >
                <p className='nom'>{props.nom}</p>
                <p className='work'>{props.work}</p>
                <p className='email_memb'>{props.email}</p>
                <p style={{marginRight:'0.5vh',marginLeft:'0.5vh',color:'black'}}>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an 
                     unknown printer took a galley of type and scrambled 
                     it to make a type specimen book. It has survived not 
                     only five centuries, but also the leap into electronic 
                     typesetting, remaining essentially unchanged.</p>
                <div style={{justifyContent:"space-between",display:"flex",alignItems:'center',fontSize:'3vh'}}>
                <Link to="#" style={{alignItems:'center'}}><CiTwitter style={{color:"#00acee" }}/></Link>
                <Link to="#" style={{alignItems:'center'}}><AiOutlineLinkedin style={{color:"#0072b1"}}/></Link>
                <Link to="#" style={{alignItems:'center'}}><AiOutlineFacebook style={{color:"#3b5998"}}/></Link>
                <Link to="#" style={{alignItems:'center'}}><BsWhatsapp style={{color:"	#25D366"}}/></Link>
                </div>
        </div>
        </Link>
        </div>

        
    )
}

export default Member