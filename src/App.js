import React, { useState } from 'react'
import MultiStep from 'react-multistep'
import StepOne from './components/stepOne'
import StepTwo from './components/stepTwo'
import StepThree from './components/stepThree'
import StepFour from './components/stepFour'


export const App = () => (
  <div className='container'>
    <MultiStep activeStep={0} prevButton={{title: 'Back', style:{ borderColor: 'red', marginRight: "1rem" }}} >
      <StepOne title='Step 1'/>
      <StepTwo title='Step 2'/>
      <StepThree title='Step 3'/>
      <StepFour title='Step 4'/>
    </MultiStep>
    <div className='app-footer'>
      <h6>Use navigation buttons or click on progress bar for next step.</h6>
      Code is on{' '}
      <a href='https://github.com/Srdjan/react-multistep' target='_blank' rel='noreferrer'>
        github
      </a>
    </div>
  </div>
)

