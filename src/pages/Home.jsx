
import { Navbar } from "../components/Navbar";
import { Herosection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { EducationSection } from "../components/EducationSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home =()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

       {/*Navbar*/}
<Navbar/>
       {/*Main Content*/}
<Herosection/>
<AboutSection/>
<SkillsSection/>
<ProjectsSection/>
<EducationSection/>
<ContactSection/>
       {/*Footer*/}
       <Footer/>
       
    </div>
}