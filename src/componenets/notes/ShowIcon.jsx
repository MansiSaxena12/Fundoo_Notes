import { Box } from '@mui/material'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconButton from '@mui/material/IconButton';
import PaintPallette from './PaintPallette'
import {Popover} from '@mui/material';
import React, { useState } from 'react'

export default function ShowIcon({ setColor }) {
  const[paint, setpaint]=useState(null)
  const handleOpen=(event)=>{
    setpaint(event.currentTarget)
  }
  const handleClose=()=>{
    setpaint(null)
  }
  const openPaiint=Boolean(paint);
  return (
    <Box>
        <div>
            <IconButton onClick={handleOpen}>
            <ColorLensOutlinedIcon/>
            </IconButton>
            <Popover open={openPaiint}
            anchorEl={paint}
            onClose={handleClose}
            sx={{mt:4.5,ml:2.2}}
            >
              <PaintPallette setColor={(color)=>{
                setColor(color);
                // handleClose()
              }}/>
            </Popover>

            {/* Alert Icon */}
            <IconButton>
            <AddAlertOutlinedIcon/>
            </IconButton>
            {/* Colab icon */}
<IconButton>
            <PersonAddAltIcon/>
            </IconButton>
            {/* Img Icon */}
<IconButton>
            <ImageOutlinedIcon/>
            </IconButton>
<IconButton>
            <ArchiveOutlinedIcon/>
            </IconButton>
            <IconButton>
            <MoreVertOutlinedIcon/>
            </IconButton>
        </div>
    </Box>
  )
}
