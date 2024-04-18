import TicketCard from "../components/TicketCard"

const Dashboard = ()=>{
    const tickets = [
        {
         category: 'Q1 2022',
         color: "red",
         title: "NFT safety 101 video",
         owner: "Ania",
         avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-Kubow-gravatar.jpeg",
         status: "done",
         priority: 5,
         progress: 40,
         description:"Make a video showcasing how to work with NFT safely including how to now if one is not genuine.",
         timestamp:"2022-02-11T07:36:17+0000"
        },
        {
            category: 'Q1 2022',
            color: "red",
            title: "Build and sell AI Modul",
            owner: "Ania",
            avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-Kubow-gravatar.jpeg",
            status: "working on it",
            priority: 2,
            progress: 70,
            description:"Make a video about AI.",
            timestamp:"2022-02-13T07:36:17+0000"
           },
           {
            category: 'Q2 2022',
            color: "blue",
            title: "build a bot",
            owner: "Ania",
            avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-Kubow-gravatar.jpeg",
            status: "done",
            priority: 3,
            progress: 10,
            description:"Make a video about making bot.",
            timestamp:"2022-02-11T07:36:17+0000"
           }
        
]

const colors = [
'rgb(255,179,186)',
'rgb(255,223,186)',
'rgb(255,255,186)',
'rgb(186,225,201)',
'rgb(186,255,255)'
]
//putting all  unique categories into new array
const uniqueCategories = [
    ...new Set(tickets?.map(({category})=>category))
]
console.log(uniqueCategories)
return(
    <div className="dashboard">
        <h1>My projects</h1>
        <div className="ticket-container">
            {tickets && uniqueCategories?.map((uniqueCategory,categoryIndex)=>
            <div key={categoryIndex}>
                <h3>{uniqueCategory}</h3>
                {tickets.filter(ticket=>ticket.category===uniqueCategory)
                .map((filteredTicket,_index)=>(
                    <TicketCard 
                       id={_index}
                       color={colors[categoryIndex ]}
                       ticket={filteredTicket}
                    />
                ))
                }
            </div>
            )}
        </div>  
    </div>
)
}
export default Dashboard