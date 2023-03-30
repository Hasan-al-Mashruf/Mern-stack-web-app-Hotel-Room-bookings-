import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatepicker = ({ info, name }) => {
    const [startDate, setStartDate] = useState(null);
    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                required
                name= {name}
                placeholderText={info}

            />

        </div>
    );
};

export default MyDatepicker;