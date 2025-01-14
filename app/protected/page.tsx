import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from 'next/link';

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">¡Hola {user?.email}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Adopciones</h2>
          <p className="text-gray-600 mb-4">Revisa los gatitos disponibles para adoptar</p>
          <Link href="/adopciones" className="text-blue-500 hover:text-blue-700">Ver todos los gatitos →</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Donaciones</h2>
          <p className="text-gray-600 mb-4">Haz una donación para ayudar a los gatitos</p>
          <Link href="/donaciones" className="text-blue-500 hover:text-blue-700">Ir a donaciones →</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Eventos</h2>
          <p className="text-gray-600 mb-4">Participa en eventos para ayudar a los gatitos</p>
          <Link href="/evento" className="text-blue-500 hover:text-blue-700">Ver eventos →</Link>
        </div>
      </div>
    </div>
  );
}
