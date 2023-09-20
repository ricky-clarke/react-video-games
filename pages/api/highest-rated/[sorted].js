  export default async function handler(req, res) {

    const { sorted } = req.query;
    const client_id = process.env.RAWG_API_KEY;
    
    try {

      if(sorted == '0') {
        const response = await fetch(`https://api.rawg.io/api/games?key=${client_id}&page=1&page_size=50&ordering=-metacritic`);
        const data = await response.json();
        res.status(200).json(data);
      }
      else {
        const response = await fetch(`https://api.rawg.io/api/games?key=${client_id}&page=1&page_size=50&ordering=-metacritic&parent_platforms=${sorted}`);
        const data = await response.json();
        res.status(200).json(data);
      }
      

    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  }