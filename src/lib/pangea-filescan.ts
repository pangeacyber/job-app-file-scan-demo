/* eslint-disable no-console */

import { PangeaConfig, FileScanService, PangeaErrors } from "pangea-node-sdk";


const domain = process.env.PANGEA_DOMAIN;
const token = process.env.PANGEA_TOKEN;

const scanFile = async (filepath: string) => {
    // To work in sync it's need to set up queuedRetryEnabled to true and set up a proper timeout
    // If timeout it's so little service won't end up and will return an AcceptedRequestException anyway
    const config = new PangeaConfig({
        domain: domain,
        queuedRetryEnabled: true,
        pollResultTimeoutMs: 60 * 1000,
    });
    const client = new FileScanService(String(token), config);

    console.log("Checking file...");

    try {
        const request = { verbose: true, raw: true, provider: "reversinglabs" };
        const response = await client.fileScan(request, filepath);
        console.log("Result:", response.result);
        return {data: response.result.data};
    } catch (e) {
        if (e instanceof PangeaErrors.APIError) {
            console.log(e.toString());
            return {"error": e.toString()};
        } else {
            console.log("Error: ", e);
            return {"error": e};
        }
    }
}

export default scanFile;