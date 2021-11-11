<template>
    <div></div>
</template>

<script>
import { provider } from "./util";

const commentDomID = "vuepress-plugin-comment";
let timer = null;

export default {
    mounted() {
        timer = setTimeout(() => {
            const frontmatter = {
                to: {},
                from: {},
                ...this.$frontmatter,
            };
            clear() && needComment(frontmatter) && renderComment(frontmatter);
        }, 1000);

        this.$router.afterEach((to, from) => {
            if (to && from && to.path === from.path) {
                return;
            }
            const frontmatter = {
                to,
                from,
                ...this.$frontmatter,
            };
            clear() && needComment(frontmatter) && renderComment(frontmatter);
        });
    },
};

/**
 * Clear last page comment dom
 */
function clear(frontmatter) {
    let el = COMMENT_OPTIONS.el || commentDomID;
    if (el.startsWith("#")) {
        el = el.slice(1);
    }
    return provider.clear(el);
}

/**
 * Check if current page needs render comment
 */
function needComment(frontmatter) {
    return frontmatter.comment !== false && frontmatter.comments !== false;
}

/**
 * Render comment dom and append it to container
 */
function renderComment(frontmatter) {
    clearTimeout(timer);

    const parentDOM = document.querySelector(COMMENT_CONTAINER);
    if (!parentDOM) {
        timer = setTimeout(() => renderComment(frontmatter), 200);
        return;
    }

    let el = COMMENT_OPTIONS.el || commentDomID;
    if (el.startsWith("#")) {
        el = el.slice(1);
    }
    return provider.render(frontmatter, el);
}
</script>
