const Loader = () => {
    return (
        <section className=" min-h-screen w-screen h-screen bg-white  dark:bg-gray-900   fixed flex  justify-center items-center top-0 left-0 z-50 ">
            
            <div className="absolute   ">
                <img  src="/LogoUser1.png" alt="" />
            </div>
            <div className="absolute animate-spin-slow">
                <img   src="/LogoUser2.png" alt="" />
            </div>

            
        </section>
    )
    }
    export default Loader