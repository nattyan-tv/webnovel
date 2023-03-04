async function main() {
    const wn = new WebNovel("http://127.0.0.1:5500/example.json");
    while(wn.storydata === null) {
        await sleep(0.1);
    }
    wn.start();
}

main();
