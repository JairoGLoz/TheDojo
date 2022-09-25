import {useCollection} from "../../hooks/useCollection";
import {useAuthContext} from "../../hooks/useAuthContext";

// styles
import './Dashboard.css'
import ProjectList from "../../components/ProjectList";
import ProjectFilter from "./ProjectFilter";
import {useState} from "react";

export default function Dashboard() {

    const {user} = useAuthContext();
    const {documents, error} = useCollection('projects');
    const [currentFilter, setCurrentFilter] = useState('all')

    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter)
    }

    const filteredProjects = documents ? documents.filter((project) => {
        switch (currentFilter) {
            case 'all':
                return true;
            case 'mine':
                let assignedToMe = false;
                project.assignedUsersList.forEach((u) => {
                    if (user.uid === u.id) {
                        assignedToMe = true;
                    }
                })
                return assignedToMe;
            case 'development':
            case 'design':
            case 'sales':
            case 'marketing':
                console.log(project.category, currentFilter)
                return project.category === currentFilter;
            default:
                return true
        }
    }) : null;

    return (
        <div>
            <h2 className={"page-title"}>Dashboard</h2>
            {error && <p className={"error"}>{error}</p>}
            {documents && (
                <ProjectFilter
                    currentFilter={currentFilter}
                    changeFilter={changeFilter}
                />
            )}
            {filteredProjects && <ProjectList projects={filteredProjects}/>}
        </div>
    )
}