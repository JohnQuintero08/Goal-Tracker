import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import dayjs from 'dayjs'
import "../styles/smallCalendar.css"
import BannerT2 from './BannerT2'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { Badge } from '@mui/material'
import { PickersDay } from '@mui/x-date-pickers'
import { UserContext } from '../src/App'

export default function DateCalendarValue() {
    const [value, setValue] = useState(dayjs(new Date()))
    const [highlightedDays, setHighlightedDays] = useState([])
    const [upDateMonth, setUpdateMonth] = useState(dayjs(new Date()).month())
    const [dayGoal, setDayGoal] = useState([])
    const { listOfGoals } = useContext(UserContext)
    const navigate = useNavigate()

    //Filter the goals depending on the month selected in the calendar
    function filterGoals(goals) {
        return goals.filter(goal => {
            return goal.date.getMonth() === upDateMonth
        })
    }

    //Update the highlighted days everytime the user changes month in Calendar
    useEffect(() => {
        setHighlightedDays(filterGoals(listOfGoals).map(goal => goal.date.getDate()));
    }, [listOfGoals, upDateMonth])

    //Update the dayGoal everytime the user changes the day
    useEffect(()=>{
        setDayGoal(filterGoals(listOfGoals)
            .filter(goal => goal.date.getDate() === value.date())
            .map(goal => {return {title: goal.myGoal, id: goal.id}})
        )
    }, [value])

    //Link to the goal 
    function navigateGoal(id){
        navigate(`./myGoals/goal/${id}`)
    }

    //render the dayGoals
    const goalDay = dayGoal.map((item, index) => {
        return (
            <BannerT2 onClick={()=> navigateGoal(item.id)} key={index}>{item.title}</BannerT2>
        )
    })

    //message No goals
    const messageNoGoals = <div className='message-no-goals'><p>Nothing this day</p></div>

    function ServerDay(props) {
        const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

        const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

        return (
            <Badge
                key={props.day.toString()}
                overlap="circular"
                badgeContent={isSelected ? '🚩' : undefined}
            >
                <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
            </Badge>
        )
    }

    function showMonth(date) {
        setUpdateMonth(date.month())
    }

    return (
        <div className='container-small-calendar-inner'>
            <div className='header-small-calendar-inner'>
                <h2>Calendar</h2>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DemoItem>
                        <DateCalendar
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            showDaysOutsideCurrentMonth	={false}
                            slots={{
                                day: ServerDay,
                            }}
                            slotProps={{
                                day: {
                                    highlightedDays,
                                },
                            }}
                            onMonthChange={showMonth}
                            sx={{
                                alignSelf: "center",
                                borderRadius: "20px",
                                height: "400px",
                                border: "7px solid var(--blueClear)",
                                "& .MuiTypography-root ": {
                                    fontSize: "0.9rem",
                                },
                                "& .MuiButtonBase-root ": {
                                    fontSize: "0.9rem",
                                    marginLeft: "3px",
                                    marginTop: "0px"
                                },
                                "& .MuiPickersCalendarHeader-root ": {
                                    borderBottom: "7px solid var(--blueClear)",
                                    paddingBottom: "1rem"
                                },
                                "& .MuiPickersCalendarHeader-label ": {
                                    fontSize: "1rem",
                                    transform: "translateY(3px)"
                                },
                                "& .Mui-selected ": {
                                    backgroundColor: "var(--green)"
                                },
                                "& .Mui-selected:hover": {
                                    backgroundColor: "var(--green)"
                                },
                                "& .Mui-selected:focus": {
                                    backgroundColor: "var(--green)"
                                }
                            }}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
            <div className='container-small-goals'>
                <h3>That day you will have achieved...</h3>
                <div>
                    {dayGoal.length>0 ? goalDay : messageNoGoals}
                </div>
            </div>
        </div>
    );
}