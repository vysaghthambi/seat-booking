import IconButton from "@mui/material/IconButton";

import ChairIcon from "@mui/icons-material/Chair";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Seat } from "../../../utils/seats";

type SeatInputProps = {
  seat: Seat;
  selectedSeats: Seat[];
  addOrRemoveSeats: (seat: Seat) => void;
};

export default function SeatInput({
  seat,
  selectedSeats,
  addOrRemoveSeats,
}: SeatInputProps) {
  const alreadySelected = selectedSeats.find(
    (selectedSeat) => selectedSeat.id === seat.id
  );

  return (
    <Stack alignItems="center">
      <IconButton
        key={seat.id}
        onClick={() => addOrRemoveSeats(seat)}
        size="large"
      >
        {alreadySelected ? (
          <ChairIcon fontSize="large" sx={{ color: "#00FF00" }} />
        ) : (
          <ChairOutlinedIcon
            fontSize="large"
            sx={{
              color:
                seat.type === "silver"
                  ? "#C0C0C0"
                  : seat.type === "gold"
                    ? "#FFD700"
                    : "#E5E4E2",
            }}
          />
        )}
      </IconButton>
      <Typography fontSize="0.7rem">{seat.name}</Typography>
    </Stack>
  );
}
