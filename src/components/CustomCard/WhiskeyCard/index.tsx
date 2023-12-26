import React from "react";
import cx from "clsx";
import Color from "color"; // v3.2.1
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Row, Item } from "@mui-treasury/components/flex";
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import JD from '../../../assets/images/whiskey/pexels-marcelo-verfe-18702214.jpg';
import JDLogo from '../../../assets/images/whiskey/logo/johnnie-walker-brand.avif';
import LK from '../../../assets/images/whiskey/cody-chan-hLgKiFcVuDY-unsplash.jpg'
import { LEFT_EDGE_SIDEBAR_ID } from "@mui-treasury/layout/utils/constant";
import { Flex } from "antd";
// import {rotateLeft} from "react-magic";
// import animated from 'animate.css'

const defaultColor = "#747f84";

const StyledRoot = styled("div")<{ color?: string }>(
  ({ color = defaultColor }) => ({
    position: "relative",
    borderRadius: "1rem",
    minWidth: 600,
    minHeight: 400,
    display: "flex",
    justifyContent: "flex-end",
    "&:before": {
      position: "absolute",
      transition: "0.7s",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "1rem",
      zIndex: 0,
      bottom: 0,
      backgroundColor: Color(color).darken(0.3).desaturate(0.2).string(),
    },
    "&:hover": {
      "&:before": {
        bottom: -10,
      },
      "& .MuiAvatar-root": {
        transform: "scale(1.1)",
        boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
      },
      "& .MuiCardMedia-root": {
        left: -20,
      },
      "& .StyledContent": {
        width: "60%",
        bottom: -6,
      },
    },
  })
);

const CardMediaCover = styled(CardMedia)(() => ({
  borderRadius: "1rem",
  position: "absolute",
  transition: "0.5s",
  width: "70%",
  height: "100%",
  minHeight: 300,
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  backgroundPosition: "center",
}));

const StyledH2 = styled("h2")(() => ({
  fontFamily: "Fjalla One",
  fontSize: "1.25rem",
  color: "#fff",
  margin: 0
}));

const StyledContent = styled("div")<{ color?: string }>(
  ({ color = defaultColor }) => ({
    position: "relative",
    transition: "1s",
    zIndex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    width: "50%",
    height: "100%",
    minHeight: 400, 
    // boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    "&:before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 85%, 0.3% 83%, 1% 81%, 1.5% 80%, 2% 79%,32.7% 1.5%,33% 1%, 34% 0.3%,35% 0%,100% 0%, 100% 100%)",
        // "polygon(0% 100%, 0% 0%, 5% 0%, 95% 27%, 96.7% 27.6%, 97% 27.9%, 97.5% 28.4%, 98% 29%, 98.5% 30%, 99% 31%, 99.7% 33%, 100% 35%, 100% 100%)",
        // "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        // "polygon(60% 0, 100% 0, 100% 100%, 0 100%, 0 80%, 10% 80%, 18% 78%, 25% 78%, 31% 75%, 35% 72%, 39% 64%, 43% 56%, 47% 48%, 51% 40%, 54% 32%, 56% 24%, 58% 16%, 59% 8%)",
      borderRadius: "1rem",
      background: `linear-gradient(to right, ${color}, ${Color(color)
        .rotate(24)
        .lighten(0.05)})`,
    },
  })
);

const AvatarLogo = styled(Avatar)(() => ({
  transition: "0.3s",
  width: 100,
  height: 100,
  boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
  borderRadius: "1rem",
}));

const StyledDivTeam = styled("div")(({ theme }) => ({
  fontFamily: "Sen",
  fontSize: "0.75rem",
  color: "rgba(255 255 255 / 80%)",
}));

const StyledDivDate = styled("div")(({ theme }) => ({
  fontFamily: "Sen",
  color: "#fff",
  backgroundColor: theme.palette.text.disabled,
  opacity: 0.72,
  fontSize: "0.75rem",
  padding: "0 0.5rem",
  borderRadius: 12,
}));

const CustomCard = ({
  color,
  cover,
  logo,
  title,
  imgSource,
  imgAuthor,
  date,
}: {
  color?: string;
  cover: string;
  logo: string;
  title: React.ReactNode;
  imgSource: string;
  imgAuthor: string;
  date: string;
}) => {
  return (
    <StyledRoot color={color}>
      <Item cssPosition={"absolute"} zIndex={1} left={5} bottom={5}>
        <StyledDivTeam>From {imgSource}</StyledDivTeam>
        <StyledDivTeam>By {imgAuthor}</StyledDivTeam>
      </Item>
      
      <CardMediaCover image={cover}/>
      <StyledContent color={color} className={"StyledContent"}>
        <Box position={"relative"} zIndex={1}>
          <Row p={0} gap={2}>
            <Item>
              <AvatarLogo src={logo} />
            </Item>
            <Item alignSelf="flex-end">
              <StyledH2>{title}</StyledH2>
            </Item>
            <IconButton>
        <FavoriteBorderRounded />
      </IconButton>
          </Row>
          <Row mt={4} alignItems={"center"}>
            <Item ml="auto">
              <StyledDivDate>{date}</StyledDivDate>
            </Item>
          </Row>
        </Box>
      </StyledContent>
    </StyledRoot>
  );
};

export default function CardHighlight() {
  return (
    <Grid wrap={"nowrap"} container spacing={4}>
      <Grid item>
        <CustomCard
          color="#fc7944"
          imgSource={"Pexels"}
          imgAuthor={"Marcelo Verfe"}
          date={"02.04.2020"}
          cover={JD}
          logo={JDLogo}
          title={
            <>
              Astronomy Binoculars
              <br />A Great Alternative
            </>
          }
        />
      </Grid>
      <Grid item>
        <CustomCard
          color="#bdb76b"
          imgSource={"Unsplash"}
          imgAuthor={"Cody Chan"}
          date={"02.04.2020"}
          cover={LK}
          logo={LK}
          title={
            <>
              Astronomy Binoculars
              <br />A Great Alternative
            </>
          }
        />
      </Grid>
    </Grid>
  );
}