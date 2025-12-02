function Bottombar(){
    return(
        <div className='w-full text-gray-100 font-Inter-thin font-thin z-50'>
            <div className="m-0">
                <nav className="fixed bottom-0 left-0 z-10 w-full h-[50px] sm:h-[70px] bg-gray-800 shadow-md">
                    <div className="cotainer mx-auto sm:my-6 my-3 justify-between text-center">
                        <h1>
                            You can find more about me here on{' '}
                            <a href="https://www.linkedin.com/in/abdul-wafi-norfadilah-7127a7321/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                LinkedIn
                            </a>.
                        </h1>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Bottombar