class WebNovel {
    constructor(url) {
        let this.storydata = null;
        fetch(url)
        .then(response => {
            const storydata = response.json();
            if (url !== storydata.url) {
                throw new Error("Security Exception: URL is not same.");
            }
            this.storydata = storydata;
        })
        .catch(error => {
            throw new Error("Failed to load story file.");
        });
        let this.page = 0;
        let this.window = this.storydata.option.window;
    }

    getTitle() {
        return this.storydata.title;
    }
    
    getPage() {
        return this.page;
    }
    
    getLength() {
        return this.storydata.story.length;
    }
    
    start() {
        const window = document.getElementById("wn-story-window");
        window.src = this.window;
        const this.who = document.getElementById("wn-story-who");
        const this.message = document.getElementById("wn-story-message");
        this.next()
    }
    
    next() {
        const story = this.storydata.story[this.page];
        const message = Array.isArray(story);
        if (message) {
            if (message.length === 1) {
                this.who.innerHTML = "";
                this.message.innerHTML = story[0];
            }
            else if (message.length === 2) {
                this.who.innerHTML = story[0];
                this.message.innerHTML = story[1];
            }
        }
        this.page++;
    }
}
