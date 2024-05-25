import React from 'react';
import dayjs from 'dayjs';
import "../styles/smallCalendar.css"
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { IoIosArrowForward } from "react-icons/io";
import ButtonMiniDash from './ButtonMiniDash';
import BannerT2 from './BannerT2'

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs(new Date()));

  return (
    <div className='container-small-calendar-inner'>
        <div className='header-small-calendar-inner'>
            <h2>Calendar</h2>
            {/* <ButtonMiniDash to="calendar">To Calendar</ButtonMiniDash> */}
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem >
                    <DateCalendar 
                        value={value} 
                        onChange={(newValue) => setValue(newValue)} 
                        sx= {{
                            alignSelf: "center",
                            borderRadius: "20px",
                            border: "7px solid var(--blueClear)",
                            "& .MuiTypography-root ": {
                                fontSize: "1rem",
                            },
                            "& .MuiButtonBase-root ": {
                                fontSize: "1rem",
                                marginLeft: "3px",
                                marginTop: "3px"
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
            <h3>That day you will be..</h3>
            <div>
                <BannerT2>Goal Num 1 of the Day</BannerT2>
                <BannerT2>Goal Num 2 of the Day</BannerT2>
            </div>
        </div>
    </div>
  );
}