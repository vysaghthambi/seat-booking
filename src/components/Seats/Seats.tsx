import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import { Seat, seats } from "../../utils/seats";
import style from "./Seats.module.css";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SeatInput from "./SeatInput/SeatInput";

export default function Seats() {
  const [selectedSeats, setSeats] = useState<Seat[]>([]);

  const addOrRemoveSeats = (selectedSeat: Seat) => {
    if (selectedSeats.length === 8) {
      window.alert("You can only select up to 8 seats");
      return;
    }

    const index = selectedSeats.findIndex(
      (seat) => seat.id === selectedSeat.id
    );

    if (index === -1) {
      setSeats((prev) => [...prev, selectedSeat]);
    } else {
      const newValue = [...selectedSeats];

      newValue.splice(index, 1);
      setSeats(newValue);
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
