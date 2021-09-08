import client from './sanity';

const postFields = `
title, 
subtitle,
"date": publishedAt,
"author": author->name,
"slug": slug.current,
"mainImage": mainImage.asset->url,
"content": body,
`

export async function getAllPosts() {
   const results =  await client
   .fetch(`*[_type == "post"]{
       ${postFields}
    }`);
   return results;
}

export async function getBlogBySlug(slug) {
    const results = await client
    .fetch(`*[_type == "post" && slug.current == $slug] {
        ${postFields}
    }`, {slug})
    .then(res => res?.[0])

    return results;
}