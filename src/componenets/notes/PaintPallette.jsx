import React from 'react'
import {Box,Paper,InputBase,IconButton,Typography,ClickAwayListener,TextField} from "@mui/material";
export default function PaintPallette({setColor}) {
    const colors=["transparent","#faafa8","#f39f76","#fff8b8","#e2f6d3","#b4ddd3","#d4e4ed","#aeccdc","#d3bfdb","#e9e3d4","#efeff1"]
    
    return (
    <Box sx={{display:'flex', width:"auto", gap:1,p:1}}>
        {colors.map((color, index)=>(
            <Box onClick={()=>setColor(color)} key={index} 
            sx={{
                width:30,
                height:30,
                borderRadius:"50%",
                backgroundColor: color,
                border: "1px solid #ccc",
                cursor: "pointer",
            }}></Box>
        ))}
    </Box>
  )
}
