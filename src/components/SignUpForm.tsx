'use client'
import { useRouter } from "next/navigation"
import Link from "next/link";
import { useState } from "react"
import TypographyMuted from "./text/TypographyMuted"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function SignUpForm() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passowords do not match");
      return;
    }

    setError("");
  };

  const passwordsMatch = password === confirmPassword && password.length > 0;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>
          Enter your details below to get start entering into baseline
        </CardDescription>
        <CardAction>
          <Link href="/Account">
            <TypographyMuted>
              Login
            </TypographyMuted>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2 pb-5">
            <div className="flex items-center">
              <Label htmlFor="password">First Name</Label>
            </div>
            <Input required />
          </div>
          <div className="grid gap-2 pb-5">
            <div className="flex items-center">
              <Label htmlFor="password">Last Name</Label>
            </div>
            <Input required />
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Create Password</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  )
}
