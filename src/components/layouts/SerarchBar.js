import React from 'react'

const SerarchBar = () => {
    return (
        <nav style={{ marginBottom:'30px'}} className="pink accent-3">
            <div className="nav-wrapper">
            <form>
                <div className="input-field">
                <input id="search" type="search" required/>
                <label className="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
                <i className="material-icons">close</i>
                </div>
            </form>
            </div>
         </nav>
    )
}

export default SerarchBar
