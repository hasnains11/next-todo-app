import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Welcome to Todo App</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Experience the next level of productivity with our innovative platform.
      </p>
      <Link href="/api/auth/signin" passHref>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          Sign In
        </Button>
      </Link>
    </div>
  )
}

