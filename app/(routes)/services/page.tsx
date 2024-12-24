import AvatarServices from "@/components/avatar-services"
import CircleImage from "@/components/circle-image"
import SliderServices from "@/components/slider-services"
import TransitionPage from "@/components/transition-page"


const ServicesPage = () => {
    return (
        
            <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen
             max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">

                    <h1 className="text-2xl leading-tight 
                    text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                         servicios.
                        </span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo de aplicaciones personalizadas que se 
                            ajustan a las necesidades específicas de los usuarios. Además, brindo soporte en la documentación 
                            técnica del software y realizo pruebas exhaustivas para garantizar la calidad del producto final</p>
                              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ldsoto@unicesar.edu.co" target="_blank" rel="noopener noreferrer">
                            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                            Contacta conmigo
                        </button>
                            </a>
                </div>

                {/* SLIDER */}
                <div>
                <SliderServices />
                </div>
            </div>
            </>     
        
    )
}
export default ServicesPage