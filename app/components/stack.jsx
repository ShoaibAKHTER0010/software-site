import React from 'react'

const Stack = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-7xl py-16'>
            {/* main div */}
            <div className='w-full'>
                {/* heading-sec */}
                <div className=' w-full flex flex-col justify-center items-center'>
                    {/* empty */}
                    <div className="w-[169px] h-[5px] bg-gradient-to-bl from-rose-400 to-purple-900"></div>
                    <h2 className=" py-6 text-center text-zinc-300 text-[35px] font-bold font-['Poppins'] leading-[55px]">Our <br />
                    Tech Stack</h2>
                </div>
                {/* links */}
                <div className="text-white text-lg font-normal font-['Poppins'] leading-[30px] flex gap-12 justify-center items-center py-10 ">
                    <a href="#" className=' hover:text-rose-400'>Backend</a>
                    <a href="#" className=' hover:text-rose-400'>Frontend</a>
                    <a href="#" className=' hover:text-rose-400'>Databases</a>
                    <a href="#" className=' hover:text-rose-400'>CMS</a>
                    <a href="#" className=' hover:text-rose-400'>CloudTesting</a>
                    <a href="#" className=' hover:text-rose-400'>DevOps</a>

                </div>

                {/* develop logos */}
                <div className='flex flex-col gap-10 py-6 cursor-pointer'>
                    {/* child-1 */}
                    <div className='flex justify-center items-center gap-8'>
                        <div><img src="./images/develop/NodeJS.png" alt="node-js" /></div>
                        <div><img src="./images/develop/php.png" alt="node-js" /></div>
                        <div><img src="./images/develop/sql.png" alt="node-js" /></div>
                        <div><img src="./images/develop/java.png" alt="node-js" /></div>
                        <div><img src="./images/develop/net.png" alt="node-js" /></div>

                    </div>
                    {/* child-2 */}
                    <div className='flex justify-center items-center gap-8 cursor-pointer'>
                    <div><img src="./images/develop/python.png" alt="node-js" /></div>
                    <div><img src="./images/develop/rail.png" alt="node-js" /></div>
                    <div><img src="./images/develop/go.png" alt="node-js" /></div>
                    <div><img src="./images/develop/mongo.png" alt="node-js" /></div>
                    </div>
                </div>

            </div>
        </main>
    </section>
  )
}

export default Stack