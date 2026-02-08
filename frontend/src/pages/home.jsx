import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
  <div className="homeWrapper">

    {/* NAV */}
    <div className="navBarModern">
      <h2>Zoom Video Call</h2>

      <div className="navRight">
        <IconButton onClick={() => navigate("/history")}>
          <RestoreIcon />
        </IconButton>

        <Button
          className="logoutBtn"
          onClick={() => {
            localStorage.removeItem("token")
            navigate("/auth")
          }}
        >
          Logout
        </Button>
      </div>
    </div>

    {/* HERO */}
    <div className="heroSection">

      <div className="heroLeft">
        <h1>
          Connect instantly.<br />
          Meet beautifully.
        </h1>

        <p>
          High-quality real-time video meetings powered by modern web technology.
        </p>

        <div className="joinBox">
          <TextField
            label="Meeting Code"
            variant="outlined"
            value={meetingCode}
            onChange={e => setMeetingCode(e.target.value)}
            sx={{
              input: { color: "white" },
              label: { color: "#aaa" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#333" },
                "&:hover fieldset": { borderColor: "#ff8c00" },
                "&.Mui-focused fieldset": { borderColor: "#ff8c00" }
              }
            }}
          />

          <Button
            variant="contained"
            onClick={handleJoinVideoCall}
            className="joinBtnHero"
          >
            Join Call
          </Button>
        </div>
      </div>

      <div className="heroRight">
        <img src="/logo3.png" alt="meeting illustration" />
      </div>

    </div>

  </div>
)

}


export default withAuth(HomeComponent)