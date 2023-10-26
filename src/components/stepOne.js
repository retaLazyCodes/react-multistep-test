import React, { useState, useEffect } from 'react'

let firstName = ''
const setFirstName = s => firstName = s

let lastName = ''
const setLastName = s => lastName = s

export default (props) => {
  const [changed, setChanged] = useState(0)
  const [isValidState, setIsValidState] = useState(false)
  
  const signalParent = (isValid) => {
    setIsValidState(isValid)
    props.signalIfValid(isValid)
  }

  useEffect(() => {
    console.log(`From Child, child in valid state?: ${isValidState}`)
    signalParent(isValidState)
  }, [])

  useEffect(() => {
    if(changed == 0) {
      signalParent(firstName.length > 0)
    }
  }, [changed])

  const validateFirstName = (val) => {
    setChanged(c => c += 1)
    
    let prevFirstName = firstName
    setFirstName(val)

    if(prevFirstName.length === 0 && val.length === 1) {
      signalParent(true)
      return
    }
    
    if(prevFirstName.length === 1 && val.length == 0) {
      signalParent(false)
      return
    }
  }

  const validateLastName = (val) => {
    setChanged(c => c += 1)
    setLastName(val)
  }

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>First Name</label>
          <input
            className='u-full-width'
            placeholder='First Name'
            type='text'
            onChange={e => validateFirstName(e.target.value)}
            value={firstName}
            autoFocus
            required
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Last Name</label>
          <input
            className='u-full-width'
            placeholder='Last Name'
            type='text'
            onChange={e => validateLastName(e.target.value)} 
            value={lastName}
          />
        </div>
      </div>
    </div>)
}
