import { CardComponent } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stack } from "@/components/ui/stack";
import Link from "next/link";

export default function Home() {
  return (
    <CardComponent title="Login" description="Login to your account">
      <form>
        <div className="grid w-full items-center gap-4">
          <Stack>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@provider.com" />
          </Stack>
          <Stack>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </Stack>
        </div>
      </form>
      <Stack direction="row" className="py-4 justify-between" >
        <Button variant="outline">Forgot credentials</Button>
        <Link href="/dashboard">
          <Button>Enter</Button>
        </Link>
      </Stack>
    </CardComponent>
  )
}
