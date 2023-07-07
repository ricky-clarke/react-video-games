export default function handler(req, res) {
    // Fetch data from your API or any other source
    const data = { 
      name: 'RICKY',
      message: 'Hello from API'
     };
  
    // Send the data as a response
    res.status(200).json(data);
  }