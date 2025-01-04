import AW from '/assets/AW_Mini.png'
import "./components.css"

function Home(){

    return(
        <>
        <div className="text-black bg-blue-400 w-full">
            <div className="grid grid-rows-2 md:grid-cols-[4fr,5fr] md:grid-rows-1 gap-4 h-screen relative">
                <div className="hidden md:block relative h-full">
                    <img src={AW} alt="" className='absolute bottom-[70px] md:left-0 ml-[100px] w-full max-h-[300px] md:max-h-[600px] object-contain'/>
                </div>
                <div className="">
                    <div className="bg-white w-[250px] h-[160px] sm:w-[400px] sm:h-[250px] md:w-[600px] md:h-[380px] mx-auto px-auto my-[150px] md:my-[200px] rounded-2xl flex overflow-hidden">
                        <div className="m-auto">
                            <p className="home-text">Hello, I am</p>
                            <p className="home-text">Abdul Wafi,</p>
                            <p className="home-text text-blue-300">a programmer.</p>
                        </div>
                    </div>

                </div>

                <div className="block md:hidden relative h-full">
                    <img src={AW} alt="" className='absolute bottom-[50px] md:left-0 sm:ml-[50px] w-full max-h-[250px] sm:max-h-[350px] md:max-h-[600px] object-contain'/>
                </div>

            </div>
        </div>

        </>
    )
}

export default Home