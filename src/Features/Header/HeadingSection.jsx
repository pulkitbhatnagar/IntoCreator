import { Grid, Button, Card, Box, Typography } from "@mui/material";
import React, { useState } from "react";
//
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import { Configuration, OpenAIApi } from "openai";
function TopSection() {
  const [showOption, setShowOption] = useState(false);
  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: "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",
    })
  );
  //   openAi
  //     .createChatCompletion({
  //       model: "gpt-3.5-turbo",
  //       messages: [
  //         {
  //           role: "user",
  //           content:
  //             "My name is Pulkit and I have 2 years of experience in ncr and worked on react and angular.Can you create a introduction for me.",
  //         },
  //       ],
  //     })
  //     .then((res) => {
  //       console.log("result is", res.data.choices);
  //     });
  return (
    <Card
      sx={{
        backgroundColor: "rgba(22, 22, 23, .8);",
        fontFamily:
          " SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
        fontSize: "16px",
        fontWeight: "400",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Button startIcon={<AppleIcon />} sx={{ color: "#FFFFFF" }}></Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ color: "#FFFFFF" }}
            onClick={() =>
              setTimeout(() => {
                setShowOption(!showOption);
              }, 200)
            }
          >
            Store
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>MAc</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>iPad</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>iPhone</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>Watch</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>AirPods</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>TV & Home</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>Entertainment</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>Accessories</Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: "#FFFFFF" }}>Support</Button>
        </Grid>
        <Grid item>
          <Button startIcon={<SearchIcon />} sx={{ color: "#FFFFFF" }}></Button>
        </Grid>
      </Grid>
      {showOption && (
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "30px",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              paddingLeft: "16px",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", paddingLeft: 1, color: "#FFFFFF" }}
            >
              shop
            </Typography>
            <Grid item>
              <Button
                sx={{ fontSize: "24px", fontWeight: "600", color: "#FFFFFF" }}
              >
                Shop the latest
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "24px", fontWeight: "600", color: "#FFFFFF" }}
              >
                Mac
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "24px", fontWeight: "600", color: "#FFFFFF" }}
              >
                iPad
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "24px", fontWeight: "600", color: "#FFFFFF" }}
              >
                iPhone
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "24px", fontWeight: "600", color: "#FFFFFF" }}
              >
                Apple watch
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",

              paddingLeft: "16px",
            }}
            xs={2}
          >
            <Typography
              sx={{ fontSize: "12px", paddingLeft: 1, color: "#FFFFFF" }}
            >
              Quick Links
            </Typography>
            <Grid item>
              <Button
                sx={{ fontSize: "12px", fontWeight: "600", color: "#FFFFFF" }}
              >
                Order Status
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px", fontWeight: "600", color: "#FFFFFF" }}
              >
                Ways to Buy
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Card>
  );
}
export default TopSection;
