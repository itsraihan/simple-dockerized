const connectToDatabase = () => {
    const dummyProcess = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
    return dummyProcess;
};

export default connectToDatabase;
