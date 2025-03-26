import { useRef } from "react";
import { IPortfolioPart } from "../../../interfaces/Interfaces";


const AboutMe = ({language}: IPortfolioPart) => {
    const imgNormal = useRef<HTMLImageElement>(null);
    const imgLeft = useRef<HTMLImageElement>(null);
    const imgRigth = useRef<HTMLImageElement>(null);
    const descriptionContainer = useRef<HTMLDivElement>(null);
    const anchorContainer = useRef<HTMLDivElement>(null);
    const containerImg = useRef<HTMLDivElement>(null);


    const showImg = (typeImg: string, imgNormal: HTMLImageElement, imgLeft: HTMLImageElement, imgRigth: HTMLImageElement) => {
        if(typeImg === '') {
            imgNormal.classList.remove('d-none');
            imgNormal.classList.add('d-flex');

            imgLeft.classList.remove('d-flex');
            imgLeft.classList.add('d-none');
            
            imgRigth.classList.remove('d-flex');
            imgRigth.classList.add('d-none');

            return
        }

        if(typeImg === 'description'){
            imgNormal.classList.remove('d-flex');
            imgNormal.classList.add('d-none');

            imgLeft.classList.add('d-flex');
            imgLeft.classList.remove('d-none');
            
            imgRigth.classList.remove('d-flex'); 
            imgRigth.classList.add('d-none');

            return
        }

        if(typeImg === 'anchor'){
            imgNormal.classList.remove('d-flex');
            imgNormal.classList.add('d-none');

            imgLeft.classList.remove('d-flex');
            imgLeft.classList.add('d-none');
            
            imgRigth.classList.add('d-flex'); 
            imgRigth.classList.remove('d-none');
            
            return
        }
    }

    const showInfo = (descriptionContainer: HTMLDivElement, anchorContainer: HTMLDivElement, containerImg: HTMLDivElement) => {
        descriptionContainer.classList.remove('translateX-pos-400px');
        descriptionContainer.classList.remove('opacity-0');
        anchorContainer.classList.remove('translateX-neg-400px');
        anchorContainer.classList.remove('opacity-0');
        containerImg.classList.add('no-interactive');
        containerImg.classList.remove('bright-border');

        setTimeout(() => {
            descriptionContainer.classList.remove('no-interactive');
            anchorContainer.classList.remove('no-interactive');
        }, 500);
    }

    return(
        <section className="max-w-1250 m-auto p-5 d-flex flex-column align-items-center gap-5 animation-fadeIn-opacity position-relative z-index-4" id = "aboutMe">
            <h1 className="text-transform-capitalize color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty ">about mi jeje</h1>

            <div className="d-flex align-items-center">
                <div className="description-container cursor-pointer translateX-pos-400px transition-all-04 bg-gradint-normal-purple-lighter-90 border-radius-1 opacity-0 no-interactive" 
                    ref = {descriptionContainer}
                    onMouseEnter={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('description', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}

                    onMouseLeave={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}
                >   
                    <div className="p-05 w-90 color-white ">
                        <div className="bg-gradint-dark-purple-dark-90 p-1 d-flex flex-column gap-1">
                            <p className="color-lavanda-dark text-transform-capitalize font-size-5 font-weigth-700">Felipe Mora </p>
                            <p className="color-emerald text-transform-capitalize font-size-4 font-weigth-500">Desarrollador fullstack junior</p>
                            <p className="color-white font-size-3 text-transform-capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    
                </div>

                <div className="border-radius-100p flex-shrink-0 img-about-me cursor-pointer z-index-4 no-select bright-border transition-all-04" 
                    ref = {containerImg}
                    onClick={() => {
                        if(descriptionContainer.current && anchorContainer.current && containerImg.current){
                            showInfo(descriptionContainer.current, anchorContainer.current, containerImg.current);
                        }
                    }}
                >
                    <img className="border-radius-100p w-100 h-100 " src="src/assets/images/aboutme/yo.jpg" alt="meNormal" ref = {imgNormal} />
                    <img className="border-radius-100p w-100 h-100 d-none" src="src/assets/images/aboutme/yoLeft.jpg" alt="meLeft" ref = {imgLeft} />
                    <img className="border-radius-100p w-100 h-100 d-none" src="src/assets/images/aboutme/yoRight.jpg" alt="meRight" ref = {imgRigth} />
                </div>

                <div className="anchor-container d-flex justify-content-flex-end bg-gradint-normal-purple-lighter-270 cursor-pointer translateX-neg-400px transition-all-04 border-radius-1 opacity-0 no-interactive"
                    ref = {anchorContainer}
                    onMouseEnter={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('anchor', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}

                    onMouseLeave={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}
                >   
                    <div className="p-05 w-90 color-white">
                        <div className="bg-gradint-dark-purple-dark-270 p-1 d-flex flex-column gap-1">
                            <p className="color-emerald text-transform-capitalize font-size-5 font-weigth-700">Title</p>
                            <a className="icon icon-white h-min-content w-fit-content border-radius-100p p-1 color-white d-flex justify-content-center align-items-center" >
                                <span className="material-symbols-outlined">
                                    download_2
                                </span>
                            </a>
                            <p className="color-white font-size-3 text-transform-capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default AboutMe;