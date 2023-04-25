import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

let scheduleType
let deliveryDate
let deliveryTime


try {
    scheduleType = localStorage.getItem("scheduleType");
    deliveryDate = localStorage.getItem("dateValue");
    deliveryTime = localStorage.getItem("timeValue");
    
} catch (error) {
    console.log(error)
}

function OrderSchedule() {
    
const updatedSchedule = {
    "schedType": scheduleType,
    "deliveryDate": deliveryDate,
    "deliveryTime": deliveryTime
    }
    // navigation and passing of data
const [isProceed, setIsProceed] = useState(false)
const [schedule, setSchedule] = useState(updatedSchedule);

 
const handleChange = (e) => {

    const { name, value } = e.target
    updatedSchedule[name] = value

    console.log(updatedSchedule[name], value)

    setSchedule((prev) => {
        return { ...prev, [name]: value }
    })}

    const handleNext = () => {
    localStorage.setItem("scheduleType", updatedSchedule.schedType)
    localStorage.setItem("dateValue", updatedSchedule.deliveryDate.toString())
    localStorage.setItem("timeValue", updatedSchedule.deliveryTime.toString())
    // console.log(updatedSchedule.deliveryDate.toString())
    setIsProceed((prev) => !prev)
}

  return (
    <div className="w-[100vw] h-[100vh] flex bg-slate-100 justify-center items-start pt-20">
        <div className="flex-col gap-2">
            <div className="py-7 font-semibold text-center text-2xl">When do you want to deliver your order?</div>

            <div className="flex flex-col mb-4">
            <select
                id="scheduleType"
                name="scheduleType"
                defaultValue={schedule.schedType}
                onChange={handleChange}
                className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
            >
                <option value=""></option>
                <option value="scheduled">Scheduled</option>
                <option value="anytime">Anytime of the Day</option>
                </select>
            </div>

            {updatedSchedule.scheduleType === "anytime" ? (
                <div className="py-5">Any Time of the Day</div>    
            ) : (
            <div className="p-5">
                <div className="flex flex-col mb-4">
                    <input
                        type="date"
                        id="date"
                        name="deliveryDate"
                        placeholder="Date"
                        defaultValue={schedule.deliveryDate}
                        onChange={handleChange}
                        className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                    />
            </div>
            <div className="flex flex-col mb-4">
                <input
                    type="time"
                    id="time"
                    name="deliveryTime"
                    placeholder="Time"
                    defaultValue={schedule.deliveryTime}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded-md outline-none bg-gray-100 text-gray-700 mb-2"
                />
            </div>
            </div>
            )}

            <div className="flex justify-around">
                <button className="py-2 bg-slate-600 text-white font-semibold text-xl px-5 mb-60" onClick={handleNext}>Proceed</button>
            </div>

            { isProceed && (
                    <Navigate to="/order-mode-of-payment" />
                ) }
        </div>
        
    </div>
  )
}

export default OrderSchedule