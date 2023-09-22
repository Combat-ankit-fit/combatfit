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
         <lastmod>2023-09-03T06:42:44.731Z</lastmod>
         <changefreq>weekly</changefreq>
         
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
        id: '/'
        },
        {
            id: '/vision',
        },   
        {
            id: '/contact-us',
        },
        {
            id: 'detail/clothing/CF-ACT-TS01?name=all-items'
        }
    ];

    const xml = await generateSiteMap(posts);

    ctx.res.write(xml);
    ctx.res.end();

    return {
        props: {},
    };
};
