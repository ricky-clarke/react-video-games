import Head from "next/head";
import { useState, useEffect } from "react";
import PageHeader from "../components/page-header/page-header.component";
 import ComingSoonList from "../components/coming_soon_list/coming_soon_list.component";
 import ComingSoonListMonthly from "../components/coming_soon_list_monthly/coming_soon_list_monthly.component";

export default function Upcoming() {

    // Get dates and format
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    const current_month = month.toString().padStart(2, '0');

    // States
    const [monthlyGames, GetMonthlyGames] =  useState(''); // Default
    const [monthSelected, MonthSelectedHandler] = useState(null); // When month selected
    const [newGame, MonthlyGamesHandler] = useState([]) // Get games from selected month
    const [dateActive, dateActiveHandler] = useState(null); // Set button to active
    const [dataActiveFullMonth, dataActiveFullMonthHandler] = useState(null);

    // Will run whenever the 'currentMonth' state changes - get monthly game list
    useEffect(() => {
        
            const fetchData = async () => {
              try {
                const response = await fetch(`/api/coming_soon_filtered/${monthSelected}`);
                const game = await response.json();
                MonthlyGamesHandler(game)
              } catch (error) {
                console.log(error)
              }
            };

            fetchData();
    
    }, [monthSelected, MonthSelectedHandler]);
    
    // Set up a separate effect for default state initialization
    useEffect(() => {
        GetMonthlyGames(current_month);

        // Add button--current class to current month button
        const current_month_btn_id = document.getElementById('date_button--'+current_month);
        current_month_btn_id.classList.add('button--current');
        
    }, []);

    // Update state on click
    const dateClick = (event) => {

        const target = event.target;

        // const selected_month_dates = event.target.getAttribute('dates');

        MonthSelectedHandler(target.getAttribute('dates'));
        dateActiveHandler(target.value);

        dataActiveFullMonthHandler(target.getAttribute('month') + ' ' + target.getAttribute('year'))

        // Remove button--current class from current month button
         document.getElementById('date_button--'+current_month).classList.remove('button--current');
    }

    // Set button state
    const isActive = (buttonId) => {
        return dateActive === buttonId ? 'button--active' : '';
      };

    const getDates = [
        { value: '01', month: 'January'},
        { value: '02', month: 'February'},
        { value: '03', month: 'March'},
        { value: '04', month: 'Apri'},
        { value: '05', month: 'May'},
        { value: '06', month: 'June'},
        { value: '07', month: 'July'},
        { value: '08', month: 'August'},
        { value: '09', month: 'September'},
        { value: '10', month: 'October'},
        { value: '11', month: 'November'},
        { value: '12', month: 'December'}
    ]

    return ( 
        <>
            <Head>
                <title>Coming soon</title>
                <meta name='description' content='Games to be released within the next month'/>
            </Head>
			<PageHeader title="Coming soon" intro={`Released in ${monthSelected ? dataActiveFullMonth : 'Released in the next 30 days'} `}/>
        
            <div className="full_container">
                <div className="flex flex-wrap gap-2 mb-7">    
                    {getDates && getDates?.map((dates, i) => {

                        const str = dates.month;
                        const firstThreeLetters = str.substring(0, 3);
                        const get_year = dates.value > currentDate.getMonth() ? year : year + 1;
                        const get_next_year = dates.value < currentDate.getMonth() ? year + 1 : '';
                        const release_date = (`${get_year}-${dates.value}`);

                            return (
                                <button
                                key={i}
                                dates= {release_date}
                                month={str}
                                year={get_next_year}
                                id={`date_button--${dates.value}`}
                                className={`toggle_button ${isActive(dates.value)}`}
                                value={dates.value}
                                onClick={dateClick}>
                                {firstThreeLetters}
                                </button>
                            )
                        })
                    }       
                </div>

                {monthSelected ? <ComingSoonListMonthly monthly_games={newGame}/> : <ComingSoonList />}

            </div>
        </>
     );

}