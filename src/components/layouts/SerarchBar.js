import React , {useRef} from 'react'
import {connect} from 'react-redux'
import { searchLogs } from '../../actions/logActions'
const SerarchBar = ({searchLogs}) => {

    const text = useRef('')
    const onChange = e => {
        searchLogs(text.current.value)
    }
    return (
        <nav style={{ marginBottom:'30px'}} className="pink accent-3">
            <div className="nav-wrapper">
            <form>
                <div className="input-field">
                <input ref={text} onChange={onChange} placeholder='Search Logs' id="search" type="search" required/>
                <label className="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
                <i className="material-icons">close</i>
                </div>
            </form>
            </div>
         </nav>
    )
}

export default connect(null , {searchLogs})(SerarchBar)
