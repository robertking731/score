import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs({ tabData, borderShow, tabWidth }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 'auto' }}>
      <Box>
        <Tabs
          indicatorColor={(borderShow == false || !borderShow) ? '' : "primary"}
          sx={{
            "& .Mui-selected": {
              backgroundColor: !borderShow && "#0D1B28"
            },
            "& .MuiTab-root": {
              minHeight:"61px"
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">

          {tabData.map((item, index) =>
            <Tab key={index} icon={item.icon} iconPosition="start" label={item.text}></Tab>)}
        </Tabs>
      </Box>
    </Box>
  );
}