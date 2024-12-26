import AW from '/assets/AW_Image.png'

function Home(){

    return(
        <>
        <body className="text-black bg-blue-400">
            <div className="grid grid-cols-[4fr,5fr] gap-4 h-screen relative">
                <div className="relative h-full">
                    <h1 className="text-center">Test 1</h1>
                    <img src={AW} alt="" className='absolute bottom-0 mb-[70px] left-0 ml-[50px] w-full max-h-[600px] object-contain'/>
                </div>
                <div className="">
                    <h1>Test 2</h1>
                </div>

            </div>
        </body>

        </>
    )
}

export default Home