import { Image } from "antd";
import React from "react";

const ShopAppComponent = () => {

    return (
        <>
            <div style={{ fontSize: '40px', display : 'flex', flexDirection : 'column', alignItems : 'center' }}>
                Shop App
                < Image src="https://th.bing.com/th/id/R.6050ce653fd35e10fd58488266e5c54b?rik=sZhxf%2feYNMrB0g&pid=ImgRaw&r=0" preview={false} width={'50%'} style={{ marginTop: 20 }} />
            </div>
        </>
    )
}
export default ShopAppComponent;