import { getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(cabin.id);
  return (
    <div className="grid grid-cols-2 items-stretch border border-primary-800 min-h-[400px]">
      <DateSelector cabin={cabin}/>
      <ReservationForm cabin={cabin}/>
    </div>
  );
}