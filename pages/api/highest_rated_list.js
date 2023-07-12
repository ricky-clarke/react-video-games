  // export default async function handler(req, res) {

  //   const client_id = process.env.RAWG_API_KEY;

  //   try {

  //     const response = await fetch(`https://api.rawg.io/api/games?key=${client_id}&ordering=-metacritic&page_size=50`);
      
  //     const data = await response.json();
  
  //     res.status(200).json(data);

  //   } catch (error) {
  //     res.status(500).json({ error: 'An error occurred' });
  //   }
  // }