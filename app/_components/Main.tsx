import { Header } from "./Header";
import { Experiences } from "./Experiences";
import { Projets } from "./Projets";
import { Formation } from "./Formation";
import { Contact } from "./Contact";
import { Skills } from "./Skills"
import { Footer } from "./Footer";

export const Main = () => {
    
    return (
        <>
        <div className=" grid justify-center ml-24 max-lg:w-[72%] max-lg:ml-36 max-md:ml-0 max-xs:w-[250px] max-xs:px-[200px]" >

        <div className=" flex justify-start max-md:mr-16 max-xs:ml-24">
            <Header />
        </div>
        <div className=" max-md:mr-16 max-xs:ml-24">
            <Projets />
        </div>
        <div className="flex col-auto gap-4 mt-4 max-md:grid max-md:justify-center max-md:mr-16 max-xs:ml-24">
            <Formation />
            <Experiences />
        </div>
        <div className=" flex justify-start max-xs:ml-24">
          <Skills />
      
        </div >
        <div className=" flex justify-start max-md:mr-16 max-xs:ml-24">

           <Contact /> 
        </div>
        <div className=" flex justify-center max-md:mr-16 max-xs:ml-24">

           <Footer />
        </div>
        </div>
        
        </>
    );
  };
  
