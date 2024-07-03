import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Notes & Passwords Manager</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Manage Your Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Create, edit, and delete your notes easily.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Passwords</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Store and manage your passwords securely.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;