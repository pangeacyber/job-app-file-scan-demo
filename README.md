[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/pangeacyber/job-app-file-scan-demo)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/pangeacyber/job-app-file-scan-demo?file=README.md)

# Job Application File Scan Demo

This is a simple job application that scans resumes before upload. The app uses Pangea's file scan APIs to prevent malicious files from being uploaded. The app utilizes shows how you could utilize file intel as well as deep file scan to be able to effectively scan files before they get uploaded to a storage server.

![App demo](./job-file-scan-demo.gif)

## Installation and Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a free account on [Pangea](https://pangea.cloud/services/file-scan/?utm_source=github&utm_medium=job-app-file-scan-demo)
4. Enable the [file scan](https://console.pangea.cloud/service/file-scan/?utm_source=github&utm_medium=job-app-file-scan-demo) and [file intel](https://console.pangea.cloud/service/file-scan/?utm_source=github&utm_medium=job-app-file-scan-demo) by extending the same Pangea token
5. Rename the `.env.example` file to `.env.local` and replace the `PANGEA_TOKEN` and `PANGEA_DOMAIN` from the Pangea console
6. Start the nextJS app with `npm run dev`

## Usage

1. Navigate to the app in your browser
2. Fill out the job application form
3. Upload your resume
4. Play around with the toggle to try file intel vs file hashes
5. The app will scan your resume for malicious files before allowing you to submit your application

## Watch it in action

To watch this demo in action, head over to the [webinar recording](https://www.reversinglabs.com/webinars/exposing-dark-side-of-code-thankyou?utm_source=github&utm_medium=utm_medium=job-app-file-scan-demo&ref=pangea) held by [Reversing Labs](https://www.reversinglabs.com/?ref=pangea&utm_source=github&utm_medium=job-app-file-scan-demo) and [Pangea](https://pangea.cloud/?utm_source=github&utm_medium=job-app-file-scan-demo). Jump to the timestamp `36:00`.

## Dummy Malware Samples
For dummy test malware samples to play with, download the `eicar.txt` file from [EICar's webiste](https://eicar.org/download-anti-malware-testfile?ref=pangea.cloud), or you could also generate malicious PDFs using [open-source repo jonaslejon/malicious-pdf](https://github.com/jonaslejon/malicious-pdf).

## Contributing

Contributions are welcome! Please submit a pull request with any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
