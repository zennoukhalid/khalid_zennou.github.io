import { AppBar, DialogContent, Tabs,TabPanel, Box, Typography, Tab } from '@material-ui/core';
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import UploadForm from './UploadForm';
import Contact from './Contact';

const NavBar = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      function a11yProps(index) {
        return {
          id: `scrollable-force-tab-${index}`,
          'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
      }
      const [value, setValue] = React.useState(0);
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
      <div className="navbar">
       <DialogContent dividers>
            <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            >
            <Tab label="Galogie"  {...a11yProps(0)} />
            <Tab label="About"  {...a11yProps(1)} />
            <Tab label="Contact"  {...a11yProps(2)} />
            <Tab label="Helps"  {...a11yProps(3)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
             <UploadForm/>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </TabPanel>
        <TabPanel value={value} index={1}>
            second tab
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Contact/>
        </TabPanel>
        <TabPanel value={value} index={3}>
           fourdth tab
        </TabPanel>
        </DialogContent>
      </div>
    )
  }
  
  export default NavBar;

