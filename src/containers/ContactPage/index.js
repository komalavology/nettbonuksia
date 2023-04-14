import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormControls } from "./controls";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { SubBanner } from "../../components/subBanner";
import { FormWrapper } from "./style";
import Img from "../../assets/contact.png";
const inputFieldValues = [
  {
    name: "firstName",
    label: "First Name",
    id: "my-firstname",
    col: 6,
  },
  {
    name: "lastName",
    label: "Last Name",
    id: "my-lastname",
    col: 6,
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
    col: 6,
  },
  {
    name: "phone",
    label: "Phone Number",
    id: "phone",
    col: 6,
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 4,
    col: 12,
  },
];

export const ContactPage = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <>
      <Header />
      <SubBanner heading="Ota meihin yhteyttä" />
      <Container>
        <FormWrapper>
          <Grid container spacing={5}>
            <Grid md={6}>
              <img src={Img} alt="Contact us"/>
            </Grid>
            <Grid md={6}>
              <h2>Ota meihin yhteyttä</h2>
              <form autoComplete="off" onSubmit={handleFormSubmit}>
                <Grid container spacing={2} style={{padding:0}}>
                  {inputFieldValues.map((inputFieldValue, index) => {
                    return (
                      <Grid key={index} md={inputFieldValue.col}>
                        <TextField
                          
                          onChange={handleInputValue}
                          onBlur={handleInputValue}
                          name={inputFieldValue.name}
                          label={inputFieldValue.label}
                          error={errors[inputFieldValue.name]}
                          multiline={inputFieldValue.multiline ?? false}
                          fullWidth
                          rows={inputFieldValue.rows ?? 1}
                          autoComplete="none"
                          {...(errors[inputFieldValue.name] && {
                            error: true,
                            helperText: errors[inputFieldValue.name],
                          })}
                        />
                      </Grid>
                    );
                  }
                  )}
                  <Grid md={12}>
                    <Button
                    variant="contained"
                    type="submit"
                    color="secondary"
                    disabled={!formIsValid()}
                  >
                    Send Message
                  </Button>
                  </Grid>
                </Grid>
                
              </form>
            </Grid>
          </Grid>
        </FormWrapper>
      </Container>
      <Footer />
    </>
  );
};
