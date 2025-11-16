<p align="left">
  <img src="https://scanbot.io/wp-content/uploads/2025/04/ScanbotSDKLogo_forReadMes.png" width="15%" />
</p>

# Scanbot JavaScript Barcode Scanner and Document Scanner SDK for the web

## Table of contents

* [About the Scanbot Web SDK](#about-the-scanbot-web-sdk)
* [How to use the SDK](#how-to-use-the-sdk)
    * [Requirements](#requirements)
    * [Install steps](#install-steps)
    * [SDK initialization](#sdk-initialization)
    * [Implementing the scanner](#implementing-the-scanner)
        * [Barcode Scanner UI](#barcode-scanner-ui)
        * [Document Scanner UI](#document-scanner-ui)
        * [Data Capture Module UIs](#data-capture-module-uis)
* [Overview of the Scanbot SDK](#overview-of-the-scanbot-sdk)
    * [Barcode Scanner SDK](#barcode-scanner-sdk)
        * [Out-of-the-box barcode scanning workflows](#out-of-the-box-barcode-scanning-workflows)
        * [Scanning barcodes from an image](#scanning-barcodes-from-an-image)
        * [Supported barcode formats](#supported-barcode-formats)
        * [Data parsers](#data-parsers)
    * [Document Scanner SDK](#document-scanner-sdk)
    * [Data Capture Modules](#data-capture-modules)
* [Additional information](#additional-information)
    * [Trial license](#trial-license)
    * [Free developer support](#free-developer-support)
    * [Guides and tutorials](#guides-and-tutorials)

## About the Scanbot Web SDK

The Scanbot SDK is a set of high-level APIs that lets you integrate barcode and document scanning, as well as data extraction functionalities, into your website. It runs in all common web browsers, such as Chrome, Safari, Firefox, or Edge, and operates entirely on the user's device. No data is transmitted to our or third-party servers.

The SDK can be implemented into your web app with just a few lines of code and comes with Ready-To-Use UI components.

💡 For more details about the Scanbot Web SDK, please visit our [Barcode Scanner](https://docs.scanbot.io/barcode-scanner-sdk/web/introduction/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) or [Document Scanner](https://docs.scanbot.io/document-scanner-sdk/web/introduction/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) documentation, or download our [example app](https://github.com/doo/scanbot-sdk-example-web).

### Changelog

For a detailed list of changes in each version, see the changelog for our [Web Barcode Scanner](https://docs.scanbot.io/barcode-scanner-sdk/web/changelog/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) or [Web Document Scanner](https://docs.scanbot.io/document-scanner-sdk/web/changelog/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) SDK.

## How to use the SDK

### Requirements

Check out our [barcode scanner](https://docs.scanbot.io/barcode-scanner-sdk/web/introduction/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites#requirements) or [document scanner](https://docs.scanbot.io/document-scanner-sdk/web/introduction/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites#requirements) documentation for a full overview of our SDK's requirements and complete installation guide.

### Install steps

Add a reference to Scanbot SDK via CDN link/script. Make sure it's before your main script.

```
<html>
    <head>
        <title>ScanbotSDK Quickstart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div id="document-scanner-container" style="width: 100%; height: 100%;"></div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/scanbot-web-sdk@7.1.0/bundle/ScanbotSDK.ui2.min.js"></script>
    <script src="./main.js"></script>
</html>
```

> **Note**: We strongly recommend AGAINST using jsdelivr for your production environment. Please download the SDK and host it on your server. We only use it for the quickest proof-of-concept implementation.
### SDK initialization

Since most environments still do not allow top-level await, you need to wrap your code in an async function.

```
(async function() {
    const sdk = await ScanbotSDK.initialize({
        licenseKey: "", // Empty string is the default value for trial mode
        enginePath: "https://cdn.jsdelivr.net/npm/scanbot-web-sdk@7.1.0/bundle/bin/complete/"
    });
})();
```

💡 You can test the SDK without a license key for 60 seconds per app session. Need longer testing? Get your [free trial license key](https://scanbot.io/trial/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites).

### Implementing the scanner

With just a few lines of code, you can integrate the barcode scanning or document scanning UI into your application's workflow using the Scanbot Web SDK's ready-to-use UI.

Remember to wrap the scanner creation into the same async block as initialization.

#### Barcode Scanner UI

```
// Configure the scanner as needed
const config = new ScanbotSDK.UI.Config.BarcodeScannerScreenConfiguration();
// Create the scanner with the config object
const result = await ScanbotSDK.UI.createBarcodeScanner(config);
```

#### Document Scanner UI

```
// Configure the scanner as needed
const config = new ScanbotSDK.UI.Config.DocumentScanningFlow();
// Create the scanner with the config object
const result = await ScanbotSDK.UI.createDocumentScanner(config);
```

#### Data Capture Module UIs

To integrate the Scanbot Web SDK's data capture modules, visit our full [documentation](https://docs.scanbot.io/document-scanner-sdk/web/introduction/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites).

## Overview of the Scanbot SDK

### Barcode Scanner SDK

The Scanbot [Barcode Scanner SDK for the web](https://scanbot.io/barcode-scanner-sdk/web-barcode-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) allows you to integrate fast and accurate barcode scanning capabilities into your web apps. On fast devices, barcodes might scan in as little as 0.04 seconds, and scans remain precise even under challenging conditions, including damaged, small, or distant barcodes and low-light environments.

#### Out-of-the-box barcode scanning workflows

The Scanbot Barcode Scanner SDK offers the following scan modes, available out-of-the-box in our ready-to-use UI:

* Single Scanning
* Batch & Multi Scanning
* Find & Pick
* Scan & Count

| ![Single Scanning](https://scanbot.io/wp-content/uploads/2025/05/dev-pages-web-single-scanning.png) | ![Batch Scanning](https://scanbot.io/wp-content/uploads/2025/05/dev-pages-web-batch-scanning.png) | ![Find and Pick](https://scanbot.io/wp-content/uploads/2025/05/dev-pages-web-find-pick.png) |
|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|

#### Scanning barcodes from an image

The Scanbot Web Barcode Scanner SDK also supports still images, enabling you to scan barcodes and QR Codes from JPG and other image files. It supports single-image and multi-image detection and returns a list of the recognized barcodes.

#### Supported barcode formats

The Web Barcode Scanner library supports all common 1D or 2D barcodes and multiple postal symbologies, including:

| Barcode type       | Barcode symbologies   |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1D Barcodes        | [EAN](https://scanbot.io/barcode-scanner-sdk/ean/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [UPC](https://scanbot.io/barcode-scanner-sdk/upc/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [Code 128](https://scanbot.io/barcode-scanner-sdk/code-128/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [GS1-128](https://scanbot.io/barcode-scanner-sdk/gs1-128/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [Code 39](https://scanbot.io/barcode-scanner-sdk/code-39/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [Codabar](https://scanbot.io/barcode-scanner-sdk/codabar/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [ITF](https://scanbot.io/barcode-scanner-sdk/itf-code/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), Code 25, Code 32, Code 93, Code 11, MSI Plessey, Standard 2 of 5, IATA 2 of 5, Databar (RSS), GS1 Composite     |
| 2D Barcodes        | [QR Code](https://scanbot.io/glossary/qr-code/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [Micro QR Code](https://scanbot.io/barcode-scanner-sdk/micro-qr-code/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [Aztec Code](https://scanbot.io/barcode-scanner-sdk/aztec-code/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [PDF417 Code](https://scanbot.io/barcode-scanner-sdk/pdf417/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [Data Matrix Code](https://scanbot.io/barcode-scanner-sdk/data-matrix/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [GiroCode](https://scanbot.io/glossary/giro-code/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [NTIN Code](https://scanbot.io/glossary/gtin/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [PPN](https://scanbot.io/glossary/ppn/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [UDI](https://scanbot.io/glossary/udi/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [Royal Mail Mailmark](https://scanbot.io/barcode-scanner-sdk/royal-mail/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), MaxiCode |
| Postal Symbologies | USPS Intelligent Mail Barcode (IMb), Royal Mail RM4SCC Barcode, Australia Post 4-State Customer Code, Japan Post 4-State Customer Code, KIX     |

💡 Please visit our [docs](https://docs.scanbot.io/barcode-scanner-sdk/web/supported-barcodes/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) for a complete overview of the supported barcode symbologies.

#### Data parsers

The Scanbot Web Barcode Scanner SDK supports a variety of data parsers that extract structured information from 2D barcodes such as QR Codes and Data Matrix. These include parsers for documents such as driving licences (AAMVA), boarding passes, medical certificates, SEPA forms, Swiss QR codes, and vCard business cards.

### Document Scanner SDK

The Scanbot Web Document Scanner SDK offers the following features:

* **User guidance**: Ease of use is crucial for large user bases. Our on-screen user guidance helps even non-tech-savvy users create perfect scans.

* **Automatic capture**: The SDK automatically captures the document when the device is optimally positioned over the document. This reduces the risk of blurry or incomplete document scans compared to manually triggered capture.

* **Automatic cropping**: Our document scanning SDK automatically straightens and crops scanned documents, ensuring high-quality document scan results.

* **Document Quality Analyzer**: This feature automatically rates the quality of the scanned pages from “very poor” to “excellent.” If the quality is below a specified threshold, the SDK prompts the user to rescan.

* **Export formats**: The SDK supports various image formats for exporting and processing documents (JPG, PDF, TIFF, and PNG). This ensures your downstream solutions receive the best format to store, print, or share the digitized document, or to process it further.

| ![User guidance](https://scanbot.io/wp-content/uploads/2025/05/dev-pages-web-user-guidance.png) | ![Automatic capture](https://scanbot.io/wp-content/uploads/2025/05/dev-pages-web-auto-capture.png) | ![Automatic cropping](https://scanbot.io/wp-content/uploads/2025/05/dev-pages-web-auto-cropping.png) |
|-----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|

### Data Capture Modules

The Scanbot SDK Data Capture Modules allow you to extract data from a wide range of documents, including [MRZ codes](https://scanbot.io/data-capture-software/mrz-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) on identity documents, [Checks](https://scanbot.io/data-capture-software/check-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [U.S.](https://scanbot.io/data-capture-software/us-drivers-license-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) and [German driver’s licenses](https://scanbot.io/data-capture-software/german-drivers-license-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [EHICs](https://scanbot.io/data-capture-software/ehic-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), [German ID cards](https://scanbot.io/data-capture-software/id-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), and [German residence permit cards](https://scanbot.io/data-capture-software/residence-permit-scanner/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites), and to integrate [OCR](https://scanbot.io/data-capture-software/ocr-sdk/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) text recognition capabilities.

## Additional information

### Trial license

The Scanbot SDK will run for one minute per session without a license. After that, all functionalities and UI components will stop working. To try Scanbot Web SDK without the one-minute limit, you can request a free, no-strings-attached [7-day trial license](https://scanbot.io/trial/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites).

Our pricing model is simple: Unlimited scanning for a flat annual license fee, full support included. There are no tiers, usage charges, or extra fees. [Contact our team](https://scanbot.io/contact-sales/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) to receive your quote.

### Free developer support

Need help integrating or testing our Web SDK in your project? We offer [free developer support](https://docs.scanbot.io/support/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) via Slack, MS Teams, or email.

As a customer, you also get access to a dedicated support Slack or Microsoft Teams channel to talk directly to your Customer Success Manager and our engineers.

### Guides and tutorials

Do you want to enable your app to scan barcodes or documents? Integrating the Web SDK into your web app takes just a few minutes.

💡 Check out our [developer blog](https://scanbot.io/techblog/?utm_source=npmjs.com&utm_medium=referral&utm_campaign=dev_sites) for a collection of in-depth tutorials, use cases, and best practices.
