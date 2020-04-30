/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <link href="https://admin.chatcompose.com/static/EN/global/export/css/main.0ec6acf6.css" rel="stylesheet"/>,
        <script async type="text/javascript" src="https://admin.chatcompose.com/static/EN/global/export/js/main.dec259c7.js" user="enrique"></script>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('js/plugins.js')}/>
            <script src={safePrefix('js/init.js')}/>
            <script src={safePrefix('js/main.js')}/>
            
        </React.Fragment>
    ]);

};
