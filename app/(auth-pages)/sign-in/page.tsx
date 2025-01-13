import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col w-full max-w-sm mx-auto space-y-6 p-8">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-green-500">Iniciar sesión</h1>
        <p className="text-sm text-muted-foreground">
          ¿No tienes una cuenta?{" "}
          <Link className="text-primary font-medium hover:underline" href="/sign-up">
            Registrate
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="tu@email.com" required />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Contraseña</Label>
            <Link
              className="text-xs text-muted-foreground hover:underline"
              href="/forgot-password"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Tu contraseña"
            required
          />
        </div>

        <SubmitButton pendingText="Iniciando sesión..." formAction={signInAction}>
          Iniciar sesión
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
