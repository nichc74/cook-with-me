import { Box, Tabs, Tab, CustomTabPanel, Typography } from "@mui/material";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Presets = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function CustomTabPanel(props: TabPanelProps) {
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


    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
  
      
    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Metrics" {...a11yProps(0)} />
                    <Tab label="Ingredients" {...a11yProps(1)} />
                    <Tab label="Categories" {...a11yProps(2)} />
                    <Tab label="Cusines" {...a11yProps(3)} />
                </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Metrics
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Ingredients
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Categories
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Cusines
                </CustomTabPanel>
        </div>
    )
}

export default Presets;
