import { ReactElement, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import ShoppingCartItem from "./ShoppingCartItem";
import productItems from "@data/product-item";

const ShoppingCartListItem = () : ReactElement => {
    const [count] = useState(5);
    return (
        <Box 
            sx={{
                minHeight: 40,
                width: 400,
                backgroundColor: 'background.paper',
                ml: {sm: 0, xs: 10},
                borderRadius: 2,
                position: 'absolute',
                top: 60,
                right: 10,
            }}
        >
            <Box
                sx = {{p: 2, color: 'text.secondary'}}
            >
                Sản phẩm mới thêm
            </Box>
            {productItems.map((item, i) => i < 5 && <ShoppingCartItem key={i} item={item} />)}
            {/* <Box
                sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2
                }}
            >
                Không có sản phẩm nào
            </Box> */}
            <Stack 
                flexDirection={'row'}
                p={5}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Box
                    sx = {{ fontSize: 14, color: 'text.secondary'}}
                >
                    {count} Sản phẩm trong giỏ hàng
                </Box>
                <Button
                    variant= "contained"
                    sx={{
                        typography: 'body1',
                        textTransform: 'none', 
                    }}
                >
                    Xem giỏ hàng
                </Button>
            </Stack>
        </Box>
    )
}

export default ShoppingCartListItem;