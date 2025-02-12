// import React, { useCallback } from "react";
// import { InputDatePicker } from "jalaali-react-date-picker";
// import moment, { Moment as JalaliMoment } from "jalali-moment";
// import classNames from "classnames";
// import "jalaali-react-date-picker/lib/styles/index.css";

// type Props = {
//   value?: any;
//   defaultValue?: JalaliMoment;
//   placeholder?: string;
//   onChange?: (val: any) => void;
//   wrapperClassName?: string;
//   fullDate?: boolean;
//   nextDays?: boolean;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
// };

// const DatePicker: React.FC<Props> = ({
//   defaultValue = moment("2011-01-01"),
//   fullDate = false,
//   nextDays,
//   wrapperClassName,
//   ...restProps
// }) => {
//   const disabledDates = useCallback(
//     (date: JalaliMoment) => {
//       const now = moment(); // Current moment in Jalali calendar
//       const diff = now.startOf("day").diff(moment(date).startOf("day"), "days");
//       return nextDays ? diff > 0 : date.year() > new Date().getFullYear() - 18;
//     },
//     [nextDays],
//   );

//   return (
//     <InputDatePicker
//       wrapperClassName={classNames(
//         "rounded-md border border-[#9ca3af] !min-h-[40px] overflow-hidden",
//         wrapperClassName,
//       )}
//       defaultValue={defaultValue as any}
//       disabledDates={!fullDate ? (disabledDates as any) : undefined}
//       {...restProps}
//     />
//   );
// };

// export default DatePicker;
