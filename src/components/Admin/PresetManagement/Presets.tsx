import { Box, Tabs, Tab } from "@mui/material";
import React from "react";
import PresetList from "./PresetList";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Presets = ({metrics, categories, ingredients, cuisines } : any) => {
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
                    {children}
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
        <div style={{width: '75%', maxWidth: "750px"}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Metrics" {...a11yProps(0)} />
                    <Tab label="Ingredients" {...a11yProps(1)} />
                    <Tab label="Categories" {...a11yProps(2)} />
                    <Tab label="Cusines" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <PresetList presets={metrics}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <PresetList presets={ingredients}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <PresetList presets={categories}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <PresetList presets={cuisines}/>
            </CustomTabPanel>
        </div>
    )
}

export default Presets;
