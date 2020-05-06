/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TPRH929');
      `
        }}
      />,
      <link href="https://admin.chatcompose.com/static/EN/global/export/css/main.0ec6acf6.css" rel="stylesheet"/>,
        <script async type="text/javascript" src="https://admin.chatcompose.com/static/EN/global/export/js/main.dec259c7.js" user="enrique"></script>
      
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('js/plugins.js')}/>
            <script src={safePrefix('js/init.js')}/>
            <script src={safePrefix('js/main.js')}/>
            
        </React.Fragment>,
        <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TPRH929"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
        }}
    />
    ]);

};
