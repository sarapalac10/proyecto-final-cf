"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const first_name = formData.get("first_name")?.toString();
  const last_name = formData.get("last_name")?.toString();
  const age = Number(formData.get("age")?.toString());

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email y contraseña son requeridos",
    );
  }

  // Guarda el usuario en la tabla auth.users
  const { error, data: user } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  const { error: userError, data: userData } = await supabase.from('users').insert({
    id: user?.user?.id,
    first_name: first_name,
    last_name: last_name,
    age: age,
  })

  // console.log(userError, userData);

  if (userError) {
    console.error(userError.code + " " + userError.message);
    return encodedRedirect("error", "/sign-up", userError.message);
  }

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/sign-up",
      "¡Gracias por registrarte en Alegría Gatuna! Por favor, verifica tu correo electrónico para activar tu cuenta.",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const createVolunteerAction = async (formData: FormData) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from('volunteer').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      edad: formData.get('edad'),
      availability: formData.get('availability'),
      skills: formData.get('skills'),
      reason: formData.get('reason'),
    });

    if (error) {
      console.log(error);
      return false;
    }

    return true;

  } catch (error) {
    console.log(error);
  }
}

export const updateVolunteerAction = async (formData: FormData) => {
  try {
    const supabase = await createClient();
    const id = formData.get('id');

    const { error } = await supabase.from('volunteer').update({
      name: formData.get('name'),
      email: formData.get('email'),
      edad: Number(formData.get('edad')),
      availability: formData.get('availability'),
      skills: formData.get('skills'),
      reason: formData.get('reason'),
    }).eq('id', id);

    if (error) {
      console.log(error);
      return false;
    }

    return true;

  } catch (error) {
    console.log(error);
    return false;
  }
}
