"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context"; // make sure this path is correct
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BroadbandPlansManager } from "@/components/admin/broadband-plans-manager";
import { OTTPlansManager } from "@/components/admin/ott-plans-manager";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AdminPage() {
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError("");

    try {
      await login(email, password);
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
              <Button type="submit" className="w-full" disabled={isLoggingIn}>
                {isLoggingIn ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : null}
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">
                Logout
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to log out of the admin dashboard?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={logout}>
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <Tabs defaultValue="broadband" className="space-y-4">
          <TabsList>
            <TabsTrigger value="broadband">Broadband Plans</TabsTrigger>
            <TabsTrigger value="ott">OTT Plans</TabsTrigger>
          </TabsList>
          <TabsContent value="broadband">
            <BroadbandPlansManager />
          </TabsContent>
          <TabsContent value="ott">
            <OTTPlansManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
