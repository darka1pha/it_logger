import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteLog } from '../../actions/logActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({log , deleteLog}) => {

    const onDelete = () => {
        deleteLog(log.id)
        M.toast({ html: 'Log successfully deleted' })
    }


    return (
        <li className='collection-item'>
            <div>
                <a 
                    className={`modal-trigger 
                                ${log.attention ? 'pink-text' : 'blue-text'}`} 
                    href="#edit-log-modal">{log.message}</a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>
                        ID #{log.id } { ' ' }
                    </span>
                     Last Updated by { ' ' }
                    <span className='black-text'>
                         {log.tech} { ' ' }
                    </span>
                    on <Moment format='MMMM Do YYYY, h:mm:ss a'>
                        {log.date}
                    </Moment>
                </span>
                <a href='#!' onClick={onDelete} className='secondary-content'> 
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>

        </li>
    )
}

export default connect(null , {deleteLog}) (LogItem)
