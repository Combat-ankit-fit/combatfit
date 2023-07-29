export default function Sitemap() {
    return null;
}

async function generateSiteMap(posts) {
    const EXTERNAL_DATA_URL = 'https://combatfit.in/';
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://combatfit.in/</loc>
       </url>
      
       ${posts
           .map(({ id }) => {
               return `
         <url>
             <loc>${`${EXTERNAL_DATA_URL}${id}`}</loc>
         </url>
       `;
           })
           .join('')}
     </urlset>
   `;
}

export const getServerSideProps = async (ctx) => {
    ctx.res.setHeader('Content-Type', 'application/xml');
    // const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
    // const request = await fetch(EXTERNAL_DATA_URL);
    const posts = [
        {
            id: 'vision',
        },
        {
            id: 'clothing-category?item=active',
        },
        {
            id: 'clothing-category?item=tactical',
        },
        {
            id: 'clothing-category?item=inspire',
        },
        {
            id: 'clothing-category?item=winter',
        },
        {
            id: 'contact-us',
        },
        {
            id: 'items/coffee-mugs',
        },
        {
            id: 'items/beer',
        },
        {
            id: 'items/posters',
        },
        {
            id: 'items/whiskey',
        },
    ];

    const xml = await generateSiteMap(posts);

    ctx.res.write(xml);
    ctx.res.end();

    return {
        props: {},
    };
};
