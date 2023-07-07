export default async function handler(req, res) {

    const query = req.query;
    const { slug } = query;
    const client_id = process.env.RAWG_API_KEY;
  
    const response = await fetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=${client_id}`);
  
    const items = await response.json();
  
   return res.status(200).json({items});
  
  };
  