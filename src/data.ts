import {_data} from "../interfaces"

// -------GENERATES DATES-------

let dates = []

function last7Days() {
    let today = new Date();
    let lastTenDays0 = today.toLocaleDateString().split("/").slice(0, 2).join("/");
    let lastTenDays = [lastTenDays0]
    let dateOffset;
    for (let i = 1; i < 10; i++) {
      dateOffset = (24 * 60 * 60 * 1000) //Reset the value evry iteration
      dateOffset *= i;
      today = new Date(); //Reset the day value every iteration
      today.setTime(today.getTime() - dateOffset);

      let lastTenDaysLoop0 = today.toLocaleDateString().split("/");
      let lastTenDaysLoop1 = lastTenDaysLoop0.slice(0,2);
      let lastTenDaysLoop = lastTenDaysLoop1.join("/")

      lastTenDays.push(lastTenDaysLoop);
    }
    return lastTenDays.reverse();
  }
  dates = last7Days()

// ----------------------------


export const data: _data = [
    {
        name: "Apple",
        symbol: "AAPL",
        id: Math.random(),
        labels: dates,
        posts: Math.floor(Math.random() * (25 - 3) + 3),
        datasets: [
            {
                data: [
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100,
                    Math.random() * (200 - 100) + 100
                ]
            }
        ]
        
    },
    {
        name: "Meta",
        symbol: "META",
        id: Math.random(),
        labels: dates,
        posts: Math.floor(Math.random() * (60 - 13) + 13),
        datasets: [
            {
                data: [
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                    Math.random() * (5000 - 8000) + 5000,
                ]
            }
        ]  
    },
    {
        name: "Microsoft",
        symbol: "MSFT",
        id: Math.random(),
        labels: dates,
        posts: Math.floor(Math.random() * (150 - 10) + 10),
        datasets: [
            {
                data: [
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                    Math.random() * (1500 - 5000) + 5000,
                ]
            }
        ]
    },
    {
        name: "Tesla",
        symbol: "TSLA",
        id: Math.random(),
        labels: dates,
        posts: Math.floor(Math.random() * (300 - 20) + 20),
        datasets: [
            {
                data: [
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                    Math.random() * (2000 - 10000) + 10000,
                ]
            }
        ]
    },
    {
        name: "Amazon",
        symbol: "AMZN",
        id: Math.random(),
        labels: dates,
        posts: Math.floor(Math.random() * (200 - 5) + 5),
        datasets: [
            {
                data: [
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                    Math.random() * (20000 - 50000) + 50000,
                ]
            }
        ]
    }
]