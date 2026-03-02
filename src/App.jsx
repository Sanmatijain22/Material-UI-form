import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <Card
        sx={{
          width: 420,
          padding: 4,
          borderRadius: 4,
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
             Material UI Form
          </Typography>

          <TextField
            label="Enter Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              padding: 1.5,
              fontSize: "16px",
              borderRadius: 2,
            }}
          >
            Submit
          </Button>

          {name && (
            <Typography
              variant="body1"
              align="center"
              sx={{ mt: 3, fontWeight: 500 }}
            >
              Hello, {name} 👋
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;