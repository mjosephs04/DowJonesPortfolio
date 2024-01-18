import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import {Link} from "react-router-dom";
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>My name is Mark Josephs and I have applied for the open Software Engineering Summer Internship
                    position at Dow Jones.
                    I found out that this team would specifically be working on web development in react native. I
                    wanted to develop a small website in
                    react to show off my skills and explain why I believe I'd be a good fit for your team.
                </p>
                <p>First, team based projects are what I love to do. At Baylor, I work closely with my professor doing
                    undergraduate research developing and debugging numerous
                    machine learning algorithms. I meet weekly with a team of other reasearch assistants to discuss our
                    progress and give advice to other members. For my past software engineering
                    internship I developed software that collects order data from an API and created PDFs with the
                    respective data. I worked with a team or four throughout the whole summer and held
                    daily scrum meetings.</p>
                <p>Second, as a Baylor student, I've taken the coursework required to complete the technical pieces of
                    the internships.
                    I have a 3.8 GPA in the competitive computer science degree, made dean's list every semester.</p>
                <p>Third, I come from a very hard working family where we pride ourselves on getting things done.
                    My mother is a doctor, father is an immigrant, and one older brother is a VC backed tech
                    entrepreneur
                    while the other is a hedge fund Investor. I have some big footsteps to follow here, but hard work
                    has
                    been a cornerstone in my life and I strongly believe I'd excel in this position with your team.</p>

                <p>Below is a link to GitHub to access the code I wrote for this website.</p>


            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
            <Link to='/contact' className='flat-button-code'>Link To Code</Link>
        </div>

        <Loader type='pacman' />
        </>
    )
}

export default About