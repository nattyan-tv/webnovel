async function main() {
    const wn = new WebNovel("./example.json");
    while(wn.storydata === null) {
        await sleep(0.1);
    }
    wn.start();
}

main();
