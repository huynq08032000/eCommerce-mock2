import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { countSubtotal } from "../../ultis/ultis";
import './css/index.scss'
const CheckOutTotal = () => {
    const type = [
        {
            value: 'cashondeliver',
            label: 'Cash on delivery'
        },
        {
            value: 'checkpayments',
            label: 'Check payments'
        },
        {
            value: 'paypal',
            label: 'PayPal'
        },
        {
            value: 'mastercard',
            label: 'Master card'
        }
    ]
    const { user, cart } = useSelector(state => state.user)
    const shipping = 10
    const subTotal = useMemo(() => countSubtotal(cart), [cart])
    return (
        <>
            <div className="checkout-total-container" style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid rgba(90, 90, 90, 0.4)' }}>
                <Typography fontSize={24} fontWeight={700}>Checkout</Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography fontWeight={700} fontSize={16}>Subtotal</Typography>
                    <Typography fontWeight={700} fontSize={16} color={'#5A5A5A'}>${subTotal}</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography fontWeight={700} fontSize={16}>Shipping</Typography>
                    <Typography fontWeight={700} fontSize={16} color={'#5A5A5A'}>${shipping}</Typography>
                </div>
                <div style={{ width: '100%', border: '1px solid #000000', margin: '10px 0px' }}>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography fontWeight={700} fontSize={16}>Total</Typography>
                    <Typography fontWeight={700} fontSize={16} color={'#5A5A5A'}>${subTotal + shipping}</Typography>
                </div>
                <div className="type-order" style={{ padding: '10px' }}>
                    <FormControl fullWidth style={{ padding: '10px' }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            defaultValue={'cashondeliver'}
                        >
                            {type.map((el, index) => {
                                return <div className="type-order-child">
                                    <FormControlLabel value={el.value} control={<Radio />} label={el.label} />
                                </div>
                            })}
                        </RadioGroup>
                        <Button sx={{ backgroundColor: '#FFD333', textTransform: 'none', }} fullWidth><Typography fontSize={24} fontWeight={700} color={'#000000'}>Checkout</Typography></Button>
                    </FormControl>

                </div>
            </div>
        </>
    )
}

export default CheckOutTotal;