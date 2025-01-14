import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col w-full max-w-sm mx-auto space-y-6 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-green-500">Regístrate</h1>
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link className="text-primary hover:text-primary/90 underline underline-offset-4" href="/sign-in">
              Iniciar sesión
            </Link>
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="first_name">Nombre</Label>
            <Input
              name="first_name"
              placeholder="Nombre"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="last_name">Apellido</Label>
            <Input
              name="last_name"
              placeholder="Apellido"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Edad</Label>
            <Input
              name="age"
              placeholder="Edad"
              className="w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="tu@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              name="password"
              placeholder="Tu contraseña"
              minLength={6}
              required
            />
          </div>
          <SubmitButton
            formAction={signUpAction}
            pendingText="Registrando..."
            className="w-full"
          >
            Regístrate
          </SubmitButton>

          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
