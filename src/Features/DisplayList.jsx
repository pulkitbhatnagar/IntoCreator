import React from "react";
import {
  Grid,
  Button,
  Card,
  Box,
  Typography,
  CardContent,
  CardActions,
  TextField,
  FormControl,
  FilledInput,
  InputLabel,
  Input,
  OutlinedInput,
  FormHelperText,
  Divider,
  Backdrop,
  CircularProgress,
  CardHeader,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { resetFormdata } from "./Formslice";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
function ListDisplay() {
  const state = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const history = useHistory();
  const backButtonClicked = () => {
    dispatch(resetFormdata());
    history.goBack();
  };

  useEffect(() => {
    console.log("yes called", state.result.length === 0, state.result.length);
    if (state.result.length === 0) {
      history.push("/");
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "100%",
      }}
    >
      <Grid sx={{ width: "100%" }}>
        <Button
          startIcon={<ArrowBackIcon></ArrowBackIcon>}
          onClick={backButtonClicked}
          sx={{ color: "#ffffff" }}
        >
          Back
        </Button>
      </Grid>

      {state.result.map((value) => {
        return (
          <Card
            raised={true}
            sx={{
              width: "50%",
              backgroundColor: "rgb(231, 235, 240)",
              marginTop: "40px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontFamily: "Copperplate", fontSize: "20px" }}>
                {value}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
export default ListDisplay;
