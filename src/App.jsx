import { useState } from 'react';
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projectsState, setProjectsState] = useState(
    {
      selectedProjectId: undefined,
      projects: [],
    }
  );

  function handleStartAddProject() {
    setProjectsState(previousState => {

      return {
        ...previousState,
        selectedProjectId: null,
      }
    }
    );
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,

      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    }
    );
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  console.log(projectsState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
