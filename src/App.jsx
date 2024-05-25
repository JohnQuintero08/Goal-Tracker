import { createContext, useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Try from '../pages/Try'
import GoalCreator from '../components/GoalCreator'
import Goal from '../components/Goal'
import LandingGoal from '../components/LandingGoal'
import Home from '../pages/Home'
import MyGoals from '../pages/MyGoals'
import Calendar from '../pages/Calendar'
import Statistics from '../pages/Statistics'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import User from '../pages/User'
import LogInLayout from "../pages/LogInLayout"
import AuthRequired from "../components/AuthRequired"
import {myListOfGoals} from "../data"
import { update } from "firebase/database"

const UserContext = createContext()

export default function App() {
  const [checkAuth, setCheckAuth] = useState(false)
  function toogleAuth(){
    setCheckAuth(prev => prev ? false : true)
  }
  const [listOfGoals, setListOfGoals] = useState(myListOfGoals)
  function upDateGoals(newGoal){
    setListOfGoals(prev => {
      return [...prev, newGoal]
    })
  }
  function deleteGoal(id){
    setListOfGoals(prev => {
      const newList = prev.filter(goal => {
        return goal.id != id
      })
      return newList
    })
  }
  function updateTaskStatus(goalId, taskId){
    setListOfGoals(prevGoals => {
      return prevGoals.map(goal => {
        if(goal.id === goalId){
          return {
            ...goal,
            task: goal.task.map(task => {
              if(task.id === taskId){
                return {
                  ...task,
                  isDone : !task.isDone 
                }
              }
              return task
            })
          }
        }
        return goal
      })
    }) 
    updatePercentage(goalId)
    console.log(listOfGoals)
  }
  function updatePercentage(goalId){
    setListOfGoals(prevGoals => {
      let countPercentage = 0
      return prevGoals.map(goal => {
        if(goal.id === goalId){
          goal.task.forEach(task => {
            task.isDone && countPercentage++
          })
          return {
            ...goal,
            percentage: (countPercentage/goal.task.length)*100
          }
        }
        return goal
      })
    })
  }
  return(
    <UserContext.Provider value={{checkAuth, toogleAuth, listOfGoals, upDateGoals, deleteGoal, updateTaskStatus}}>  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Try />}>
            <Route index element={< Home/>} />
            <Route path='goalCreator' element={< GoalCreator/>}/> 
            <Route path='calendar' element={< Calendar />}/>
            <Route path='statistics' element={<Statistics />}/>
            <Route path='myGoals' element={< MyGoals/>}>
              <Route index element={< LandingGoal/>}/>
              <Route path='goal/:id' element={<Goal/>}/>
              <Route path='goalCreator' element={<GoalCreator/>}/>
            </Route>
          </Route> 
          <Route path='logIn' element={<LogInLayout/>}>
            <Route index element={<LogIn/>}/>
          </Route>
          <Route element={<AuthRequired />}>
            <Route path='user' element={<User/>}/>
          </Route>
          <Route path='signUp' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export {UserContext}
