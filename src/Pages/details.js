import React, { useState } from "react";

function Details() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            <div>
              <img
                alt=""
                src="https://i.postimg.cc/NLhwzFsd/daniel-james-DVXATXxgt-Kg-unsplash.jpg"
                className="object-contain h-screen w-full mt-2 border border-gray-300 rounded-md"
              />

              <div>
                <p className="text-sm">
                  Lake Magadi is the southernmost lake in the Kenyan Rift
                  Valley, lying in a catchment of faulted volcanic rocks, north
                  of Tanzania's Lake Natron. During the dry season, it is 80%
                  covered by soda and is well known for its wading birds,
                  including flamingos. Lake Magadi is the southernmost lake in
                  the Kenyan Rift Valley, lying in a catchment of faulted
                  volcanic rocks, north of Tanzania's Lake Natron. During the
                  dry season, it is 80% covered by soda and is well known for
                  its wading birds, including flamingos.Lake Magadi is the
                  southernmost lake in the Kenyan Rift Valley, lying in a
                  catchment of faulted volcanic rocks, north of Tanzania's Lake
                  Natron. During the dry season, it is 80% covered by soda and
                  is well known for its wading birds, including flamingos.Lake
                  Magadi is the southernmost lake in the Kenyan Rift Valley,
                  lying in a catchment of faulted volcanic rocks, north of
                  Tanzania's Lake Natron. During the dry season, it is 80%
                  covered by soda and is well known for its wading birds,
                  including flamingos.Lake Magadi is the southernmost lake in
                  the Kenyan Rift Valley, lying in a catchment of faulted
                  volcanic rocks, north of Tanzania's Lake Natron. During the
                  dry season, it is 80% covered by soda and is well known for
                  its wading birds, including flamingos.Lake Magadi is the
                  southernmost lake in the Kenyan Rift Valley, lying in a
                  catchment of faulted volcanic rocks, north of Tanzania's Lake
                  Natron. During the dry season, it is 80% covered by soda and
                  is well known for its wading birds, including flamingos.Lake
                  Magadi is the southernmost lake in the Kenyan Rift Valley,
                  lying in a catchment of faulted volcanic rocks, north of
                  Tanzania's Lake Natron. During the dry season, it is 80%
                  covered by soda and is well known for its wading birds,
                  including flamingos.
                </p>
              </div>
            </div>

            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-center">
              <div className="text-sm">
                <span>COST:</span>
                <ul>
                  <li>Per Adult ({">"} 13yrs)- Ksh. 3000</li>
                  <li>Per Child ({"<"} 13yrs) - Ksh. 2600</li>
                </ul>

                <span>DATE OF EVENT: 09/09/2021</span>
              </div>

              <div className="text-sm">
                <span>COST INCLUSIVE OF:</span>
                <ul>
                  <li>Transport in luxurious van</li>
                  <li>Entrance fee</li>
                  <li>Buffet lunch</li>
                  <li>Drinking water refill</li>
                  <li>Proffesional photography</li>
                  <li>Team building activities</li>
                  <li>Tour guide fee</li>
                  <li>Vehicle entrance fee</li>
                </ul>
              </div>
              <div className="text-sm">
                <h5>BOOK NOW</h5>
                <p className="inline-flex text-center">
                  <div className="">Adults</div>
                  <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-8 rounded-l-full cursor-pointer outline-none ml-1">
                    <span className="m-auto text-base font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="focus:outline-none text-center w-8 bg-white border border-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default  items-center text-gray-700  outline-none"
                    value="0"
                  ></input>
                  <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-8 rounded-r-full cursor-pointer mr-1">
                    <span className="m-auto text-base font-thin">+</span>
                  </button>
                  <div className="">= 6000</div>
                </p>
                <p className="inline-flex text-center">
                  <div className="">Children</div>
                  <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-8 rounded-l-full cursor-pointer outline-none ml-1">
                    <span className="m-auto text-base font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="focus:outline-none text-center w-8 bg-white border border-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default  items-center text-gray-700  outline-none"
                    value="0"
                  ></input>
                  <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-8 rounded-r-full cursor-pointer mr-1">
                    <span className="m-auto text-base font-thin">+</span>
                  </button>
                  <div className="">= 2600</div>
                </p>

                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-center m-2"
                  onClick={handleShow}
                >
                  Next
                </button>
              </div>
              {show ? (
                <div
                  className="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-25 left-0 right-0 top-0 bottom-0"
                  onClick={handleClose}
                >
                  <div
                    className="bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10 w-1/2"
                    style={{ width: "648px" }}
                    onClick={handleClose}
                  >
                    <span className="font-bold block text-lg mb-3">
                      INFORMATION OF THOSE ATTENDING THE EVENT
                    </span>
                    <div class="md:flex flex-row md:space-x-4 w-full text-xs mb-2">
                      <div>
                        <div className="font-semibold">Full name of adult</div>
                        <input
                          type="text"
                          className="text-md block px-3 py-2 rounded-lg w-72 bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Phone Number</div>
                        <input
                          type="phone"
                          className="text-md block px-3 py-2 rounded-lg w-72 bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          placeholder="07xx xxx xxx"
                        />
                      </div>
                    </div>

                    <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                      <div>
                        <div className="font-semibold mb-1">
                          Full name of adult
                        </div>
                        <input
                          type="text"
                          className="text-md block px-3 py-2 rounded-lg w-72 bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Phone Number</div>
                        <input
                          type="phone"
                          className="text-md block px-3 py-2 rounded-lg w-72 bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          placeholder="07xx xxx xxx"
                        />
                      </div>
                    </div>
                    <div className="text-right mt-2">
                      <button className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">
                        + add another adult
                      </button>
                    </div>

                    <div class="md:flex flex-row md:space-x-4 w-full text-xs mb-2">
                      <div>
                        <div className="font-semibold mb-1">
                          Full name of child
                        </div>
                        <input
                          type="text"
                          className="text-md block px-3 py-2 rounded-lg w-72 bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          placeholder="Name of child..."
                        />
                      </div>
                    </div>
                    <div className="text-right mt-2">
                      <button className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">
                        + add another child
                      </button>
                    </div>

                    <div class="md:flex flex-row md:space-x-4 w-full text-xs mb-2">
                      <div>
                        <div className="font-semibold mb-1">
                          Emergency Contact(optional)
                        </div>
                        <input
                          type="text"
                          className="text-md block px-3 py-2 rounded-lg w-72 bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          placeholder="07xx xxx xxx"
                        />
                      </div>
                    </div>

                    <div class="md:flex flex-row md:space-x-4 w-full text-xs mt-4">
                      <ul>
                        <div className="font-semibold underline">
                          Trip Summary
                        </div>
                        <li>NO OF ADULTS IS 2 = KSH. 6000</li>
                        <li>NO OF CHILDREN IS 1 = KSH. 2600</li>
                        <hr></hr>
                        <p>Total: 8600</p>
                      </ul>

                      <div className="text-right space-x-5 mt-5">
                        <button className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">
                          Pay Now
                        </button>
                      </div>
                    </div>

                    <div className="text-right space-x-5 mt-5">
                      <button
                        className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo"
                        onClick={handleClose}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </section>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">Cart</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="p-2 w-12">
                  <img
                    src="https://i.postimg.cc/jdcrs8Cd/DK-002.jpg"
                    alt="img product"
                  />
                </div>
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">White & red shirt</div>
                  <div className="">Ksh. 500</div>
                  <div className="text-gray-400">Qt: 2</div>
                </div>
                <div className="flex flex-col w-18 text-sm font-regular items-end">
                  <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2 "
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </div>
                  KSh.1500
                </div>
              </div>

              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="p-2 w-12">
                  <img
                    src="https://i.postimg.cc/jdcrs8Cd/DK-002.jpg"
                    alt="img product"
                  />
                </div>
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">White & red shirt</div>
                  <div className="">Ksh. 500</div>
                  <div className="text-gray-400">Qt: 2</div>
                </div>
                <div className="flex flex-col w-18 text-sm font-regular items-end">
                  <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2 "
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </div>
                  KSh.1500
                </div>
              </div>

              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="p-2 w-12">
                  <img
                    src="https://i.postimg.cc/jdcrs8Cd/DK-002.jpg"
                    alt="img product"
                  />
                </div>
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">White & red shirt</div>
                  <div className="">Ksh. 500</div>
                  <div className="text-gray-400">Qt: 2</div>
                </div>
                <div className="flex flex-col w-18 text-sm font-regular items-end">
                  <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2 "
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </div>
                  KSh.1500
                </div>
              </div>
              {/* end of cart */}
            </div>
            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">Categories</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-regular">Tents</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-regular">Knives & Lighters</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-regular">Rafts</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-regular">Safety Boots</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-regular">Shirts</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-regular">Masks</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-regular">Hoodies</div>
                </div>
              </div>
            </div>

            <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">Upcoming Events</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className=" text-sm w-32">
                  <div className="font-regular">Lake Magadi</div>
                  <div>09/09/2021</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className=" text-sm w-32">
                  <div className="font-regular">Menengai Crater</div>
                  <div>15/09/2021</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className=" text-sm w-32">
                  <div className="font-regular">David Sheldrick’s</div>
                  <div>30/09/2021</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className=" text-sm w-32">
                  <div className="font-regular">Ostrich Farm</div>
                  <div>05/10/2021</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className=" text-sm w-32">
                  <div className="font-regular">Mamba Village</div>
                  <div>12/10/2021</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className=" text-sm w-32">
                  <div className="font-regular">Hells Gate</div>
                  <div>26/10/2021</div>
                </div>
              </div>
              <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className=" text-sm w-32">
                  <div className="font-regular">Turkana</div>
                  <div>01/11/2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      
    
  );
}

export default Details;
