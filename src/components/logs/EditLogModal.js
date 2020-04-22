import React ,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {

    const [message , setMessage] = useState('')
    const [attention , setAttention] = useState(false)
    const [tech , setTech] = useState('')

    const onSubmit = () => {
        if(message === '' || tech === '')
        {
            M.toast({ html:'Please enter a Message and tech' })
        }
        else {
            console.log(message , tech , attention)
            setMessage('')
            setTech('')
            setAttention(false)
        }

    }

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' 
                            name='message' 
                            value={message} 
                            onChange={e => 
                            setMessage(e.target.value)}
                        />
                        <label htmlFor='message' className='active'>
                            Log Message
                        </label>
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
                            <option value='John Doe'>
                                john Doe
                            </option>
                            <option value='Sam Smith'>
                                Sam Smith
                            </option>
                            <option value='Elizabeth Olsen'>
                                Elizabeth Olsen
                            </option>
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

export default EditLogModal
