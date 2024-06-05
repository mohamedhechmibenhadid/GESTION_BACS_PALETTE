
import Members_Table from "../../members/members"
import Dashboard from "../Dashboard"
import Fournisseurs from "../../mvt/fournisseurs"
export default function Fournisseur(){
    const members = [
        {
          nom:"tarhouni",
          email:"tarhouni@exemple.com",
          cmd:"sdas",
          immatriculation_camion:"185tn888",
          quantinte:"185kg",
          bl:"bl",
          codemvt:"code_mvt",
          groupe:"grp",

        },
        {
            nom:"tarhouni2",
            email:"tarhouni@exemple.com",
            cmd:"asdas",
            immatriculation_camion:"185tn888",
            quantinte:"185kg",
            bl:"bl",
            codemvt:"code_mvt",
            groupe:"grp",
  
          },
          {
            nom:"tarhouni3",
            email:"tarhouni@exemple.com",
            cmd:"sdaa",
            immatriculation_camion:"185tn888",
            quantinte:"185kg",
            bl:"bl",
            codemvt:"code_mvt",
            groupe:"grp",
  
          },
      ]
    return(
        <>
                <div className='dashboard'>
            <div>
        <Dashboard />
        </div>
        <div className="usersTable">

            <h1 style={{textAlign:'center'}}>Fournisseur</h1>

                    <Fournisseurs  banner="Fournisseur" members={members}/> 

 </div>
        </div>
        </>
    )
}