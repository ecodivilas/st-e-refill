import React, { useState } from 'react'

import ContainerSelection from './ContainerSelection';
import OrderTypeSelection from './OrderTypeSelection';
import Schedule from './Schedule';
import { DatePicker } from '@julienvanbeveren/react-datetime-picker'
import { TimePicker } from 'react-ios-time-picker';
import OrderSummary from './OrderSummary';


function Order() {
   
    const [timeValue, setTimeValue] = useState('10:00');

    const onTimeChange = (timeValue) => {
        setTimeValue(timeValue);
    }

  return (
    // <div className="flex items-center justify-center bg-indigo-700 text-white h-[100vh] font-bold text-3xl pb-32">Insights</div>
    <div className="pt-10">
      <div className="flex justify-center">
        <h2 className="font-bold text-xl m-4">Order Page</h2>
        <OrderTypeSelection />
      </div>
      <ContainerSelection />
      <div className="flex justify-center">
      <Schedule />
      <DatePicker />
      <TimePicker onChange={onTimeChange} value={timeValue} />
      </div>
      <OrderSummary />
    </div>
    )
}

export default Order