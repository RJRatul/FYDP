import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../component/Faq.css';

function createData(name, address, id, cell, salary) {
  return { name, address, id, cell, salary };
}
const rows = [
  createData('Rafiq', 'Dhaka', 1.0, 1833, 4000.0),
  createData('Faruk', 'Chottagram', 1733, 37, 4000.3),
  createData('Jobbar', 'Rajshahi', 1933, 24, 6000.0),
  createData('Alam', 'Khulna', 4.0, 1433, 4000.3),
  createData('Himu', 'Sylhet', 5.0, 1333, 3000.9),
];

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='faq'>


      <h1 className='head'>FAQ</h1>
      <div>
        <p>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '20%', flexShrink: 3 }} className='typo'>
                What is farming?
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} className='typo'>Farming is the act or process of working the ground, planting seeds, and growing edible plants.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='typo'>
                According to the Dictionary definition, “Farming is the act or process of working the ground, planting seeds, and growing edible plants. You can also describe raising animals for milk or meat as farming… Farming is a great way to describe the lifestyle and work of people whose jobs are in the agriculture industry.” The noun “farm,” which derives from the Medieval Latin Firma, originally meant, “A lease on farm land.”
              </Typography>
            </AccordionDetails>
          </Accordion>
        </p>
        <p>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '20%', flexShrink: 3 }} className='typo'>
                Why is agriculture important?
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} className='typo'>griculture is a leading economic source</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='typo'>
                Agriculture plays a crucial role in the economy of developing countries, and provides the main source of food, income, and employment to rural populations. For many countries, agriculture is a leading economic source, with those countries helping to provide some of the US’s food as well.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </p>
        <p>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '20%', flexShrink: 0 }} className='typo'>
                What is soil health?
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} className='typo'>The term “soil health” is used to remind farmers that the soil contains living organisms that help us produce food. </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className='typo'>
                Sometimes referred to as soil quality, soil health is the continued ability of soil to act as an ecosystem for plants, animals, and humans. The term “soil health” is used to remind farmers that the soil contains living organisms that help us produce food.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </p>


      </div>
      <div>
        <h1 className='head'>Labour List</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Cell(+880)</TableCell>
                <TableCell align="right">Salary(BDT)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.cell}</TableCell>
                  <TableCell align="right">{row.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>


    </div>

  )
};
export default Faq
