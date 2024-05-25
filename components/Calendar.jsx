import React, {useEffect} from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';

export default function DatePickerValue({getDate}) {
    const [value, setValue] = React.useState(dayjs());

    useEffect(()=>getDate(value.$d),[value])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    sx={{
                        bgcolor: 'var(--white)',
                        border: '0px solid',
                        borderRadius: '20px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: '0px solid',
                                borderRadius: '20px',
                            }
                        },
                    }}
                value={value}
                onChange={(newValue) => setValue(newValue)}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}

