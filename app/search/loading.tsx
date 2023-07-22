"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

const Loading = () => {
    return ( 
        <Box className="h-full flex items-center justify-center">
            <BounceLoader color="#22d55e" size={48}/>
        </Box>
     );
}
 
export default Loading;