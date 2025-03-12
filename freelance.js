const freelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50},
    {name: "Carol", occupation: "Programmer", startingPrice: 70}
    ]
    const freelancerList = document.getElementById("freelancer-list")
    const updateAverageStartingPrice = () => {
        
        const totalStartingPrice = freelancers.reduce((sum, freelancer)=>{return sum+freelancer.startingPrice},0);
        const averageStartingPrice = totalStartingPrice/freelancers.length;
    
        let averagePriceElement = document.getElementById('average-price')
    
        if (averagePriceElement){
            averagePriceElement.innerHTML = `Average starting price: $${averageStartingPrice.toFixed(2)}`;
        }
        else{
            averagePriceElement = document.createElement("p");
            averagePriceElement.id = "average-price";
            averagePriceElement.innerHTML = `Average starting price: $${averageStartingPrice.toFixed(2)}`;
            document.body.appendChild(averagePriceElement);
        }
    };
    
        const addNewFreelancer = () => {
            const occupations = ["writer","programmer","designer","developer","quality"];
            const names = ["Madison", "Darius","Kennedy","Rakaya","Zoe","Mariah","Jade","Jaden"];
            const newFreelancer = {
                name: names[Math.floor(Math.random()*names.length)],
                occupation: occupations[Math.floor(Math.random()*occupations.length)],
                startingPrice: Math.floor(Math.random()*101)+50
            };
            freelancers.push(newFreelancer);
    
        const listItem = document.createElement("li")
        listItem.innerHTML = `${newFreelancer.name} - ${newFreelancer.occupation}(starting price: $${newFreelancer.startingPrice})`;
        freelancerList.appendChild(listItem);
    
        updateAverageStartingPrice();
        };
    
        for (let i = 0; i < freelancers.length; i++){
            const freelancer = freelancers[i]
            const listItem = document.createElement("li");
            listItem.innerHTML = `${freelancer.name} - ${freelancer.occupation}(starting price:
            $${freelancer.startingPrice})`;
            freelancerList.appendChild(listItem);
        }
        updateAverageStartingPrice();
        
        
    
        
        setInterval(addNewFreelancer, 2000)