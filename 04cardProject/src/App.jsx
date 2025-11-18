import Card from './components/Card'
const App = () => {
  const jobOpenings = [
  {
    brandLogo:"https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" ,
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
    companyName: "Google",
    datePosted: "10 weeks ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo:"https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo:"https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo:"https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png", 
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "2 days ago",
    post: "Database Administrator",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
    companyName: "IBM",
    datePosted: "8 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ee-dA8DB4UOCZtBfn56sohmyH6ivcwFqgw&s",
    companyName: "Adobe",
    datePosted: "9 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  }
];
console.log(jobOpenings)

 return (
  <div className="parent">
    {jobOpenings.map(function(elem,idx){

     return <div key={idx}>
     <Card brandLogo={elem.brandLogo} company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2}
     date={elem.datePosted} pay={elem.pay} location={elem.location} />
      </div>
   })}
  </div>
 ) 
  
}

export default App
