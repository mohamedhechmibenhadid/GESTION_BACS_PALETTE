import Dashboard from "../Dashboard"
import Members_Table from "../../mvt/mvt"

export default function User(){
    const members = [
        {
          nom:"tarhouni",
          email:"tarhouni@exemple.com",
          work:"doctor",
          url:"nesrine",
          date:"02/02/02",
        },
        {
          nom:"tarhouni2",
          email:"tarhouni@exemple.com",
          work:"doctor",
          url:"jhon",
          date:"02/02/02",
        },
        {
          nom:"tarhouni3",
          email:"tarhouni@exemple.com",
          work:"doctor",
          url:"nesrine",
          date:"02/02/02",
        },
        {
          nom:"tarhouni4",
          email:"tarhouni@exemple.com",
          work:"doctor",
          url:"hech",
          date:"02/02/02",
        }
      ]
      
    return (
        <>
                <div className='dashboard'>
            <div>
        <Dashboard />
        </div>
        <div className="usersTable">

            <h1 style={{textAlign:'center'}}>Our Member</h1>

                    <Members_Table  banner="user" members={members}/> 

 </div>
        </div>
        </>
    )
}