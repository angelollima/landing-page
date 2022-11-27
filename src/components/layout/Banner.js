import developer from '../../img/developer.svg'

function Banner() {
    return (
        <section className="opc p-7 sm:p-12 lg:flex items-center">
            <div>
                <h1 className="text-center font-Silkscreen font-bold text-light_text dark:text-white text-xl sm:text-2xl">Come join our team!</h1>
                <div className="flex justify-center mt-8">
                    <img className="lg:h-80" src={developer} alt="" title="Developer"/>
                </div>
            </div>
        </section>
    )
}

export default Banner