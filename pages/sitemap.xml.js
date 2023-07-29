export default function Sitemap() {
    return null;
}

async function generateSitemap() {
    const siteMapArr = [
        {
            url: 'https://combatfit.in/',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/contact-us',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/vision',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/clothing-category?item=tactical',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/clothing-category?item=winter',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/items/coffee-mugs',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/items/beer',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/items/posters',
            lastModified: new Date(),
        },
        {
            url: 'https://combatfit.in/items/whiskey',
            lastModified: new Date(),
        },
    ];

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     
        ${siteMapArr
            ?.map((page) => {
                return `<url>

            <loc>${page.url}</loc>
                <lastmod>${page.lastModified}</lastmod>
            </url>`;
            })
            .join('')}
      </urlset>`;
}

export const getServerSideProps = async (ctx) => {
    ctx.res.setHeader('Content-Type', 'application/xml');
    const xml = await generateSitemap();

    ctx.res.write(xml);
    ctx.res.end();

    return {
        props: {},
    };
};
