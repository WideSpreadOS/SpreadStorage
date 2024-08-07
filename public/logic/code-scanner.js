// console.log('hello')

// function onScanSuccess(decodedText, decodedResult) {
//     // handle the scanned code as you like, for example:
//     console.log(`Code matched = ${decodedText}`, decodedResult);


//     const qrData = decodedText

//     console.log(`TEXT: ${qrData}`)

// }

// function onScanFailure(error) {
//     // handle scan failure, usually better to ignore and keep scanning.
//     // for example:
//     // console.warn(`Code scan error = ${error}`);
// }

// let html5QrcodeScanner = new Html5QrcodeScanner(
//     "reader",
//     { fps: 10, qrbox: { width: 250, height: 250 } },
//   /* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);


const
    qrReader = document.getElementById('reader'),
    qrReaderOverflow = document.getElementById('qr-shaded-region'),
    qrResult = document.getElementById('qrResult')

let
    scannedCodes = []







// This method will trigger user permissions
Html5Qrcode.getCameras().then(devices => {
    console.log(devices)
    /**
     * devices would be an array of objects of type:
     * { id: "id", label: "label" }
     */
    if (devices && devices.length) {
        var cameraId = devices[0].id;
        // .. use this to start scanning.
    }


    const html5QrCode = new Html5Qrcode(/* element id */ "reader");

    html5QrCode.start(
        cameraId,
        {
            fps: 10,    // Optional, frame per seconds for qr code scanning
            qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
        },
        (decodedText, decodedResult) => {
            // do something when code is read

            const qrData = decodedText
            qrResult.innerHTML = ``

            // if (scannedCodes.includes(qrData)) {
            //     console.log('DUPLICATE CODE')


            // } else {
            //     if (scannedCodes.length <= 0) {
            //         scannedCodes.push(qrData)
            //         console.log('NO CODES IN ARRAY')
            //     } else {
            //         scannedCodes.push(qrData)

            //     }
            // }

            // scannedCodes.forEach(code => {

            let
                newLink = document.createElement('div'),
                newLinkAnchor = document.createElement('a')

            newLink.classList.add('new-link')
            newLinkAnchor.setAttribute('target', '_blank')
            newLinkAnchor.setAttribute('href', qrData)
            newLinkAnchor.textContent = qrData

            newLink.appendChild(newLinkAnchor)

            qrResult.appendChild(newLink)

            // })

        },
        (errorMessage) => {
            // parse error, ignore it.
        })
        .catch((err) => {
            // Start failed, handle it.
            console.log(`Scanner did not start - Error: ${err}`)
        });


}).catch(err => {
    // handle err
});



const
    qrStartScanBtn = document.querySelector('.qr-scanner-start-button'),
    qrIcon = document.querySelector('.qr-icon'),
    blurOverlay = document.querySelector('.blur-overlay')

qrStartScanBtn.addEventListener('click', e => {
    qrIcon.style.display = 'none'
    blurOverlay.style.display = 'none'
})