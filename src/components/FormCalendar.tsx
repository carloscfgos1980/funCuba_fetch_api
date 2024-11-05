import { memo } from "react";

const DatePicker = memo(({ selectedDate, onDateChange }: any) => {
  return <input type="date" value={selectedDate} onChange={onDateChange} />;
});

const FormCalendar = ({
  dateStart,
  dateEnd,
  getDateStart,
  getDateEnd,
}: any) => {
  return (
    <div className="d-flex">
      <div className="mx-1">
        <DatePicker selectedDate={dateStart} onDateChange={getDateStart} />
      </div>
      <div className="mx-1">
        <DatePicker selectedDate={dateEnd} onDateChange={getDateEnd} />
      </div>
    </div>
  );
};

export default FormCalendar;
