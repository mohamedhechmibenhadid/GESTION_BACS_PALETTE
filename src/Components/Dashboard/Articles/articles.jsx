import Dashboard from "../Dashboard"
import Articles_tables from "./articles_tables"

export default function Article(){
    const members = [
        {
          code:"string",
          famille:"famille",
        },
      ]
    return(
        <>
                            <div className='dashboard'>
            <div>
        <Dashboard />
        </div>
        <div className="usersTable">

            <h1 style={{textAlign:'center'}}>Articles</h1>

                    <Articles_tables banner="Articles" members={members}/> 

 </div>
        </div>
        </>
    )
}