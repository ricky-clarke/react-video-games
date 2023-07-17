  export default async function handler(req, res) {

  const query = req.query;
  const client_id = process.env.RAWG_API_KEY;
  const { month } = query;

  const response = await fetch(`https://api.rawg.io/api/games?key=${client_id}&dates=${month}-01,${month}-30&parent_platforms=2,3,7&ordering=released&page_size=50`);

  const items = await response.json();
  
   return res.status(200).json({items});
  
  };
  