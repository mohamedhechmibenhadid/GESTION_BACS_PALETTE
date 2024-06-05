import { Route,Routes } from 'react-router-dom';
import SignIn from '../login/SignIn';
import SignUp from '../login/SignUp';
import Dash from '../Dashboard/Dash';
import User from '../Dashboard/user/user';
import Article from '../Dashboard/Articles/articles';
import Fournisseur from '../Dashboard/fournisseur/fournisseur';
export default function RouteFunction(){
    return(
        <>
            <Routes>
<Route path='/SignIn' element={<SignIn/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/Dashboard/' element={<Dash/>}/>
<Route path='/Dashboard/fournisseur' element={<Fournisseur/>}/>
<Route path='/Dashboard/article' element={<Article/>}/>
        <Route path='/Dashboard/users' element={<User/>}/>
            </Routes>
        </>
    )
}