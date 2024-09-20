import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../public/Pages/Login.jsx'
import Dashboard from '../public/Pages/Dashboard.jsx'
import MyProfile from '../public/Pages/Project_pages/MyProfile.jsx'
import Inventory from '../public/Pages/Inventory_pages/Inventory.jsx'
import GIS from '../public/Pages/GIS_pages/GIS.jsx'
import Meeting from '../public/Pages/Meeting.jsx'
import Geotagging from '../public/Pages/GIS_pages/Geotagging.jsx'
import Complaints from '../public/Pages/Complaints.jsx'
import Projects from '../public/Pages/Project_pages/Projects.jsx'
import TaskManager from '../public/Pages/Task_pages/TaskManager.jsx'
import CreateProjectForm from '../public/Pages/Project_pages/CreateProjectForm.jsx'
import Templates from '../public/Pages/Templates.jsx'
import Task from '../public/Pages/Task_pages/Task.jsx'
import TaskStatus from '../public/Pages/Task_pages/TaskStatus.jsx'
import ProjectDetails from '../public/Pages/Project_pages/ProjectDetails.jsx'
import Seminar from '../public/Pages/Seminar.jsx'
import PendingTasks from '../public/Pages/Task_pages/PendingTasks.jsx'
import MyInventory from '../public/Pages/Inventory_pages/MyInventory.jsx'
import Inc_req from '../public/Pages/Inventory_pages/Inc_req.jsx'
import Out_req from '../public/Pages/Inventory_pages/Out_req.jsx'
import TopBanner from '../public/Components/TopBanner.jsx'
import Discussion from '../public/Pages/Discussion.jsx'
import CreateTask from '../public/Pages/Task_pages/CreateTask.jsx'
import '../src/App.css'

const App = () => {
  return <>
  <BrowserRouter>
  <TopBanner />
  <Routes>
    <Route path="/"  element={<Login />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/MyProfile" element={<MyProfile />} />
    <Route path="/Inventory" element={<Inventory />} />
    <Route path="/Meeting" element={<Meeting />} />
    <Route path="/GIS" element={<GIS />} />
    <Route path="/Geotagging" element={<Geotagging />} />
    <Route path="/Complaints" element={<Complaints/>} />
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/CreateProjectForm" element={<CreateProjectForm/>} />
    <Route path="/TaskManager" element={<TaskManager/>} />
    <Route path="/Templates" element={<Templates/>} />
    <Route path="/Seminar" element={<Seminar/>} />
    <Route path="/Task" element={<Task/>} />
    <Route path="/CreateTask" element={<CreateTask/>} />
    <Route path="/PendingTasks" element={<PendingTasks/>} />
    <Route path="/TaskStatus" element={<TaskStatus/>} />
    <Route path="/ProjectDetails" element={<ProjectDetails/>} />
    <Route path="/MyInventory" element={<MyInventory/>} />
    <Route path="/Inc_req" element={<Inc_req/>} />
    <Route path="/Out_req" element={<Out_req/>} />
    <Route path="/Discussion" element={<Discussion/>} />



    
  </Routes>
  </BrowserRouter>
  </>
  
}

export default App
