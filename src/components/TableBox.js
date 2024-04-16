import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, CardHeader, Checkbox, FormControlLabel, FormGroup, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material';
import { blue, red, yellow } from '@mui/material/colors';
import { ArrowDownward, ArrowForward, ArrowLeft, CompareArrows, CurrencyRupee, Download, FiberManualRecord } from '@mui/icons-material';


function TableBox() {

  const data={
      id:"1",
      imgUrl:"",
      name:"IIT Madras - India Institute of Technology-[IITM],Chennai",
      address:'Channai, Tamil Nadu',
      Approval:'AICTE Approved',
      course:"B.Tech Computer Science Engineering",
      cutOff:56,
      content:"this is very nic schoole",
      fees: "2,09,550",
      Placement:{
        average:'21,48,000',
        highest:"1,98,00,000"
      },
      reviewInfo:{
        rating:'8.6',
        based:'Based 289 user Reviews',
        best:"Best In Social Life"
      },
      ranking:{
        rank:'3ed/131 in india',
        year:'2023',
        media:{
           
        }
      }

  }

  return (
    <>
      <Stack >
      <TableContainer>
      <Table>
        <TableHead style={{ backgroundColor: 'darkcyan' }} >
          <TableRow >
            <TableCell style={{ border: '1px solid black' ,color:'white',fontWeight:"550", fontSize:"16px"}}>CD Rank</TableCell>
            <TableCell style={{ border: '1px solid black' ,color:'white',fontWeight:"550" ,fontSize:"16px"}}>Colleges</TableCell>
            <TableCell style={{ border: '1px solid black' ,color:'white',fontWeight:"550" ,fontSize:"16px"}}>Course Fees</TableCell>
            <TableCell style={{ border: '1px solid black' ,color:'white',fontWeight:"550" ,fontSize:"16px"}}>Placement</TableCell>
            <TableCell style={{ border: '1px solid black' ,color:'white',fontWeight:"550" ,fontSize:"16px"}}>User Reviews</TableCell>
            <TableCell style={{ border: '1px solid black' ,color:'white',fontWeight:"550" ,fontSize:"16px"}}>Ranking  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ border: '1px solid black' }}>{data.id}</TableCell>
            <TableCell style={{ border: '1px solid black',padding:0 }}>
              <Stack>


            <CardHeader
        avatar={
          <Avatar  alt='nic' src="/static/images/avatar/1.jpg" />
        }
        title={data.name}
        subheader={`${data.address} | ${data.Approval}`}
        titleTypographyProps={{color:blue[700 ]}}
      />
    <Stack width='70%' pl={'3rem'}>
    <Accordion
     style={{minWidth:'20rem'}}
    >
        <AccordionSummary
          expandIcon={<ArrowDownward />}
          aria-controls="panel1-content"
          id="panel1-header"
         style={{background:yellow[100 ]}}
         >
          <Stack >
          <Typography variant='subtitle2' sx={{color:yellow[800]}}>{data.course}</Typography>
          <Typography variant='subtitle2'> JEE-Advanced 2023 CutOff: {data.cutOff}</Typography>

          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data.content  }
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Stack>  
  <Stack direction={'row'} justifyContent={'space-between'}>
  <Button startIcon={<ArrowForward/>} sx={{fontSize:'13px', color:yellow[800]}}>Apply Now</Button>
  <Button startIcon={<Download/>} sx={{fontSize:'12px' ,color:yellow[900]}}>Download Brochure</Button>
  <FormGroup >

  <FormControlLabel control={<Checkbox />} label="Label"  />
  </FormGroup>
  </Stack>

              </Stack>
   
            </TableCell>
            <TableCell style={{ border: '1px solid black',padding:0 }}>
               <Stack marginTop='-3.5rem' p={'2px'}>
                  <Typography variant='subtitle1' fontSize={'13px'} sx={{ color:yellow[800]  }}><CurrencyRupee fontSize='10px'/>{data.fees}</Typography>
                  <Typography variant='subtile2'  fontSize={'13px'}>BE/B.Tech</Typography>
                  <Typography variant='subtitle2' fontSize={'13px'}>-1st Year Fees</Typography>
                  <Button startIcon={<CompareArrows/>} sx={{fontSize:'13px', color:yellow[800]  }}>Compare Fees</Button>
               </Stack>

            </TableCell>
            <TableCell style={{ border: '1px solid black',padding:0 }}>
               <Stack marginTop='-3.5rem' p={'2px'}>
                  <Typography variant='subtitle1' fontSize={'13px'} sx={{ color:yellow[800]  }}><CurrencyRupee fontSize='8px'/>{data.Placement.average}</Typography>
                  <Typography variant='subtile2'  fontSize={'13px'}>Average Package </Typography>
                  <Typography variant='subtitle1' fontSize={'13px'} sx={{ color:yellow[800]  }}><CurrencyRupee fontSize='8px'/>{data.Placement.highest}</Typography>
                  <Typography variant='subtitle2' fontSize={'13px'}>Highest Package </Typography>
                  {/* <Button startIcon={<CompareArrows/>} sx={{fontSize:'13px', color:yellow[800]  }}>Compare Fees</Button> */}
               </Stack>

            </TableCell>
            <TableCell style={{ border: '1px solid black',padding:0 }}>
               <Stack marginTop='-3.5rem' p={'2px'}>
                  <Typography variant='subtitle1' fontSize={'13px'} sx={{ color:yellow[800]  }}><FiberManualRecord/> <Typography variant='h6' component={'span'}>{data.reviewInfo.rating}/10</Typography></Typography>
                  <Typography variant='subtile2'  fontSize={'13px'}>{data.reviewInfo.based}</Typography>
                  <Typography variant='subtitle2' fontSize={'13px'}>  </Typography>
                  <Button startIcon={<CompareArrows/>} sx={{fontSize:'13px', color:yellow[800]  }}>Compare Fees</Button>
               </Stack>

            </TableCell>
            <TableCell style={{ border: '1px solid black',padding:0 }}>
               <Stack marginTop='-3.5rem' p={'2px'}>
                  <Typography variant='subtitle1' sx={{ color:yellow[800]  }}><CurrencyRupee fontSize='10px'/>{data.fees}</Typography>
                  <Typography variant='subtile2' >BE/B.Tech</Typography>
                  <Typography variant='subtitle2'>-1st Year Fees</Typography>
                  <Button startIcon={<CompareArrows/>} sx={{fontSize:'13px', color:yellow[800]  }}>Compare Fees</Button>
               </Stack>

            </TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
      </Stack>
    </>
  )
}

export default TableBox;