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
import React, { useEffect, useState } from "react";
import details from "./constants";
import { useHistory } from "react-router-dom";

import {
  updateStoreField,
  resetFormdata,
  updateResultField,
} from "./Formslice";
import { useSelector, useDispatch } from "react-redux";
import { Configuration, OpenAIApi } from "openai";

function InputForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const [loading, setLoading] = useState(false);
  const [errorDetails, setErrorDetails] = useState({});
  const history = useHistory();
  const [toDisplay, setToDisplay] = useState("Creating...");

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: "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",
    })
  );

  const onChangeCall = (id, value) => {
    dispatch(updateStoreField({ id: id, value: value }));
    setErrorDetails({ ...errorDetails, [id]: "" });
  };
  const onBlurCall = (id) => {
    if (state[id] === "") {
      setErrorDetails({ ...errorDetails, [id]: "This is required Field" });
    }
  };
  const arrToDisplay = [
    "Loading...",
    "Generating your Intro..",
    "Finishing up",
    "Thankyou for Waiting",
    "Just Adding Touch up",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let a = Math.random() * 4;
      a = Math.ceil(a);
      setToDisplay(arrToDisplay[a]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const restForm = () => {
    dispatch(resetFormdata());
  };

  const generateIntroduction = () => {
    setLoading(true);
    openAi
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `My name is ${state.name} and my age is ${state.age} and have completed my college from ${state.College} major in ${state.major} ,I am working in ${state.organization} and have experience of ${state.experience},my skill is in ${state.skills} and my hoobby is ${state.hobby} and my goal is ${state.goal}.Can you create multiple introduction for me amd send me in a array .`,
          },
        ],
      })
      .then((res) => {
        if (res.data.choices[0].message.content) {
          let resultString = res.data.choices[0].message.content;
          setLoading(false);
          resultString = resultString.replace(/\d+\./g, "****");
          resultString = resultString.split(":");
          resultString = resultString[1].split("****");
          resultString.shift();
          dispatch(updateResultField(resultString));
          history.push("/list");
        }
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",

        width: "100%",
        height: "100%",
      }}
    >
      {/* <Loader /> */}
      <Card
        raised={true}
        sx={{
          width: "50%",
          backgroundColor: "rgb(231, 235, 240)",
          marginTop: "80px",
          id: "cardLayoud",
        }}
      >
        <CardHeader
          title="Create My Introduction"
          avatar={
            <Avatar
              sx={{ backgroundImage: "linear-gradient(45deg, red, blue)" }}
            >
              {(state?.name[0] || "C").toUpperCase()}
            </Avatar>
          }
          titleTypographyProps={{ fontSize: "20px" }}
        ></CardHeader>
        <Divider variant={"middle"} />
        <CardContent>
          <Grid container spacing={2}>
            {details.map((value) => {
              return (
                <Grid item xs={12} id={value.id}>
                  <FormControl
                    sx={{ width: "100%" }}
                    variant="outlined"
                    error={errorDetails[value.id]}
                    required={value.isRequired}
                  >
                    <InputLabel variant="outlined">{value.name}</InputLabel>
                    <FilledInput
                      value={state[value.id]}
                      onChange={(e) => onChangeCall(value.id, e.target.value)}
                      onBlur={() => {
                        onBlurCall(value.id);
                      }}
                    ></FilledInput>
                    <FormHelperText>{errorDetails[value.id]} </FormHelperText>
                  </FormControl>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <Divider sx={{ padding: "5px" }} variant={"middle"}></Divider>
        <CardActions sx={{ justifyContent: "end" }}>
          <Button
            size="medium"
            variant="contained"
            onClick={generateIntroduction}
            disabled={loading}
          >
            Generate
          </Button>
          <Button
            size="medium"
            variant="contained"
            onClick={restForm}
            disabled={loading}
          >
            Reset
          </Button>
        </CardActions>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: "flex",
            flexDirection: "column",
          }}
          open={loading}
        >
          <CircularProgress color="inherit" />
          <Typography>{toDisplay}</Typography>
        </Backdrop>
      </Card>
    </Box>
  );
}
export default InputForm;
