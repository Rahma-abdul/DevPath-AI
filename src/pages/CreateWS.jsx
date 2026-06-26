import { useState } from "react";
import "../styles/newWS.css";



function CreateWS(){

    const [stage ,setStage] = useState(1);
    const [loading , setLoading] = useState(false);
    const [newFeature , setNewFeature] = useState("");
    const [showModal , setShowModal] =useState(false);

    const [showModify , setShowModify] =useState(false);
    const [complexity , setComplexity] = useState("Medium");
    const [duration , setDuration] = useState("73");

    const [showStack , setShowStack] =useState(false);




    const [features , setFeatures] = useState([
        "Authentication",
        "Dashboard",
        "Notifications",
        "Analytics",
        "Chatbot"
    ]);

    const addFeature = () =>{
        if (newFeature.trim() === "") return;
        const featureNorm = newFeature.trim().toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()); 
        // console.log("Feature is:" , featureNorm);
        setFeatures([...features, featureNorm]);
        setNewFeature("");
        setShowModal(false);
    };

    const modifyComplexity_Duration =() =>{
        // Close modal after user saves changes
        setShowModify(false);
    }
    // {stage === 1 && <IdeaCard />}  // mame and idea 
    // {stage === 2 && <FeatureCard />} // extracted features
    // {stage === 3 && <ScopeCard />} // goal, timeline, budget and focus
    // {stage === 4 && <FeasibilityCard />} // after feasibility --> complexity, est time, risk
    // {stage === 5 && <StackCard />} // stack options 

    const nextStage = () =>{
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setStage(stage +1);
        }, 2500);
    };

    const nextStage_noLoad = () =>{
            setStage(stage +1);
    };

    return(
        <div className="createWS-page">
            <div className="background-createWS"></div>
            <div className="progress">
                <div className={`progress-step ${stage>=1? "active": ""}`}>Idea</div>
                <div className={`progress-step ${stage>=2? "active": ""}`}>Features</div>
                <div className={`progress-step ${stage>=3? "active": ""}`}>Scope</div>
                <div className={`progress-step ${stage>=4? "active": ""}`}>Feasibility</div>
                <div className={`progress-step ${stage>=5? "active": ""}`}>Architecture</div>
            </div>
            
            {(loading && stage === 1 )? (
                <>
                <div className="progress-meter">
                     <span style={{width: "8%"}}></span>
                    </div>
                <div className="ws-card">
                    <h3>Analyzing <span style={{color: "white"}}>your project</span></h3>
                    <div className="loading-list">
                        <p>Understanding project idea</p>
                        <p>Extracting features</p>
                    </div>
                </div>
                </>
            ):(loading && stage === 3 )? (
                <>
                <div className="progress-meter">
                     <span style={{width: "50%"}}></span>
                    </div>
                <div className="ws-card">
                    <h3>Running <span style={{color: "white"}}>Feasibility Analysis</span></h3>
                    <div className="loading-list">
                        <p>Calculation Complexity</p>
                        <p>Estimating Duration</p>
                        <p>Predicting Possible Risks</p>
                    </div>
                </div>
                </>
            ):(loading && stage === 4 )? (
                <>
                <div className="progress-meter">
                     <span style={{width: "70%"}}></span>
                    </div>
                <div className="ws-card">
                    <h3><span style={{color: "white"}}>Generating</span> Architecture Recommendation</h3>
                    <div className="loading-list">
                        <p>Generating list of stack options</p>
                        <p>Collecting pros and cons</p>
                    </div>
                </div>
                </>
            ):(loading && stage === 5 )? (
                <>
                <div className="progress-meter">
                     <span style={{width: "100%"}}></span>
                    </div>
                <div className="ws-card">
                    <h3>Creating Your Workspace</h3>
                </div>
                </>
            ):(
                <>
                { stage === 1 && (
                    <>
                    <div className="progress-meter">
                     <span style={{width: "2%"}}></span>
                    </div>
                    <div className="ws-card">
                    <h3><span style={{color: "white"}}>Create New</span> Workspace</h3>
                    <h2>Workspace Name</h2>
                    <input type="text" placeholder="Enter your workspace name" />
                    <h2>Project Idea</h2>
                    <textarea placeholder="Describe your project idea or the problem you're trying to solve and how you plan on solving it"  /> 
                    <button onClick={nextStage}>Continue</button>
                    </div>
                    </>
                )}
                { stage === 2 && (
                    <>
                    <div className="progress-meter">
                     <span style={{width: "20%"}}></span>
                    </div>
                    <div className="ws-card">
                    <h3><span style={{color: "white"}}>AI Extracted</span> Features</h3>
                    <h2>Pick which ones fit your idea best</h2>
                    <div className="features-container">
                   
                    {features.map(feature => (
                        <h2 key={feature}>
                            <input type="checkbox" defaultChecked />
                            {feature}
                        </h2>
                    ))}

                    </div>
                    <button onClick={() => setShowModal(true)}>+ Add Feature</button>
                    <button onClick={nextStage_noLoad}>Confirm</button>
                    </div>
                    </>
                )}
                { stage === 3 && (
                    <>
                    <div className="progress-meter">
                     <span style={{width: "40%"}}></span>
                    </div>
                    <div className="ws-card">
                    <h3><span style={{color: "white"}}>Tell Us</span> More</h3>
                    <label style={{fontSize: "1.5rem"}}>Goal</label>
                    <div className="timeline-container">
                    <h2><input type="radio" name="goal" />Learning/Academic</h2>
                    <h2><input type="radio" name="goal"/>Production/Startup</h2>
                    </div>

                    <label style={{fontSize: "1.5rem"}}>Timeline</label>
                    <div className="timeline-container">
                    <h2><input type="radio" name="time"/>1-3 weeks</h2>
                    <h2><input type="radio" name="time"/>1-3 months</h2>
                    <h2><input type="radio" name="time"/>Other: <input type="text" /></h2>
                    </div>

                    <label style={{fontSize: "1.5rem"}}>Budget</label>
                    <div className="timeline-container">
                    <h2><input type="radio" name="budget"/>Free Tier</h2>
                    <h2><input type="radio" name="budget"/>Limited</h2>
                    <h2><input type="radio" name="budget"/>Unlimited</h2>
                    </div>

                    <label style={{fontSize: "1.5rem"}}>Focus Areas</label>
                    <div className="timeline-container">
                    <h2><input type="checkbox"/>Frontend Development</h2>
                    <h2><input type="checkbox"/>Backend Development</h2>
                    <h2><input type="checkbox"/>Database Design and Management</h2>
                    <h2><input type="checkbox"/>AI and Machine Learning</h2>
                    <h2><input type="checkbox"/>Computer Vision</h2>
                    <h2><input type="checkbox"/>Docker</h2>
                    <h2><input type="checkbox"/>Kubernetes</h2>
                    <h2><input type="checkbox"/>CI/CD</h2>
                    <h2><input type="checkbox"/>Testing</h2>
                    <h2><input type="checkbox"/>Data Analysis</h2>
                    <h2><input type="checkbox"/>Robotics</h2>
            
                    </div>
                    
                    <button onClick={nextStage}>Continue</button>
                    </div>
                    </>
                )}
                { stage === 4 && (
                    <>
                    <div className="progress-meter">
                     <span style={{width: "60%"}}></span>
                    </div>
                    <div className="ws-card">
                    <h3><span style={{color: "white"}}>AI ran</span> Feasibility Analysis</h3>
            
                    <div className="features-container">
                        <h2><span style={{color: "#958fe5" , fontWeight: "800"}}>Complexity:</span> <span style={{fontFamily: "`Inter`, sans-serif" , letterSpacing: "-0.05em" , fontWeight: "400"}}>{complexity}</span></h2>
                        <h2><span style={{color: "#958fe5" , fontWeight: "800"}}>Implementation Estimated Duration:</span> <span style={{fontFamily: "`Inter`, sans-serif" , letterSpacing: "-0.05em" , fontWeight: "400"}}>{duration} hours</span></h2>
                        <h2 style={{color: "#958fe5" , fontWeight: "800"}}>Possible Risks:</h2>
                        <div className="regular-list">
                            <p>Time might be too tight</p>
                            <p>Needs extensive understanding of Machine Learning</p>
                            <p>Might need to change the budget plan</p>
                        </div>
                    </div>
                    <button onClick={()=>setShowModify(true)}>Modify</button>
                    <button onClick={nextStage}>Confirm</button>
                    </div>
                    </>
                )}
                { stage === 5 && (
                    <>
                    <div className="progress-meter">
                     <span style={{width: "80%"}}></span>
                    </div>
                    <div className="ws-card">
                    <h3><span style={{color: "white"}}>Architecture & Stack</span> Generation</h3>
                    <h2>Recommended Stack:</h2>
                        <div className="regular-list">
                            <p><span style={{color: "#958fe5" , fontSize: "1.4rem"}}>Frontend: </span> React.js</p>
                            <p><span style={{color: "#958fe5" , fontSize: "1.4rem"}}>Backend: </span> Express.js</p>
                            <p><span style={{color: "#958fe5" , fontSize: "1.4rem"}}>Database: </span> Supabase</p>
                            <p><span style={{color: "#958fe5" , fontSize: "1.4rem"}}>Deployment: </span> Vercel</p>
                        </div>
                    <h2>Why?</h2>
                    <div className="regular-list">
                            <p><span style={{color: "#958fe5" , fontSize: "1.1rem"}}>React simplifies building dynamic user interfaces through a modular, predictable, and highly efficient development paradigm.</span></p>
                            <p><span style={{color: "#958fe5" , fontSize: "1.1rem"}}>Express provides a thin layer of fundamental web application features without obscuring Node.js features. </span></p>
                            <p><span style={{color: "#958fe5" , fontSize: "1.1rem"}}>Supabase pairs a real PostgreSQL database with an automated, built-in suite of backend features.</span></p>
                            <p><span style={{color: "#958fe5" , fontSize: "1.1rem"}}>Vercel offers zero-configuration Git integration, instant preview URLs for every pull request, and automatic global edge rendering.</span></p>
                        </div>

                    <button>Other Stack Options</button>
                    <button onClick={nextStage}>Continue</button>
                    </div>
                    </>
                )}
               
                </>
            )
            }

            {showModal && (
            <div className="modal-overlay">

                <div className="modal-card">

                    <h2>Add Feature</h2>

                    <p>
                        Add a feature that wasn't suggested by Astra AI.
                    </p>

                    <input
                        type="text"
                        placeholder="Example: Dark Mode"
                        value={newFeature}
                        onChange={(e)=>setNewFeature(e.target.value)}
                    />

                    <div className="modal-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={()=>setShowModal(false)}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={addFeature}
                        >
                            Add
                        </button>

                    </div>

                </div>

            </div>
            )}

            {showModify && (
            <div className="modal-overlay">

                <div className="modal-card">

                        <h2>Complexity</h2>
                        <div className="timeline-container">
                        <h2 style={{fontSize: "1.1rem"}}>
                            <input
                                type="radio"
                                name="complexity"
                                value="Beginner"
                                checked={complexity === "Beginner"}
                                onChange={(e) => setComplexity(e.target.value)}
                            />
                            Beginner
                        </h2>
                        <h2 style={{fontSize: "1.1rem"}}>
                            <input
                                type="radio"
                                name="complexity"
                                value="Medium"
                                checked={complexity === "Medium"}
                                onChange={(e) => setComplexity(e.target.value)}
                            />
                            Medium
                        </h2>
                        <h2 style={{fontSize: "1.1rem"}}>
                            <input
                                type="radio"
                                name="complexity"
                                value="Expert"
                                checked={complexity === "Expert"}
                                onChange={(e) => setComplexity(e.target.value)}
                            />
                            Expert
                        </h2>
                        </div>
                    
                    <h2>Duration</h2>
                    <p>Change the hours you want to complete the whole project in</p>

                    <input
                        type="number"
                        placeholder="Example: 53"
                        value={duration}
                        onChange={(e)=>setDuration(e.target.value)}
                    />

                    <div className="modal-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={()=>setShowModify(false)}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={modifyComplexity_Duration}
                        >
                            Save
                        </button>

                    </div>

                </div>

            </div>
            )}

        </div>
    );
}

export default CreateWS;