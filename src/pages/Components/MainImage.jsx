import {React, useRef, useEffect, useState} from "react";
import { Box, Typography, Button } from "@mui/material";
import { FormattedMessage } from "react-intl";

/**
 * Componente que contiene la imagen principal
 * @returns
 */
export default function MainImage({service, anchoViewport, src}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoHeight, setVideoHeight] = useState(900);
  const imageRef = useRef();

  useEffect(() => {
    // const handleImageLoad = () => {
      const height = imageRef?.current?.offsetHeight;
      setVideoHeight(height);
    // };
  
    // if (typeof window !== 'undefined' && imageRef.current) {
    //   imageRef.current.addEventListener('load', handleImageLoad);
    // }
  
    // return () => {
    //   if (typeof window !== 'undefined' && imageRef.current) {
    //     imageRef.current.removeEventListener('load', handleImageLoad);
    //   }
    // };
  }, []);

  return (
    <Box sx={{ width: "100%", height: {xs:videoHeight + 70,md:videoHeight} }}>
      {/* <video autoPlay loop muted ref={videoRef} style={{ width: "100%", position: "absolute", zIndex: "-1", top:55 }}>
        <source src="/assets/Imagen-principal.mp4" type="video/mp4" />
      </video> */}
      <img
        ref={imageRef}
        src={src}
        alt="img-principal"
        style={{ width: "100%", position: "absolute", zIndex: "-1", top:55 }}
      />
      <Box sx={{ paddingLeft: anchoViewport*0.0066137566, paddingTop: {xs:(anchoViewport*0.013227513)+5, md:anchoViewport*0.013227513} }}>
        <Typography
          sx={{
            fontFamily: "Source Sans Pro, sans-serif",
            fontWeight: 600,
            fontSize:`clamp(22px,${anchoViewport*0.03306878306878307}px,50px)`,
            color: "#fff",
            lineHeight: "1.2",
          }}
        >
          <FormattedMessage id="main.item0" defaultMessage="title"  values={{ br: <br />} } />
        </Typography>
        {/* <Box sx={{width:'130px', border: "1px solid #FC7128",display:'flex', justifyContent:'center', borderRadius: "25px",marginTop:'10px'}}>
          {" "}
          <Button
          onClick={service}
            sx={{
                ":hover":{background: "rgb(255, 255, 255, 0.7)",            },
              color: "#FC7128",
              textTransform: "initial",
              fontFamily: "Source Sans Pro, sans-serif",
              padding: "0px 10px",
              opacity: "1",
              fontWeight: 600,
              background: "rgb(255, 255, 255, 0.7)",
              width:'100%', 
              borderRadius: "25px"
            }}
          >
            <FormattedMessage id="main.item1" defaultMessage="Learn more" />
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
}
