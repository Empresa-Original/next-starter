import React from 'react';

const ContactUsPage = () => {
    return (
        <div className="p-4">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">CONTACT US</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-600">Reach us through the following available options if you have any queries!</p>
                        <address className="mt-4">
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-10.5 8-14a8 8 0 00-16 0c0 3.5 8 14 8 14z" />
                                </svg>
                                <p className="mb-2"><strong>Kusunti, Lalitpur-13, Nepal</strong></p>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <p className="mb-2">GPO Box: 8975, EPC 669</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <p className="mb-2">NITS Seminary</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <p className="mb-2">Email: NOITS4International@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <p>Phone: +977 9768429570 / +977 9843485480 / +977 9861338585</p>
                            </div>
                        </address>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">NITS Academy</h3>
                        {/* Add your logo here */}
                        <img className="max-w-full" width={'250px'} src="https://nits.academy/wp-content/uploads/2021/04/nits_final.png" alt="Logo" />
                    </div>
                    <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows={4} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Continue with other sections if needed */}
        </div>
    );
};

export default ContactUsPage;
