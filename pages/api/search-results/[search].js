  export default async function handler(req, res) {

    const { search } = req.query;
    const client_id = process.env.RAWG_API_KEY;
  
    const response = await fetch(`https://api.rawg.io/api/games?key=${client_id}&search=${search}`);

    const items = await response.json();
  
   return res.status(200).json({items});
  
  };
  