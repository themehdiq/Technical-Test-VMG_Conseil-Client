import { createClient } from "@supabase/supabase-js";

// Declarer un constant supabase qui permet d'appeler l instance de plateforme supabase

export const supabase = createClient(
  "https://hhqtbjgkoiqnocadynhn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocXRiamdrb2lxbm9jYWR5bmhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1OTY4NTUsImV4cCI6MjAzMTE3Mjg1NX0.wU2BIzQHSMsALZONPm4wIwZWYSesuY5KAByCdpkDiNI"
);
