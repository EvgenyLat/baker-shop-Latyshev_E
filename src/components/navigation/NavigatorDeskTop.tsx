import type {RouteType} from "../../utils/shop-types.ts";
import {type FC, useEffect, useState} from "react";
import * as React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

type Props = {
    items: RouteType[],
    sub?: string
}
const NavigatorDeskTop: FC<Props> = ({items}) => {
    const [value, setValue] = useState(0);
    const {pathname} = useLocation();
    console.log(pathname)
    useEffect(() => {
    }, [pathname]);

    const handleOnChange =
        (_e: React.SyntheticEvent, newValue: number) => {
            setValue(newValue)
        }
    return (
        <Box sx={{mt: '50px'}}>
                        {
                            items.map(item =>
                                <Tab key={item.path} component={Link} to={item.path} label={item.title}/>
                            )
                        }
                    </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDeskTop;