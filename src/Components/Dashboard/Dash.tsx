import * as React from 'react';
import Dashboard from './Dashboard';
import './Dash.css'
import { Route,Routes } from 'react-router-dom';
import User from '../Dashboard/user/user';

export default function Dash(){
    return(
        <div className='dashboard'>
            <div>
        <Dashboard />
        </div>
        <div>


        </div>
        </div>
    )
}