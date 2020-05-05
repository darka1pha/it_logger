import React ,{useState , useEffect} from 'react'
import {connect} from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'
import { updateLog } from '../../actions/logActions'
import TechSelectOption from '../techs/TechSelectOption'

const EditLogModal = ({ current, updateLog }) => {

    const [message , setMessage] = useState('')
    const [attention , setAttention] = useState(false)
    const [tech , setTech] = useState('')

    useEffect(()=>{
        if(current)
        {
            setMessage(current.message)
            setAttention(current.attention)
            setTech(current.tech)
        }
    } , [current])

    const onSubmit = () => {
        if(message === '' || tech === '')
        {
            M.toast({ html:'Please enter a Message and tech' })
        }
        else {
            const updLog = {
                id: current.id ,
                message,
                attention,
                date: new Date()
            }

            updateLog(updLog)
            M.toast({ html:`Log Updated by ${tech}` })
            setMessage('')
            setTech('')
            setAttention(false)
        }

    }

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Edit System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' 
                            name='message' 
                            value={message} 
                            onChange={e => 
                            setMessage(e.target.value)}
                        />
                       
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <select name='tech' 
                            value={tech} 
                            className='browser-default' 
                            onChange={e => 
                            setTech(e.target.value)}
                        >
                            <option disabled value=''>
                                Select Technician
                            </option>
                            <TechSelectOption />
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input type='checkbox' 
                                    className='filled-in' 
                                    checked={attention} 
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className='modal-footer'>
                    <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-light btn pink accent-3'>
                        Enter
                    </a>
                </div>
            </div>
        </div>
    )
}

const modalStyle = {
    with: '75%' ,
    height:'75%'
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps , {updateLog})(EditLogModal)
