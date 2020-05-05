import React ,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux'
import {addTech} from '../../actions/techActions'

const AddTechModal = ({ addTech }) => {

    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')

    const onSubmit = () => {
        if(firstName === '' || lastName === '')
        {
            M.toast({ html:'Please enter teh first name and last name' })
        }
        else {
            addTech({
                firstName ,
                lastName
            })
            setFirstName('')
            setLastName('')
            M.toast({ html:`${firstName} ${lastName} Added as a tech` })
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <div className='modal-content'>
                <h4>New Tecnician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' 
                            name='firstName' 
                            value={firstName} 
                            onChange={e => 
                            setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>
                            Firt Name
                        </label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input type='text' 
                            name='lastName' 
                            value={lastName} 
                            onChange={e => 
                            setLastName(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>
                            Last Name
                        </label>
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

export default connect(null , {addTech}) (AddTechModal)
