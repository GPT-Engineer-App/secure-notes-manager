import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Passwords = () => {
  const [passwords, setPasswords] = useState([]);
  const [service, setService] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addPassword = () => {
    setPasswords([...passwords, { service, username, password }]);
    setService("");
    setUsername("");
    setPassword("");
  };

  const deletePassword = (index) => {
    setPasswords(passwords.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Passwords</h1>
      <div className="mb-4">
        <Input
          placeholder="Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2"
        />
        <Button onClick={addPassword}>Add Password</Button>
      </div>
      <div className="grid gap-4">
        {passwords.map((entry, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{entry.service}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Username: {entry.username}</p>
              <p>Password: {entry.password}</p>
              <Button variant="destructive" onClick={() => deletePassword(index)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Passwords;