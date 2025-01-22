import { useMemo } from "react";
import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { RootState } from "../../redux/store";
import { prices } from "../../utils/seats";

import style from "./Summary.module.css";

export default function Summary() {
  const selectedSeats = useSelector(
    (state: RootState) => state.seat.selectedSeats
  );

  const sortedSeats = useMemo(
    () => selectedSeats.map((selectedSeat) => selectedSeat.name).sort(),
    [selectedSeats]
  );

  const amount = useMemo(
    () => selectedSeats.reduce((sum, seat) => sum + prices.get(seat.type)!, 0),
    [selectedSeats]
  );

  return (
    <div className={style.SummaryContainer}>
      <div className={style.Summary}>
        <Typography fontWeight={600}>Seats</Typography>
        <Typography fontSize="0.9rem">
          {sortedSeats.length ? sortedSeats.join(", ") : "Please select a seat"}
        </Typography>
        <Typography fontWeight={600}>Total Amount</Typography>
        <Typography fontSize="0.9rem">
          {new Intl.NumberFormat(undefined, {
            currency: "INR",
            style: "currency",
          }).format(amount)}
        </Typography>
      </div>

      <Button
        fullWidth
        variant="contained"
        sx={{ marginTop: 5 }}
        disabled={!sortedSeats.length}
      >
        Book Now
      </Button>
    </div>
  );
}
