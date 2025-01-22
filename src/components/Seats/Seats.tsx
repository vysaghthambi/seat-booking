import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";

import { RootState } from "../../redux/store";
import SeatInput from "./SeatInput/SeatInput";
import { Seat, seats } from "../../utils/seats";
import { add, remove } from "../../redux/seatSlice";

import style from "./Seats.module.css";

export default function Seats() {
  const selectedSeats = useSelector(
    (state: RootState) => state.seat.selectedSeats
  );
  const dispatch = useDispatch();

  const addOrRemoveSeats = (seat: Seat) => {
    if (selectedSeats.length === 8) {
      window.alert("You can only select up to 8 seats");
      return;
    }

    const index = selectedSeats.findIndex(
      (selectedSeat) => selectedSeat.id === seat.id
    );

    if (index === -1) {
      dispatch(add(seat));
    } else {
      dispatch(remove(index));
    }
  };

  return (
    <div className={style.SeatsContainer}>
      <div className={style.Seats}>
        {seats.map((seat) => (
          <SeatInput
            key={seat.id}
            seat={seat}
            selectedSeats={selectedSeats}
            addOrRemoveSeats={addOrRemoveSeats}
          />
        ))}
      </div>

      <Stack direction="row" justifyContent="center" mt={2} columnGap={2}>
        <Stack direction="row" alignItems="center" columnGap={1}>
          <ChairOutlinedIcon sx={{ color: "#C0C0C0" }} />
          <Typography fontSize="0.7rem">
            Silver (
            {new Intl.NumberFormat(undefined, {
              currency: "INR",
              style: "currency",
            }).format(100)}
            )
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" columnGap={1}>
          <ChairOutlinedIcon sx={{ color: "#FFD700" }} />
          <Typography fontSize="0.7rem">
            Gold (
            {new Intl.NumberFormat(undefined, {
              currency: "INR",
              style: "currency",
            }).format(150)}
            )
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" columnGap={1}>
          <ChairOutlinedIcon sx={{ color: "#E5E4E2" }} />
          <Typography fontSize="0.7rem">
            Platinum (
            {new Intl.NumberFormat(undefined, {
              currency: "INR",
              style: "currency",
            }).format(200)}
            )
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
}
