"use client";

import { useState } from "react";
import InputField from "@/components/InputField";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login com: ${email}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="text-4xl">🛒</div>
          <h1 className="text-2xl font-bold text-gray-800">Meu Mercado</h1>
          <p className="text-gray-500 text-sm">Entre para acessar o sistema</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <InputField
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
          />
          <InputField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Não tem conta?{" "}
          <a href="/register" className="text-green-600 font-semibold hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
