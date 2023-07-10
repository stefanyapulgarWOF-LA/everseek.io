import { Box } from "@mui/system"
// import "../index.css"

export default function Map() {

    return (
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', marginBottom:'80px'}} >
            <Box sx={{width:{xs:"100%",md:'75%'}}}>
                <img  src="/assets/Mapa.svg" style={{width:'100%'}}/>
            </Box>
        </Box>
    )
}