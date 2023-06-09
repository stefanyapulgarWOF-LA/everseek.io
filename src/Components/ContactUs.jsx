import { React, useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import SendEmail from "../SendEmail";
import Send from "@mui/icons-material/Send";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function ContactUs({anchoViewport}) {
  const [contactForm, setContactForm] = useState();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [sendedMessage, setSendedMessage] = useState(false);
const refBox = useRef();

const SendedMessage = () => {
    return (
      <Box
        height={refBox?.current?.clientHeight-17}
        gap={1}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box height={"80px"} width={"80px"}>
        <MarkEmailReadIcon sx={{fontSize:'80px', color:'#fff'}}/>
                </Box>
        <Typography
          variant="h2"
          fontFamily= "Open Sans, sans serif"
          fontSize={"30px"}
          fontWeight={500}
          color={"#fff"}
          lineHeight={1.3}
          letterSpacing={2}
          marginBottom={"20px"}
        >
          <FormattedMessage
            id="contact.item8"
            defaultMessage={"contact success"}
            values={{ br: <br /> }}
          />
        </Typography>

        <Typography
          variant="span"
          fontSize={"15px"}
          fontFamily= "Open Sans, sans serif"
          fontWeight={400}
          color={"#fff"}
          lineHeight={1.3}
          letterSpacing={1}
          textAlign={"center"}
        >
          <FormattedMessage
            id="contact.item9"
            defaultMessage={"contact successMessage"}
            values={{ br: <br /> }}
          />
        </Typography>
      </Box>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail) {
      SendEmail(contactForm.nombre, contactForm.last_name,contactForm.email, contactForm.mensaje)
      //enviar a api rest
      // const res = await axios.post('https://us-central1-firehawk-web.cloudfunctions.net/new_mail_webpage', contactForm)
      // if (res.status === 200) {
      setSendedMessage(true);
      // } else {
      //     console.log(res.data)
      //     alert('error')
      // }
    } else {
      alert("Correo Electrónico no válido");
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      const email = e.target.value;
      if (email.includes("@") && email.includes(".")) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    }
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#06293F",
        paddingTop: "20px",
      }}
    >
      <Box sx={{ padding: {xs:"20px 60px", md:"40px 210px"} }}>
        
        <Grid container spacing={2}>
          <Grid
          ref={refBox}
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize:  `clamp(30px,${anchoViewport*0.026455026}px,40px)`,
            fontFamily: "Source Sans Pro, sans serif",
            lineHeight: "1.2",
          }}
        >
          <FormattedMessage id="contact.item1" />
        </Typography>
            </Box>
            <Box>
              <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontFamily: "Open Sans, sans serif",
              }}
            >
              contact@everseek.io
            </Typography>
            <Box sx={{ display: "flex", my: "30px" }}>
              {/* <LinkedInIcon
                fontSize="large"
                sx={{ color: "rgb(252,113,40)" }}
              /> */}
              <a href="https://www.linkedin.com/company/everseek" target={"_blank"}>
                <img src="/icons/linkedin.png" alt="linkedin" style={{width:'30px'}} />
              </a>
              {/* <img src="/icons/twitter.png" alt="linkedin" style={{width:'30px'}}/> */}
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontFamily: "Open Sans, sans serif",
                width: "70%",
                marginBottom: "20px",
              }}
            >
              <FormattedMessage id="contact.item2" />
            </Typography>
            </Box>
            

          </Grid>
          <Grid item xs={7}>
            {sendedMessage
                            ? <SendedMessage />
                            : 
            <form onSubmit={handleSubmit}>
              <Stack gap={1}>
                <Box sx={{ display: "flex", marginBottom: "10px" }}>
                  <TextField
                    fullWidth
                    name="nombre"
                    type="text"
                    variant="filled"
                    onChange={handleInputChange}
                    label={
                      <FormattedMessage
                        id="contact.item3"
                        defaultMessage={"name"}
                      />
                    }
                    InputProps={{
                      disableUnderline: true, // Deshabilita la línea debajo del TextField
                      sx: {
                        backgroundColor: "#fff !important",
                        borderRadius: "10px",
                        ":focus-visible": {
                          outline: "none",
                        },
                        ":hover": { backgroundColor: "#fff !important" },
                      "&:not(.Mui-focused)": {
                        backgroundColor: "#fff !important",
                      },
                      },
                    }}
                    sx={{
                      "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input":
                        { backgroundColor: "#fff" },
                      ".MuiInputBase-input.MuiFilledInput-input": {
                        fontFamily: "Open Sans, sans serif !important",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                      },
                      ".MuiInputLabel-root": { color: "#9a9a9b", fontFamily: "Open Sans, sans serif !important" },
                      marginRight: "5px",
                      color: "#fff !important",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff !important",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                      },
                    }}
                    required
                  />
                  <TextField
                    fullWidth
                    name="last_name"
                    type="text"
                    variant="filled"
                    onChange={handleInputChange}
                    label={
                      <FormattedMessage
                        id="contact.item4"
                        defaultMessage={"last name"}
                      />
                    }
                    InputProps={{
                      disableUnderline: true, // Deshabilita la línea debajo del TextField
                      sx: {
                        backgroundColor: "#fff !important",
                        borderRadius: "10px",
                        ":focus-visible": {
                          outline: "none",
                        },
                        ":hover": { backgroundColor: "#fff !important" },
                      "&:not(.Mui-focused)": {
                        backgroundColor: "#fff !important",
                      },
                      },
                    }}
                    sx={{
                      "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input":
                        { backgroundColor: "#fff" },
                      ".MuiInputBase-input-MuiFilledInput-input": {
                        fontFamily: "Open Sans, sans serif !important",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                      },
                      ".MuiInputLabel-root": { color: "#9a9a9b", fontFamily: "Open Sans, sans serif !important" },
                      marginRight: "5px",
                      color: "#fff !important",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff !important",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                      },
                    }}
                    required
                  />
                </Box>

                <TextField
                  name="email"
                  type="text"
                  variant="filled"
                  onError={() => (isValidEmail ? false : true)}
                  helperText={isValidEmail ? "" : "Correo no valido"}
                  onChange={handleInputChange}
                  label={
                    <FormattedMessage
                      id="contact.item7"
                      defaultMessage={"email"}
                    />
                  }
                  InputProps={{
                    disableUnderline: true, // Deshabilita la línea debajo del TextField
                    sx: {
                      backgroundColor: "#fff !important",
                      borderRadius: "10px",
                      ":focus-visible": {
                        outline: "none",
                      },
                      ":hover": { backgroundColor: "#fff !important" },
                      "&:not(.Mui-focused)": {
                        backgroundColor: "#fff !important",
                      },
                    },
                  }}
                  sx={{
                    marginBottom:'10px',
                    "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input":
                      { backgroundColor: "#fff" },
                    ".MuiInputBase-input-MuiFilledInput-input": {
                      fontFamily: "Open Sans, sans serif !important",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    },
                    ".MuiInputLabel-root": { color: "#9a9a9b", fontFamily: "Open Sans, sans serif !important" },
                    marginRight: "5px",
                    color: "#fff !important",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff !important",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    }, ".MuiFormHelperText-root":{color:'#fff !important'}
                  }}
                  required
                />
                <TextField
                  name="mensaje"
                  type="text"
                  variant="filled"
                  minRows={5}
                  maxRows={7}
                  onChange={handleInputChange}
                  label={
                    <FormattedMessage
                      id="contact.item5"
                      defaultMessage={"message"}
                    />
                  }
                  multiline
                  InputProps={{
                    disableUnderline: true, // Deshabilita la línea debajo del TextField
                    sx: {
                      backgroundColor: "#fff !important",
                      borderRadius: "10px",
                      ":focus-visible": {
                        outline: "none",
                      },
                      ":hover": { backgroundColor: "#fff !important" },
                      "&:not(.Mui-focused)": {
                        backgroundColor: "#fff !important",
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#06293F", 
                    }
                  }}
                  sx={{
                    marginBottom:'10px',
                    "label[data-shrink=false]+.MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input":
                      { backgroundColor: "#fff" },
                    ".MuiInputBase-input.MuiFilledInput-input": {
                      fontFamily: "Open Sans, sans serif !important",
                      backgroundColor: "#fff !important",
                      borderRadius: "10px",
                    },
                      ".MuiInputLabel-root": { color: "#9a9a9b", fontFamily: "Open Sans, sans serif !important" },
                    marginRight: "5px",
                    color: "#fff !important",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff !important",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    },
                  }}
                  required
                />
              </Stack>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#fff",
                    width: "160px",
                    color: "#06293F",
                    fontWeight: 600,
                    fontFamily: "Source Sans Pro, sans-serif",
                    textTransform: "initial",
                    borderRadius: "20px",
                    padding: "2px 20px",
                    marginTop: "12px",
                    fontSize: "14px",
                    letterSpacing: 1,
                    ":hover": {
                        backgroundColor: "#fff",
                        color: "#06293F",
                    }
                  }}
                  type={"Submit"}
                >
                  <FormattedMessage
                    id="contact.item6"
                    defaultMessage={"submit"}
                  />{" "}
                </Button>
              </Box>
            </form>
            }
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "#fff", my: "70px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "-20px",
          }}
        >
          <img
            src="/assets/Everseek-blanco.png"
            alt="logo"
            style={{ width: "230px" }}
          />
          <Typography sx={{ color: "#fff", fontFamily: "Open Sans" }}>
            EVERSEEK.IO | Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
