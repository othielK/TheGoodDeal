import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../styles/avatardashboard.css";
import "@mui/material/styles";

export default function Avatardashboard() {
  return (
    <div>
      <div className="avatar">
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            className="avatardash"
            sx={{
              width: "70px",
              height: "70px",
              fontSize: "24px",
              bgcolor: "#EBAF00",
            }}
          >
            B
          </Avatar>
          <p className="text_avatar">Beebe</p>
        </Stack>
      </div>
      <hr className="separator-line" />
    </div>
  );
}
