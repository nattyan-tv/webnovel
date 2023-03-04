const sleep = ms => new Promise(res => setTimeout(res, ms))

class WebNovel {
    constructor(url) {
        this.storydata = null;
        fetch(url, {
            method: "GET",
            mode: "no-cors",
            credentials: "include"
        })
        .then(response => {
            response.json()
            .then(data => {
                if (data === null) {
                    throw new Error("Failed to load story file. (data is null)");
                }
                if (url !== data.url) {
                    throw new Error("Security Exception: URL is not same.");
                }
                this.storydata = data;
                this.page = 0;
                this.window = this.storydata.option.window;
            })
        })
        .catch(error => {
            throw new Error("Failed to load story file.");
        });
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
        this.maincontent = document.getElementById("wn-maincontent");
        this.maincontent.style.display = "block";
        this.elements = {
            window: document.getElementById("wn-story-window"),
            who: document.getElementById("wn-story-who"),
            message: document.getElementById("wn-story-message")
        }
        this.elements.window.src = this.window;
        this.elements.message.onclick = this.next.bind(this);
        this.next()
    }

    async write(text) {
        for (const char of text) {
            this.elements.message.children[0].innerHTML += char;
            await sleep(0.2);
        }
        this.elements.message.onclick = this.next.bind(this);
    }

    resetMessage() {
        this.elements.message.children[0].innerHTML = "";
        this.elements.who.children[0].innerHTML = "";
        this.elements.message.onclick = undefined;
    }

    next() {
        const story = this.storydata.story[this.page];
        const is_message = Array.isArray(story);
        if (is_message) {
            this.resetMessage();
            if (story.length === 1) {
                this.elements.who.children[0].innerHTML = "";
                this.write(story[0]);
            }
            else if (story.length === 2) {
                this.elements.who.children[0].innerHTML = story[0];
                this.write(story[1]);
            }
        }
        this.page++;
    }
}
