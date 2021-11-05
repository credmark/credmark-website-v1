import { getAllMediaPosts } from "../../lib/api";

export default async function getMediaPosts(req, res){
    const data = await getAllMediaPosts();
    res.status(200).json(data);
}