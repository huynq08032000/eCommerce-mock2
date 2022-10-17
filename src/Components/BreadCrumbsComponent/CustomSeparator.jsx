import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomSeparator = ({ breadcumsTmp }) => {
    const handleClick = (event) => {
        console.info('You clicked a breadcrumb.');
    }
    const renderBreadcumbs = (breadcumsTmp2) => {
        const arr = [{ label: 'Home', href: '/' }].concat(breadcumsTmp2)
        return arr.map((el, index) => {
            if (el.href !== undefined) {
                return <Link underline="hover" key={index} color="inherit" href={el.href} onClick={handleClick} style={{fontWeight : '700', fontSize : '16px'}}>
                    {el.label}
                </Link>
            } else {
                return <Typography key={index} color="text.primary" style={{fontWeight : '700', fontSize : '16px'}}>
                    {el.label}
                </Typography>
            }
        })
    }

    return (
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {renderBreadcumbs(breadcumsTmp)}
            </Breadcrumbs>
        </Stack>
    );
}

export default CustomSeparator;