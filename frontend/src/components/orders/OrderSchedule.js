import React, {useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Select from 'react-tailwindcss-select';

// import DateTimePicker from 'react-datetime-picker';
// import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

let scheduleType = "anytime";

function OrderSchedule() {

// navigation and passing of data
const [isProceed, setIsProceed] = useState(false)

const [dateValue, setDateValue] = useState(new Date());
const [timeValue, setTimeValue] = useState("");

// useLocationPassingData
const { state } = useLocation();
const { orderData } = state || {};

console.log("Schedule data", orderData)
 
const options = [
    {value: "scheduled", label: "Scheduled"},
    {value: "anytime", label: "Any Time of the Day"}
];

const [schedType, setSchedType] = useState({value: "anytime", label: "Any Time of the Day"});
    
    const handleChange = (value) => {
        setSchedType(value);
        scheduleType = value.value
        console.log("value:", scheduleType);
    };

const handleNext = () => {
    console.log("ito ang value nang date: ", dateValue)
    orderData[0].delivery_date = dateValue
    orderData[0].order_date = new Date()
    orderData[0].delivery_time = timeValue
    console.log("Updated na data: ", orderData)
    // console.log("ito ang value nang ")

    setIsProceed((prev) => !prev)
}

  return (
    <div className="w-[100vw] h-[100vh] flex bg-slate-100 justify-center items-start pt-20">
        <div className="flex-col gap-2">
            <div className="py-7 font-semibold text-center text-2xl">When do you want to deliver your order?</div>

            <div className="flex-col items-center gap-3">
                <Select
                value={schedType}
                    onChange={handleChange}
                options={options}
            />
            </div>

            {scheduleType === "anytime" ? (
                <div className="py-5">Any Time of the Day</div>    
            ) : (
            <div className="p-5">
                {/* <DateTimePicker onChange={onChange} value={dateValue} /> */}
                <div className="flex flex-col mb-4">
                    <input
                        type="date"
                        id="date"
                        name="delivery_date"
                        placeholder="Date"
                        defaultValue={dateValue}
                        onChange={setDateValue}
                        className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                    />
                </div>
                <div className="flex flex-col mb-4">
                <input
                    type="time"
                    id="time"
                    name="delivery_time"
                    placeholder="Time"
                    value={timeValue}
                    onChange={setTimeValue}
                    className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                />
            </div>
            </div>
            )}

            <div className="flex justify-around">
                <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mb-60" onClick={handleNext}>Proceed</button>
            </div>

            { isProceed && (
                    <Navigate to="/order-mode-of-payment" state={{ orderData }} />
                ) }
        </div>
        
    </div>
  )
}

export default OrderSchedule