"use client";

import { useState } from "react";
import InputField from "@/components/InputField";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Usuário criado: ${name}, ${email}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="text-4xl">🏪</div>
          <h1 className="text-2xl font-bold text-gray-800">Criar Conta</h1>
          <p className="text-gray-500 text-sm">Cadastre-se para começar</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <InputField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
          />
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
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Já tem conta?{" "}
          <a href="/login" className="text-orange-500 font-semibold hover:underline">
            Fazer login
          </a>
        </p>
      </div>
    </div>
  );
}
