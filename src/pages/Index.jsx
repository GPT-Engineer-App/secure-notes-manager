import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Online Voting System</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>User Registration & Login</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Register a new account or login to cast your vote.</p>
          <Button onClick={() => navigate('/auth')}>Go to Auth</Button>
        </CardContent>
      </Card>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Cast Your Vote</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Participate in the ongoing elections by casting your vote.</p>
          <Button onClick={() => navigate('/vote')}>Go to Voting</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>View Voting Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Check the results of the elections.</p>
          <Button onClick={() => navigate('/results')}>Go to Results</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;