/* eslint-disable no-console */

import { PangeaConfig, FileIntelService, PangeaErrors } from "pangea-node-sdk";

const domain = process.env.PANGEA_DOMAIN;
const token = process.env.PANGEA_TOKEN;

const fileIntel = async (fileHash: string) => {
    const config = new PangeaConfig({ domain: domain });
    const fileIntel = new FileIntelService(String(token), config);


    console.log("Checking file...");

    try {
        const response = await fileIntel.hashReputation(
            fileHash,
            'sha256',
            { provider: "reversinglabs", verbose: true, raw: true }
        );
        console.log("Result: ", response.result.data);

        return {"data": {...response.result.data, "hash": fileHash}}
    } catch (e) {
        if (e instanceof PangeaErrors.APIError) {
            console.log("Error", e.summary, e.errors);
            return {"error": e.summary};
        } else {
            console.log("Error: ", e);
            return {"error": e};
        }
    }
}

export default fileIntel;