import { ICardProject, ITechnologieCard } from "../../interfaces/Interfaces"
import Button from "../Button";
import Icon from "../Icon";

const ProjectCard = ({image, description, technologies, title, githubRedirection, youtubeRedirection}: ICardProject) => {    


    return(
        <div className="card-project max-w-330 transition-all-02 max-h-300 overflow-hidden animation-fadeIn-opacity border-solid-light-purple-dark-1  bg-gradint-purple-to-emerald border-radius-2 p-3 d-flex flex-column gap-3 cursor-pointer "
            onClick={(e) => e.currentTarget.classList.toggle('max-h-600')}
        >
            <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3">
                    <Icon
                        title = "github"
                        image = "src/assets/images/icons/github.png"
                        color = "white"
                        redirection = {githubRedirection}
                        typeRedirection="_blank"
                        
                    />

                    <Icon
                        title = "github"
                        image = "src/assets/images/icons/youtube.png"
                        color = "white"
                        redirection = {youtubeRedirection}
                        typeRedirection="_blank"
                    />
                </div>

                <div className="container-project-img-card ">
                    <img src={image} alt = {title}  className="w-100 h-100 object-fit-cover border-radius-2"/>
                </div>
            </div>
            
            <div className="d-flex flex-column gap-5">
                <div className="d-flex  gap-3 justify-content-space-between">
                    <p className="color-ligth-purple font-size-5 font-weigth-600">
                        {title}
                    </p>

                    <div className="techs-card-btn position-relative ">
                        <Button
                            type = "skip-btn"
                            cssClasses="px-1 "
                            typeBtn = "primary-emerald"
                            icon="settings"
                        />
                        <div className="border-solid-normal-emerald-1 inner-tech-card position-absolute box-shadow-dark-purple-light-0-0-15 d-none bg-gradint-emerald-dark-to-purple bottom-130p right-0 p-3 border-radius-2 gap-1 flex-wrap w-200px ">
                            {
                                technologies.map((tech: ITechnologieCard) => (
                                    <Icon
                                        title = {tech.name}
                                        image = {tech.image}
                                        color = "white"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <p className="color-white font-size-3 font-style-italic font-weigth-300">
                    {description}
                </p>
                
            </div>
            
        </div>  
    )
}

export default ProjectCard;