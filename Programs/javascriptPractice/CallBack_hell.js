function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Hello, world!';
            resolve(data);
        }, 1000);
    });
}

function processData1(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = data.toUpperCase();
            resolve(processedData);
        }, 1000);
    });
}

function processData2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = data + ' - Processed';
            resolve(processedData);
        }, 1000);
    });
}
