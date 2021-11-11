import ejs from "ejs";

/**
 * Render ejs strings in configuration
 *
 * @param {Object} config
 * @param {Object} data
 */
export function renderConfig(config, data) {
    const result = {};

    Reflect.ownKeys(config).forEach(key => {
        if (typeof config[key] === "string") {
            try {
                result[key] = ejs.render(config[key], data);
            } catch (error) {
                console.warn(`Comment config option error at key named "${key}"`);
                console.warn(`More info: ${error.message}`);
                result[key] = config[key];
            }
        } else {
            result[key] = config[key];
        }
    });

    return result;
}

/**
 * Support Gitalk and so on.
 */
export const provider = {
    render(frontmatter, commentDomID) {
        const commentDOM = document.createElement("div");
        commentDOM.id = commentDomID;

        const parentDOM = document.querySelector(COMMENT_CONTAINER);
        parentDOM.appendChild(commentDOM);

        import("@waline/client").then(module => {
            var Waline = module.default;
            new Waline({
                ...renderConfig(COMMENT_OPTIONS, { frontmatter }),
                el: `#${commentDomID}`,
            });
        });
    },
    clear(commentDomID) {
        const last = document.querySelector(`#${commentDomID}`);
        if (last) {
            last.remove();
        }
        return true;
    },
};
