import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const AdminCustomSeparator = ({ breadcums }) => {

    const handleClick = (event) => {
        console.info('You clicked a breadcrumb.');
    }

    const renderBreadcumbs = () => {
        const arr = [{ label: 'Dashboard', href: '/admin' }].concat(breadcums)
        return arr.map((el, index) => {
            if (el.href !== undefined) {
                return <Link underline="hover" key={index} color="inherit" href={el.href} onClick={handleClick} style={{ fontWeight: '700', fontSize: '16px' }}>
                    {el.label}
                </Link>
            } else {
                return <Typography key={index} color="text.primary" style={{ fontWeight: '700', fontSize: '16px' }}>
                    {el.label}
                </Typography>
            }
        })
    }

    return (
        <Stack spacing={2}>
            <Breadcrumbs
                aria-label="breadcrumb"
            >
                {renderBreadcumbs()}
            </Breadcrumbs>
        </Stack>
    );
}

export default AdminCustomSeparator;