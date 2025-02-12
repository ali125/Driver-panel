import React, { useCallback, useEffect, useState } from "react";
import { Calendar, CalendarProvider } from "zaman";
import toast from "react-hot-toast";
import { onDatePickerChangePayload } from "zaman/dist/types";
import { Input, Popover } from "antd";
import { getFormatDate } from "@/utils/date";

type Props = {
  placeholder?: string;
  nextDays?: boolean;
  year18?: boolean;
  onOpenChange?: (open: boolean) => void;
  onChange?: (val: Date) => void;
};

const DatePicker: React.FC<Props> = ({
  placeholder,
  onChange,
  nextDays,
  year18,
  onOpenChange,
}) => {
  const [date, setDate] = useState<Date | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (onChange && date) {
      onChange(date);
    }
  }, [date, onChange]);

  const handleChange = useCallback(
    ({ value }: onDatePickerChangePayload) => {
      if (nextDays) {
        const d = new Date();
        d.setHours(0);
        d.setMinutes(0);
        if (value < d) {
          toast.error("تاریخ انتخابی باید برای آینده باشد");
        } else {
          setDate(value);
        }
      } else if (year18) {
        const d = new Date();
        d.setFullYear(d.getFullYear() - 18);
        if (value > d) {
          toast.error("حداقل سن باید بالای ۱۸ سال باشد!");
        } else {
          setDate(value);
        }
      } else {
        setDate(value);
      }
    },
    [nextDays, year18],
  );

  const handleOpen = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      if (onOpenChange) onOpenChange(open);
    },
    [onOpenChange],
  );

  return (
    <>
      <Popover
        content={
          <CalendarProvider locale="fa" direction="rtl">
            <Calendar
              className="font-semibold"
              defaultValue={date}
              onChange={handleChange}
            />
          </CalendarProvider>
        }
        zIndex={100000}
        trigger="click"
        open={isOpen}
        onOpenChange={handleOpen}
      >
        <Input
          className="w-full rounded-xl border-gray-400 bg-transparent bg-white px-4 py-2 text-lg font-medium font-semibold"
          id="datepicker"
          value={date ? getFormatDate(date.toISOString()) : ""}
          placeholder={placeholder}
        />
      </Popover>
    </>
  );
};

export default DatePicker;
