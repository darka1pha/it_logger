import React from 'react'
import {connect} from 'react-redux'
import {deleteTech} from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'


const TechItems = ({ tech:{firstName , lastname , id} , deleteTech }) => {
   
    const onDelete = () => {
        deleteTech(id)
        M.toast({ html:'Technician Delete' })

    }

    return (
        <li className='collection-item'>
            <div>
                {firstName} {lastname}
                <a 
                    onClick={onDelete} href='#!' className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null , {deleteTech})(TechItems)
