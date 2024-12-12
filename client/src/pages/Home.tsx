

export default function Dashboard() {
return (
    
    <>
      <main className="h-screen"> {/* Set main to full viewport height */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full">
          {/* main layout */}
          <section className="flex flex-col md:flex-row mt-8 flex-grow space-y-4 md:space-y-0 md:space-x-4">
            {/* Section left */}
            <div className="shadow-lg rounded-lg p-4 md:w-2/3 flex-grow max-h-80 overflow-scroll overflow-y-scroll overflow-x-hidden ">
              <div className="">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <label htmlFor="name-search" className='text-white px-1 text-sm py-1 rounded-sm'>Create a new post</label><br/>
                  <textarea name="name-search mt-2" placeholder="Enter YouTube Video URL" className="border h-20 text-white bg-gray-700 border-gray-800 rounded-lg p-2 w-full"/>
                  <button className="bg-indigo-500 text-white font-semibold  py-2 px-4 rounded-lg">
                    Submit
                  </button>
                  </div>
              </div>
            </div>
            {/* Side-bar (30% width) */}
            <div className=" shadow-lg border-l border-gray-700 p-4 md:w-1/3 flex-grow">
              <h2 className="text-l font-semibold mb-2 text-gray-300 w-fit rounded-md px-2 py1 bg-gray-900"></h2>
              <h2 className="text-l text-gray-300 bg-gray-900 w-fit rounded-md px-2 py1 font-semibold mb-2">SideBar</h2>
              <div className="h-48 rounded-lg"></div> {/* Placeholder for comments */}
            </div>
            {/* Analysis Section (60% width) */}
          </section>
        </div>
      </main>
    </>
  );
}