import React from 'react'

function CustomerExperience() {
    return (
        // <div className="flex items-center justify-center bg-blue-700 text-white h-[100vh] font-bold text-3xl pb-32">Customer Experience</div>
        <div className="bg-gray-100 h-[100vh] pt-16">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <h2 className="text-2xl font-bold mb-3">
                            Cleanliness and Sanitation
                        </h2>
                        <p className="mb-5">
                            We take cleanliness and sanitation very seriously.
                            Our store is regularly cleaned and disinfected, and
                            our staff wears gloves and masks while handling your
                            water containers. We also use high-quality water
                            filtration systems to ensure that the water we
                            provide is pure and safe for consumption.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-3">
                            Friendly Staff
                        </h2>
                        <p className="mb-5">
                            Our staff are trained to provide excellent customer
                            service. They are always friendly, courteous, and
                            happy to answer any questions you may have about our
                            products and services. We strive to make every
                            customer feel welcome and valued.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-3">
                            Fast and Efficient Service
                        </h2>
                        <p className="mb-5">
                            We know that your time is valuable, which is why we
                            make sure our service is fast and efficient. Our
                            water refilling process is quick and easy, and our
                            delivery service is reliable and timely. We aim to
                            provide a hassle-free experience for our customers.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-3">
                            Convenient Location and Hours
                        </h2>
                        <p className="mb-5">
                            We are located in a convenient location that is
                            easily accessible by car or public transportation.
                            We also have flexible hours to accommodate your busy
                            schedule. Whether you need to refill your water
                            during the day or after work, we're here to serve
                            you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerExperience
