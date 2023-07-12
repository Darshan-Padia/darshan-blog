// adding goolgle adsense to the page
// https://www.npmjs.com/package/react-adsense

import React from "react";
import Adsense from "@eisberg-labs/next-google-adsense"

export const AdSection = () => {
    return (
        // adding ads di
        <div>
            {/* <Adsense client_id={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} /> */}
            <Adsense client_id={NEXT_PUBLIC_GOOGLE_ADSENSE} />

        </div>
    );
};
