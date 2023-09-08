import { getShoppingCart } from "./fakeDb";

const loadAppliedJob=async()=>{
    const loadedJobsFeatures=await fetch('jobFeatured.json');
    const jobsFeatures=await loadedJobsFeatures.json();
    const storedData=getShoppingCart();
    let savedData=[];
    for(const id in storedData){
        const addedData=jobsFeatures.find(jobFeatures=>jobFeatures.id===id);
        if(addedData){
            const quantity = storedData[id] || 1;
            jobsFeatures.quantity=quantity;
            savedData.push(addedData);
        }
       
    }
    return savedData;

}






export default loadAppliedJob;