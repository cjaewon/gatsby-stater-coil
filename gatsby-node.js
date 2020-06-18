export async function createPages({ actions }) {
    const { createPage } = actions;
    pages.forEach(page => {
        createPage({
            path: page.id.toString(),
            context: page,
            component: '' // ?,
        });
    });
}