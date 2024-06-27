export default function Sitemap() {
    return null;
}

const EXTERNAL_DATA_URL = 'https://combatfit.in/';
async function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://combatfit.in/</loc>
         <lastmod>2023-09-22T11:22:01+00:00</lastmod>
         <changefreq>weekly</changefreq>
         
       </url>
      
       ${posts
           .map(({ id }) => {
               return `
         <url>
             <loc>${`${EXTERNAL_DATA_URL}${id}`}</loc>
             <lastmod>2023-09-22T11:22:01+00:00</lastmod>
             <changefreq>weekly</changefreq>
         </url>
       `;
           })
           .join('')}
     </urlset>
   `;
}

export const getServerSideProps = async (ctx) => {
    ctx.res.setHeader('Content-Type', 'application/xml');
    const categories = [
        'clothing',
        'beer',
        'posters',
        'notepad',
        'coffee-mugs',
        'whiskey',
    ];
    const clothingCategories = ['active', 'tactical', 'inspire', 'winter'];

    const dynamicUrl = [];
    await Promise.allSettled(
        categories.map(async (category) => {
            if (category === 'clothing') {
                clothingCategories.forEach((category) =>
                    dynamicUrl.push(`clothing-category?item=${category}`)
                );
            } else {
                dynamicUrl.push(`items/${category}`);
            }

            return new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch(
                        `${EXTERNAL_DATA_URL}api/get-items?id=${category}`
                    ).then((response) => response.json());
                    //console.log(response);

                    response.map((item) =>
                        dynamicUrl.push(
                            `detail/${
                                category === 'clothing' ? 'clothing/' : ''
                            }${item.identifier}?name=${
                                category === 'clothing' ? 'all-items' : category
                            }`
                        )
                    );

                    resolve();
                } catch (e) {
                    console.log(category + ' : ' + e);
                    reject(category + ' : ' + e);
                }
            });
        })
    );

    const posts = [
        {
            id: 'vision',
        },
        {
            id: 'contact-us',
        },
        {
            id: 'detail/clothing/CF-ACT-TS01?name=all-items',
        },
        ...dynamicUrl.map((url) => ({ id: url })),
    ];

    const xml = await generateSiteMap(posts);

    ctx.res.write(xml);
    ctx.res.end();

    return {
        props: {},
    };
};
