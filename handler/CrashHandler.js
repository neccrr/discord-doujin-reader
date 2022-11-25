// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
    console.error(`[HANDLER - CRASH] Unhandled Rejection: ${err}`.red);
    console.error(promise);
});