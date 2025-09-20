"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Login com: ${email}`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl">🛒</div>
            <CardTitle className="text-center">Meu Mercado</CardTitle>
            <p className="text-gray-500 text-sm">Entre para acessar o sistema</p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Não tem conta?{" "}
            <a href="/register" className="text-green-600 font-semibold hover:underline">
              Cadastre-se
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
