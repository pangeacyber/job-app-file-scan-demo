// import scanFile from "@/app/lib/pangea-filescan";
import { writeFile } from "fs/promises";
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import { join } from "path";
import { IncomingForm, Fields, Files, File } from 'formidable';
import { promisify } from 'util';
import scanFile from "@/lib/pangea-filescan";
import crypto from "crypto";
import fileIntel from "@/lib/pangea-fileintel";

const writeFileAsync = promisify(fs.writeFile);

export const config = {
    api: {
      bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.query.type == "scan" || req.query.type == "intel") {
        const form = new IncomingForm();

        if(form) {
            form.parse(req, async (err: any, fields: Fields<string>, files: Files<string>) => {
                if (err) {
                res.status(500).json({ error: 'Error parsing file' });
                return;
                }
                const file: File[] | undefined = files && files.file;
                console.log(fields);

                let rawData = fs.readFileSync((file as File[])[0].filepath)

                const path = join('/', 'tmp', (file as File[])[0].newFilename);
                await writeFile(path, rawData);

                let scanResponse = {};
                if(req.query.type === "scan") {
                    scanResponse = await scanFile(path);
                } else {
                    // Get SHA-256 hash of the file
                    const hashSum = crypto.createHash('sha256');
                    hashSum.update(rawData);
                    // Back to hex
                    const hex = hashSum.digest('hex');

                    scanResponse = await fileIntel(hex);
                }

                if("error" in scanResponse) {
                    return res.status(502).json(scanResponse);
                } else {
                    return res.status(200).json(scanResponse);
                }
            });
        } else {
            return res.status(400).json({error: "Bad Request"})
        }
    } else {
        return res.status(400).json({error: "Bad Request"})
    }

}