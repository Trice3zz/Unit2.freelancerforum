class Freelancer {
    constructor (name, occupation, price) {
      this.name = name;
      this.occupation = occupation;
      this.price = price;
    }
  }
  
  const Alice = new Freelancer ('Alice', 'Teacher', 30);
  const Bob = new Freelancer ('Bob', 'Writer', 50);
  const Carol = new Freelancer ('Carol', 'Programmer', 70);
  
  const freelancers = [Alice, Bob, Carol];
  
  const names = ['Zoe', 'Madison', 'Kennedy', 'Darius'];
  const occupations = [
    'Editor',
    'Product Manager',
    'QA Tester',
    'Design Specialist',
  ];
  
  const addFreelancer = freelancer => {
  
    const nameIndex = Math.floor (Math.random() * names.length);
   
    const occupationIndex = Math.floor (Math.random() * occupations.length);
    
    const startingPrice = Math.floor (Math.random() * 13 * 10) + 30;

    const newFreelancer = new Freelancer (
      names[nameIndex],
      occupations[occupationIndex],
      startingPrice
    );
    freelancers.push (newFreelancer);
  };
  const getAverage = freelancer => {
    return (freelancer.reduce (acc, this.price), 0) / freelancer.length;
  };
  
  const renderFreelancers = () => {
    freelancers.map = () => {
      const freelancerDomElements = document.createElement ('li');
      freelancerDomElements.innerHTML = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}`;
      return freelancerDomElements;
    };
    const freelancerListElement = document.getElementById('#freelancers');
    freelancerListElement.replaceChildren(...freelancerDomElements);
  };
  
  renderFreelancers();
  setInterval(addFreelancer, 1000);