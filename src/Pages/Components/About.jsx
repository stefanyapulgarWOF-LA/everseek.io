import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";

export default function About({navBarHeight}) {
  const [anchoViewport, setAnchoViewport] = useState()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let anchoViewport = window?.outerWidth;
      setAnchoViewport(anchoViewport)
    }
  }, []);

  return (
    <Box sx={{margin:{xs:"none", md:'140px 220px'}, display:{md:'flex'}, alignItems:'center', marginTop:`${navBarHeight + 10}px`}}>
      <Box sx={{display:'flex', justifyContent:'center', flexDirection:{md:'column'}, alignItems:'center', margin:{md:'50px 100px'}, marginBottom:{xs:'10px'}}}>
        <img src="/assets/icono-06.svg" style={{width:anchoViewport * 0.0520833333}}/>
        <Box sx={{display:'flex', marginLeft:{xs:'10px'}}}>
           <Typography
          sx={{
            fontFamily: "Source Sans Pro, sans serif",
            color: "#0060a6",
            fontWeight: 600,
            fontSize: `clamp(25px,${anchoViewport * 0.026455026}px,40px)`,
            marginRight:'10px'
          }}
        >
          <FormattedMessage id="about.item1" defaultMessage={"About us"} />
        </Typography>
        <Typography
          sx={{
            fontFamily: "Source Sans Pro, sans serif",
            color: "#FC7128",
            fontWeight: 600,
            fontSize: `clamp(25px,${anchoViewport * 0.026455026}px,40px)`,
          }}
        >
          <FormattedMessage id="about.item2" defaultMessage={"About us"} />
        </Typography> 
        </Box>
      </Box>
      <Box sx={{marginBottom:{xs:'10px'}}}>
        <Typography sx={{marginX:{xs:"20px",md:'60px'},textAlign:'justify', color: "#0060a6", fontFamily:"Source Sans Pro, sans serif", fontSize:`clamp(14px,${anchoViewport*0.0119047619}px,20px)`, fontWeight:300}}>
          <FormattedMessage id="about.item3" defaultMessage={"text"}  values={{ br: <br />, b: (chunks) => <strong>{chunks}</strong>}}/>
        </Typography>
      </Box>
    </Box>
  );
}
