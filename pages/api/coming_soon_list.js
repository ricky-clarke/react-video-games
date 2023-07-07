  export default async function handler(req, res) {

    const client_id = process.env.RAWG_API_KEY;

    const currentDate = new Date();
    const todays_date = currentDate.toJSON().slice(0, 10);

    const oneMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
    const oneMonthFormatted = oneMonthAgo.toJSON().slice(0, 10);


    try {

      const response = await fetch(`https://api.rawg.io/api/games?key=${client_id}&dates=${todays_date},${oneMonthFormatted}&parent_platforms=2,3,7&ordering=released&page_size=50`);
      
      const data = await response.json();
  
      res.status(200).json(data);

    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  }