import AW from '/assets/AW_Image.png'
import "./components.css"

function Home(){

    return(
        <>
        <body className="text-black bg-blue-400">
            <div className="grid grid-cols-[4fr,5fr] gap-4 h-screen relative">
                <div className="relative h-full">
                    <img src={AW} alt="" className='absolute bottom-0 mb-[70px] left-0 ml-[50px] w-full max-h-[600px] object-contain'/>
                </div>
                <div className="">
                    <div className="bg-white w-full h-full max-w-[600px] max-h-[400px] mx-auto my-[200px] rounded-2xl text-center">
                        <p className="home-text">Hello, I am</p>
                        <p>Abdul Wafi,</p>
                        <p>a programmer.</p>
                    </div>
                </div>

            </div>
        </body>

        </>
    )
}

export default Home