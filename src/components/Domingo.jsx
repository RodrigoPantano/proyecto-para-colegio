import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Domingo = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCaja = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const cajas = [
        {
            id: 1, title: '1er misterio', content: `<p>
                            U: Contemplamos los misterios gloriosos. En el primer misterio glorioso contemplamos La triunfante Resurrección de Nuestro Señor. <br /> <br />
                            U: Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hagase tu voluntad en la tierra como en
                            el cielo. <br />
                            T: Danos hoy el pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer
                            en la tentación, y libranos del mal. Amén. <br />
                            <br />
                            U: Dios te salve, María; llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto
                            de tu vientre, Jesús. <br />
                            T: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén. <br />
                            (Diez veces) <br />
                            <br />
                            U: Gloria al Padre, al Hijo y al Espíritu Santo. <br />
                            T: Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén. <br /> <br />
                            ¡Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al cielo todas las almas, socorre especialmente a las
                            más necesitadas de Tu misericordia. Amén. <br />
                        </p>` },
        {
            id: 2, title: '2do misterio', content: `<p>
                             U: En el segundo misterio glorioso contemplamos La Ascensión del Señor a los cielos.<br /> <br />
                             U: Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hagase tu voluntad en la tierra como en
                             el cielo. <br />
                             T: Danos hoy el pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer
                             en la tentación, y libranos del mal. Amén. <br />
                             <br />
                             U: Dios te salve, María; llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto
                             de tu vientre, Jesús. <br />
                             T: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén. <br /> (Diez veces) <br />
                             <br />
                             U: Gloria al Padre, al Hijo y al Espíritu Santo. <br />
                             T: Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén. <br /> <br />
                             ¡Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al cielo todas las almas, socorre especialmente a las
                             más necesitadas de Tu misericordia. Amén. <br />
                         </p>` },
        {
            id: 3, title: '3er misterio', content: `<p>
                        U: En el tercer misterio glorioso contemplamos La Venida del Espíritu Santo sobre María Santísima y los Apóstoles. <br /> <br />
                        U: Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hagase tu voluntad en la tierra como en
                        el cielo. <br />
                        T: Danos hoy el pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer
                        en la tentación, y libranos del mal. Amén. <br />
                        <br />
                        U: Dios te salve, María; llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto
                        de tu vientre, Jesús. <br />
                        T: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén. <br />
                        (Diez veces) <br />
                        <br />
                        U: Gloria al Padre, al Hijo y al Espíritu Santo. <br />
                        T: Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén. <br />  <br />
                        ¡Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al cielo todas las almas, socorre especialmente a las
                        más necesitadas de Tu misericordia. Amén. <br />
                    </p>` },
        {
            id: 4, title: '4to misterio', content: `<p>
                        U: En el cuarto misterio glorioso contemplamos La Asunción de Nuestra Señora en cuerpo y alma a los cielos. <br /> <br />
                        U: Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hagase tu voluntad en la tierra como en
                        el cielo. <br />
                        T: Danos hoy el pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer
                        en la tentación, y libranos del mal. Amén. <br /> 
                        <br />
                        U: Dios te salve, María; llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto
                        de tu vientre, Jesús. <br />
                        T: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén. <br /> 
                        (Diez veces) <br />
                        <br />
                        U: Gloria al Padre, al Hijo y al Espíritu Santo. <br />
                        T: Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén. <br /> <br />
                        ¡Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al cielo todas las almas, socorre especialmente a las
                        más necesitadas de Tu misericordia. Amén. <br />
                    </p>` },
        {
            id: 5, title: '5to misterio', content: `<p>
                        U: En el quinto misterio glorioso contemplamos La Coronación de María Santísima como Reina y Señora de todo lo creado. <br /> <br />
                        U: Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hagase tu voluntad en la tierra como en
                        el cielo. <br />
                        T: Danos hoy el pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer
                        en la tentación, y libranos del mal. Amén. <br /> 
                        <br />
                        U: Dios te salve, María; llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto
                        de tu vientre, Jesús. <br />
                        T: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén. <br />
                        (Diez veces)<br />
                        <br />
                        U: Gloria al Padre, al Hijo y al Espíritu Santo. <br />
                        T: Como era en el principio, ahora y siempre, y por los siglos de los siglos. Amén. <br /> <br />
                        ¡Oh! Jesús mío, perdona nuestras culpas, líbranos del fuego del infierno, lleva al cielo todas las almas, socorre especialmente a las
                        más necesitadas de Tu misericordia. Amén. <br />
                    </p>` },
    ];

    return (
        <>
            <div className="flex flex-col sm:grid gap-1 sm:gap-4 sm:grid-cols-2 relative">
                {cajas.map((caja, index) => (
                    <div key={caja.id} className={` overflow-hidden rounded-xl transition-all duration-500  ${openIndex === index ? 'max-h-screen' : 'max-h-16'}`}>
                        <div className={`mt-2 p-4 rounded-xl bg-stone-900 relative`}>
                            <div className="flex  gap-x-2">
                                <button
                                    onClick={() => toggleCaja(index)}
                                    className=" text-white font-bold "
                                >
                                    {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </button>
                                <h2 className="text-lg font-semibold">{caja.title}</h2>
                            </div>

                            <div
                                className={`transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                dangerouslySetInnerHTML={{ __html: caja.content }}
                            />
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default Domingo;