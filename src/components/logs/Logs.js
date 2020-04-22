import React , { useEffect} from 'react'
import LogItem from './LogItem'
import Preloader from '../layouts/preloader'
import { connect } from 'react-redux'
import { getLogs } from '../../actions/logActions'
const Logs = ({ log:{ logs , loading } , getLogs }) => {

    useEffect(()=>{
        getLogs()
        // eslint-disable-next-line
    } , [])


    if(loading || logs === null) {
        return <Preloader/>
    }


    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'> Stystem Logs</h4>
            </li>
            {!loading && logs.length === 0 ? 
                (<p className='center'> No Logs to Show. </p>) :
                
                (logs.map(log => <LogItem log={log} key={log.id} />)
                
                )} 
        </ul>
    )
}

const mapStateToProps = state => ({

    // First log name is optional and secound one is up to name of prop in CombineReducer
    log: state.log
})

export default connect(mapStateToProps , 
                        { getLogs })
                        (Logs)
