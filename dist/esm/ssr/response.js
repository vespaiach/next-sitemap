/**
 * Send XML response
 * @param ctx
 * @param content
 * @returns
 */
export const withXMLResponse = (ctx, content) => {
    if (ctx?.res) {
        const { res } = ctx;
        // Set header
        res.setHeader('Content-Type', 'text/xml');
        // Write the sitemap context to resonse
        res.write(content);
        // End response
        res.end();
    }
    // Empty props
    return {
        props: {},
    };
};
