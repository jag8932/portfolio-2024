import { useState, useEffect } from "react";
import { auth } from '../config/firebase';
import { db } from '../config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';
import {SideCard} from './SideCard';

export const ProjectGrid = () => {
    const [projectList, setProjectList] = useState([]);
    const [permissionMessage, setPermissionMessage] = useState("");
   // const [showAdminButtons, setShowAdminButtons] = useState(false);
    const [projectType, setProjectType] = useState("website");
    const projectCollectionRef = collection(db, "projects");

    // Delete specific project by referencing id
    const deleteProject = async (id) => {
        if (auth.currentUser.email !== 'jacobgoodwillie@gmail.com') {
            setPermissionMessage("You are not authorized to do that");
            return;
        }
        setPermissionMessage("");
        const projectDoc = doc(db, "projects", id)
        await deleteDoc(projectDoc);
        getProjects();
    }

    // Retrieve all projects
    const getProjects = async () => {
        try {
            const data = await getDocs(projectCollectionRef);
            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

            setProjectList(filteredData);
        } catch (err) {
            console.error(err);
        }
    }

    const changeProjectType = (e) => {
        setProjectType(e.target.value);
    }

    // Initial project fetch
    useEffect(() => {
        getProjects();
    }, []);

    // Wait for projects to load and then display them 
    if (projectList.length === 0) {
        return (
            <Spinner className="spinner" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)
    }
    else {
        return (
            <div className="margin-12half">
                <h1 className="display-3">Projects</h1>
                <div className="select-container">
                    <div className="flex-responsive">
                        <div className="button-group-item">
                            <label className="hidden-label" id="label-website">Websites</label>
                            <button className="button-website" value="website" onClick={e => changeProjectType(e, "value")}></button>
                        </div>
                        <div className="button-group-item">
                            <label className="hidden-label" id="label-wordpress">Wordpress Websites</label>
                            <button className="button-wordpress" value="wordpress" onClick={e => changeProjectType(e, "value")}></button>
                        </div>
                        <div className="button-group-item">
                            <label className="hidden-label" id="label-game">Games</label>
                            <button className="button-game" value="game" onClick={e => changeProjectType(e, "value")}></button>
                        </div>
                    </div>
                </div>
                {
                    projectList.filter((project) => project.type === projectType)
                        .map((project) => (
                            <div className="Project-tile" key={project.id} style={{ width: 'auto' }}>
                                <SideCard  img={project.imgref} title={project.name} text={project.description} link={project.link}/>
                                <label className="text-danger">{permissionMessage}</label>
                            </div>
                        ))
                }
            </div>
        )
    }

}