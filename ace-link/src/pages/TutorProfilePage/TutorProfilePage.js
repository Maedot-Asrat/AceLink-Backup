// src/TutorProfilePage.js
import React from 'react';
import './TutorProfilePage.css';
import { FiCheckCircle } from "react-icons/fi";
import {Profiles} from "../../data.js"
import { useParams } from 'react-router-dom';

export default function TutorProfilePage() {

    const { id } = useParams(); 
    
    const profile = Profiles.find(profile => profile.id === id);  // Find the tutor by ID

    if (!profile) {
        return <div>Tutor not found</div>;
    }

    return (
        <div className="tutor-profile-page">
          
            <div className="left-column">
                <div className="tutor-profile">
                    <img src={profile.image} alt="Tutor" className="profile-pic" />
                    <h2>Ivy League Economics/Statistics Tutor with 10 years experience</h2>
                    <p>{profile.name}</p>
                    <p>⭐ 4.9 (823 ratings)</p>
                    <p>3,463 hours tutoring</p>
                    <p className="hourly-rate"><strong>Hourly Rate:</strong> $95</p>
                    <button>Contact {profile.name}</button>
                    <p className="response-time">Response time: 54 minutes</p>
                </div>
            </div>
            <div className="right-column">
                <div className="bio">
                    <h3>About {profile.name}</h3>
                    <p>
                        I believe individuals can be most effective when doing what they love. 
                        I love helping others understand new subjects. My favorite part is seeing a 
                        student have that "Light Bulb Moment" when everything clicks!
                    </p>
                </div>
                <div className="education">
                    <h3>Education</h3>
                    <p>Addis Ababa, Economics</p>
                    <p>Columbia University, NY - Graduate Coursework</p>
                </div>
                <div className="policies">
                    <h3>Policies</h3>
                    <p><strong>Hourly Rate:</strong> ${profile.cost}</p>
                    <p><strong>Lesson Cancellation:</strong> 24 hours notice required</p>
                    <p><strong>Background Check:</strong> Passed on 10/21/2023</p>
                </div>
                <div className="schedule">
                    <h3>Schedule</h3>
                    <p>Sun: Midnight - 8:00 am, 7:00 pm - Midnight</p>
                    <p>Mon: Midnight - 8:00 am, 7:00 pm - Midnight</p>
                    <p>Tue: Midnight - 8:00 am, 7:00 pm - Midnight</p>
                    <p>...</p>
                </div>
                <div className="subjects">
                    <h3>Approved Subjects</h3>
                    <p>Business: Microeconomics, Macroeconomics, Corporate Training...</p>
                    <h3>Most Popular</h3>
                    <p>Calculus, Algebra 1, Algebra 2...</p>
                </div>
            </div>
            <div className="footer">
                <p><FiCheckCircle /> Your first lesson is backed by our Good Fit Guarantee.</p>
            </div>
        </div>
    );
}
