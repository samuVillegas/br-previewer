"use client";
import { useState } from "react";
import {
  Container,
  SxProps,
  Theme,
  Box,
  Stack,
  TextField,
  Button,
} from "@mui/material";

const styles: {
  container: SxProps<Theme>;
  stack: SxProps<Theme>;
  box: SxProps<Theme>;
  textField: SxProps<Theme>;
  containerElements: SxProps<Theme>;
  stackFields: SxProps<Theme>;
} = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  stack: {
    width: "90%",
    bgcolor: "white",
  },
  containerElements: {
    display: "flex",
    justifyContent: "center",
    my: 2,
  },
  box: {
    width: "200px",
    height: "200px",
    bgcolor: "red",
    m: 5,
  },
  stackFields: {
    width: "100%",
  },
  textField: {
    width: "100%",
  },
};

export default function Home() {
  const [state, setState] = useState({
    stylesBox: {
      ...styles.box,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      stylesBox: {
        ...state.stylesBox,
        [e.target.id]: e.target.value !== "" ? parseInt(e.target.value) : 0,
      },
    });
  };

  const copy = () => {
    const css = `
      .box{
        border-top-left-radius: ${state.stylesBox.borderTopLeftRadius};
        border-top-right-radius: ${state.stylesBox.borderTopRightRadius};
        border-bottom-left-radius: ${state.stylesBox.borderBottomLeftRadius};
        border-bottom-right-radius: ${state.stylesBox.borderBottomRightRadius};
      }
    `;
    navigator.clipboard.writeText(css);
  };

  return (
    <Container sx={styles.container}>
      <Stack sx={styles.stack}>
        <Container sx={styles.containerElements}>
          <Box sx={state.stylesBox}></Box>
        </Container>
        <Container sx={styles.containerElements}>
          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            spacing={2}
            sx={styles.stackFields}
          >
            <TextField
              id="borderTopLeftRadius"
              label="borderTopLeftRadius"
              value={state.stylesBox.borderTopLeftRadius}
              onChange={onChange}
            />
            <TextField
              id="borderTopRightRadius"
              label="borderTopRightRadius"
              value={state.stylesBox.borderTopRightRadius}
              onChange={onChange}
            />
            <TextField
              id="borderBottomLeftRadius"
              label="borderBottomLeftRadius"
              value={state.stylesBox.borderBottomLeftRadius}
              onChange={onChange}
            />
            <TextField
              id="borderBottomRightRadius"
              label="borderBottomRightRadius"
              value={state.stylesBox.borderBottomRightRadius}
              onChange={onChange}
            />
          </Stack>
        </Container>
        <Container sx={styles.containerElements}>
          <Button variant="contained" onClick={copy}>
            Copy CSS
          </Button>
        </Container>
      </Stack>
    </Container>
  );
}
