import React from "react";
import {
  Box,
  Typography,
  Step,
  Stepper,
  StepButton,
  StepContent,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import CircleIcon from '@mui/icons-material/Circle';

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
const services = [
  {
    title: "services.item2",
    description: "services.item6",
    img: "/assets/Imagen-principal.png",
  },
  {
    title: "services.item3",
    description: "services.item7",
  },
  {
    title: "services.item4",
    description: "services.item8",
  },
  {
    title: "services.item5",
    description: "services.item9",
  },
];
export default function Services({anchoViewport}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ margin: "50px 230px"}}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
        {/* <img
          src="/assets/Forma E.png"
          alt="viñeta"
          style={{ width: "50px", marginRight: "20px" }}
        /> */}
        <Typography
          sx={{
            fontFamily: "Source Sans Pro, sans serif",
            color: "#0060a6",
            fontWeight: 600,
            fontSize:  `clamp(30px,${anchoViewport*0.026455026}px,40px)`,
            marginRight: "13px",
            marginLeft: "-6px",
          }}
        >
            <FormattedMessage id='services.item0' defaultMessage='elev' />
        </Typography>
        <Typography
          sx={{
            fontFamily: "Source Sans Pro, sans serif",
            color: "#FC7128",
            fontWeight: 600,
            fontSize:  `clamp(30px,${anchoViewport*0.026455026}px,40px)`,
          }}
        >
            <FormattedMessage id='services.item1' defaultMessage='services' />
        </Typography>
      </Box>
      {/* <Box>
        <Typography sx={{fontFamily: "Source Sans Pro, sans serif",color: "#FC7128",}}>
            <FormattedMessage id='services.item10' defaultMessage='description' />
        </Typography>
      </Box> */}
      <Box sx={{ width: "100%", marginLeft: "12px", backgroundColor:'' }}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
          sx={{
            ".MuiStepConnector-line": {
              borderColor: "#0060a6 !important", height:"75px !important", position:'absolute !important', marginTop:'-20px !important'
            },
            ".MuiStepContent-root": {
              borderLeft: " 1px solid #0060a6 !important", marginTop: activeStep === 0?"-20px !important":null
            },
            ".MuiStepLabel-iconContainer": {width:'25px'}
          }}
        >
          {services.map((label, index) => (
            <Step key={index} completed={completed[index]}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                TouchRippleProps={{
                    classes: {
                      rippleVisible: "MuiTouchRipple-root-visible",
                      child: "MuiTouchRipple-child",
                    },
                  }}
                icon={<CircleIcon sx={{color:"#F3632E", position: "relative", top: "2px", width:'100%', display:'flex', justifyContent:'center' }}/>}
                sx={{"&:focus": {
                    outline: "none !important",
                    backgroundColor: "transparent !important",
                  },
                  "&.Mui-active": {
                    backgroundColor: "transparent !important",
                  },
                  ".MuiTouchRipple-root-visible": {
                    backgroundColor: "transparent !important",
                    opacity: "0 !important"
                  },
                  ".MuiTouchRipple-child": {
                    backgroundColor: "transparent !important",
                    display: "none !important"
                  },
                  ".MuiSvgIcon-root.MuiStepIcon-root.Mui-active": {
                    color: "transparent !important",
                    backgroundColor: "transparent !important",
                  },
                  ".MuiSvgIcon-root.MuiStepIcon-root": {
                    color: "transparent !important",
                    backgroundColor: "transparent !important",

                  },
                  ".MuiSvgIcon-root": {height:"0.8rem"}
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Source Sans Pro, sans serif",
                    color: "#0060a6",
                    fontWeight: 600,
                    fontSize: "25px",
                    marginLeft:'20px'
                  }}
                >
                  <FormattedMessage
                    key={label}
                    id={label.title}
                    defaultMessage={"color"}
                  />
                </Typography>
              </StepButton>
              {activeStep === index ? (
                <>
                  <StepContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                       <Typography
                        sx={{
                          mt: 2,
                          mb: 1,
                          py: 1,
                          width: "550px",
                          fontFamily: "Open Sans, sans serif",
                          color: "#05293f",
                          fontSize: "17px",
                          marginLeft:'20px'

                        }}
                      >
                        <FormattedMessage
                          key={label}
                          id={label.description}
                          defaultMessage={"color"}
                        />
                      </Typography> 
                      </Box>
                      
                      <Box sx={{display:'flex', justifyContent:'center'}}>
                       <video
                        autoPlay
                        // loop
                        muted
                        src={`/assets/Iconos 0${index + 1}.mp4`}
                        alt=""
                        style={{ width: "95%", maxHeight:'130px' }}
                      />
                      <source
                        src={`/assets/Iconos 0${index +1}.mp4`}
                        type="video/mp4"
                      /> 
                      </Box>
                      
                    </Box>
                  </StepContent>
                </>
              ) : null}
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
}
