import React from 'react'

// function ViewPolicies({ id }) {
//   if (!id) {
//       return "Please select a policy to view";
//   }
//   const [policy, setPolicy] = useState({
//         name: "",
//         description: "",
//   });
//     useEffect(() => {
//       const fetchPolicy = async () => {
//           const response = await fetch(`/api/policies/${id}`); 
//           const fetchedPolicy =  await response.json();
//           setPolicy(fetchedPolicy);
//       }; 
//       fetchPolicy();
//   }, [id]);
//   return (<div>
//       <div>Name: {policy.name}</div>
//       <div>Description: {policy.description}</div>
//   </div>);
// }

const Dashboard = () => {
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
