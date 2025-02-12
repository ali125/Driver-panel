// import React, { useCallback, useEffect } from "react";
// import { DatePicker as InputDatePicker } from "zaman";
// import classNames from "classnames";
// import toast from "react-hot-toast";
// import { onDatePickerChangePayload } from "zaman/dist/types";

// type Props = {
//   placeholder?: string;
//   wrapperClassName?: string;
//   nextDays?: boolean;
//   year18?: boolean;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
//   onChange?: (val: Date) => void;
// };

// const DatePicker: React.FC<Props> = ({
//   placeholder,
//   wrapperClassName,
//   onChange,
//   nextDays,
//   year18,
//   onOpenChange,
//   open,
// }) => {
//   const handleChange = useCallback(
//     ({ value }: onDatePickerChangePayload) => {
//       if (onOpenChange) onOpenChange(true);
//       if (nextDays) {
//         const d = new Date();
//         if (value < d) {
//           toast.error("تاریخ انتخابی باید برای آینده باشد");
//         } else {
//           if (onChange) onChange(value);
//         }
//       } else if (year18) {
//         const d = new Date();
//         d.setFullYear(d.getFullYear() - 18);
//         if (value > d) {
//           toast.error("حداقل سن باید بالای ۱۸ سال باشد!");
//         } else {
//           if (onChange) onChange(value);
//         }
//       } else {
//         if (onChange) onChange(value);
//       }
//     },
//     [nextDays, year18, onOpenChange, onChange],
//   );

//   // const fromDate = useMemo(() => {
//   //   const d = new Date();
//   //   return d;
//   // }, []);

//   // const toDate = useMemo(() => {
//   //   const d = new Date();
//   //   d.setFullYear(d.getFullYear() - 18);
//   //   return d;
//   // }, []);

//   return (
//     <InputDatePicker
//       className="font-semibold"
//       inputClass={classNames(
//         "rounded-md border w-full border-[#9ca3af] px-2 text-lg font-semibold !min-h-[40px] overflow-hidden",
//         wrapperClassName,
//       )}
//       show={open}
//       // to={toDate}
//       // from={fromDate}
//       inputAttributes={{
//         placeholder,
//       }}
//       onChange={handleChange}
//     />
//   );
// };

// export default DatePicker;
