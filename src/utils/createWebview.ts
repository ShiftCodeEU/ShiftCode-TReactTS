const OpenWebviewByIP = async (basePath: string) => {
    // @ts-ignore-next-line

    let WebviewWindow = await import("@tauri-apps/api/window").then((mod) => {
        return mod.WebviewWindow;
    });
    const webview = new WebviewWindow(
        String(Math.round(parseInt(basePath.trim().replaceAll(".", "")))),
        {
            title: `iungo - ${basePath}`,
            url: `http://${basePath}`,
        },
    );
    // since the webview window is created asynchronously,
    // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
    webview.once("tauri://created", function () {
        // webview window successfully created
    });
    webview.once("tauri://error", function (e) {
        // an error occurred during webview window creation
        console.error(e);
    });
};
export default OpenWebviewByIP;
