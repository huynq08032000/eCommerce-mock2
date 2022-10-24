import { LoadingButton } from "@mui/lab";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastCss } from "../../Components/StyleComponent/StyleComponent";
import { createOrderApi } from "../../config/api";
import { setCart } from "../../redux/UserSlice";
import axiosInstance from "../../ultis/customAxios";
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
    const dispatch = useDispatch()
    const { user, cart } = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState(type[0].value)
    const shipping = 10
    const subTotal = useMemo(() => countSubtotal(cart), [cart])
    const handleCheckOut = () => {
        if (user.contact === null) {
            toast.error('Update contact before checkout', toastCss)
            return
        }
        if (cart.length === 0) {
            toast.error('Cart is not empty', toastCss)
            return
        }
        const itemArr = cart.map(el => {
            return {
                productId: el.id,
                quantity: el.quantity,
                price: el.price,
                total: el.quantity * el.price,
            }
        })
        const values = {
            order: {
                paymentMethod: 'Online',
                address: 'La Khe, Ha Dong, Hanoi',
                contact: user.contact,
                totalPrice: subTotal + shipping,
                userId: user.id
            },
            itemArr: itemArr
        }
        checkout(values)
    }
    const checkout = async (values) => {
        setLoading(true)
        try {
            const res = await axiosInstance.post(createOrderApi, {
                order: values.order,
                itemArr: values.itemArr
            })
            toast.success(res.data.message, toastCss)
            dispatch(setCart([]))
        } catch (error) {
            toast.error(error.response.data.message, toastCss)
        }
        setLoading(false)
    }
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
                            value={paymentMethod}
                            onChange={(e) => {
                                setPaymentMethod(e.target.value)
                            }}
                        >
                            {type.map((el, index) => {
                                return <div className="type-order-child">
                                    <FormControlLabel value={el.value} control={<Radio />} label={el.label} />
                                </div>
                            })}
                        </RadioGroup>
                        <LoadingButton sx={{ backgroundColor: '#FFD333', textTransform: 'none', }} fullWidth loadingPosition="start" onClick={handleCheckOut} loading={loading}><Typography fontSize={24} fontWeight={700} color={'#000000'}>Checkout</Typography></LoadingButton>
                    </FormControl>

                </div>
            </div>
        </>
    )
}

export default CheckOutTotal;