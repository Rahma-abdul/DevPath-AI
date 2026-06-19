import "../styles/dashboard.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardFlow from "../components/dashboardFlow";
import ActiveWS from "../components/activeWS";

function Dashboard(){
    const { name } = useParams();
    const [activeWorkspaces, setActiveWorkspaces] = useState([]);

    const addWorkspace = () => {

        const nextIndex = activeWorkspaces.length + 1;
        setActiveWorkspaces([...activeWorkspaces, `project${nextIndex}`]);
    };

    return(

        <div className="dashboard-page">
            {/* <div className="background-image"></div> */}
            <div className="section">
                <nav className="nav-section">
                    <h1> <img src="/icon2.png" className="profile-icon" /> DevPath AI</h1>
                    <div className="right-nav">
                    <h1>hello {decodeURIComponent(name)}!! </h1>
                    {/* <img src="/icon2.png" className="profile-icon" /> */}
                    <div className="settings">
                        <img src="/icon14.png" className="settings-icon" />
                        <div class="dropdown-settings">
                            <a href="#">Change Username</a>
                            <a href="#">Delete Account</a>
                        </div>
                    </div>
                    </div>
                </nav>

                <div className="dashboard-section">
                    <div className="ws-section">
                        <div className="ws-container">
                            <h1 className="title-text">Active Workspaces</h1>
                            {activeWorkspaces.length === 0 ? (
                                <div className="empty-state">
                                    <h1 className="reg-text">No active workspaces yet.</h1>
                                    <div className="ghost">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                    </div>
                                    <p className="reg-text">Click the + to create a workspace</p>
                                </div>
                            ) : (
                                activeWorkspaces.map((title) => (
                                    <ActiveWS key={title} title={title} />
                                ))
                            )}
                            <button type="button" className="add-ws" onClick={addWorkspace} disabled={activeWorkspaces.length>=2}>
                                <img src="/icon15.png" className="add-icon" alt="Add workspace" />
                            </button>
                            
                        </div>
                    </div>
                    <div className="about-section">
                        <div className="background-image"></div>
                        <div className="about1">
                        <div>
                        <h1 className="title-text">Structured guidance from idea to deployment.</h1>
                        <h1 className="reg-text">DevPath AI is an AI-assisted project planning and execution platform that guides developers from an initial project idea to a complete implementation plan</h1>
                        <h1 className="reg-text">Modern software development requires developers to make dozens of interconnected decisions before implementation even begins.</h1>
                        {/* <h1 className="reg-text">DevPath AI helps you make the right ones before writing a single line of code.</h1> */}
                        </div>
                        <div>
                        <h1 className="title-text">Developers constantly need to make decisions about: </h1>
                        <div className="decisions-cards">
                            <div>
                            <h1 className="decision-card">Architecture</h1>
                            <h1 className="decision-card">Features</h1>
                            </div>
                            <div>
                            <h1 className="decision-card">Frameworks</h1>
                            <h1 className="decision-card">Deployment</h1>
                            </div>
                            <div>
                            <h1 className="decision-card">Databases</h1>
                            <h1 className="decision-card">Integration</h1>
                            </div>
                        </div>
                        </div>
                        </div>
                        <h1 className="title-text">Workflow</h1>
                        <DashboardFlow/>
                        
                        


                    </div>
                </div>
            </div>
             
        </div>
    )

}

export default Dashboard;