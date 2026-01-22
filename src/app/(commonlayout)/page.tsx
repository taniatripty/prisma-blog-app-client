import { Button } from "@/components/ui/button";
import { userServices } from "@/services/user.services";





export default async function Home() {
  const{data}= await userServices.getsession()
  console.log(data)
  
  return (
   <div>
   <Button> click me</Button>
   </div>
  );
}
