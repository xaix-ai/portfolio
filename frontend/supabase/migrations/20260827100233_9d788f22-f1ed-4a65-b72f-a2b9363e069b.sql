CREATE TABLE public.guest_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 60),
  email TEXT CHECK (email IS NULL OR char_length(email) <= 120),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 1 AND 800),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.guest_messages TO anon;
GRANT SELECT, INSERT ON public.guest_messages TO authenticated;
GRANT ALL ON public.guest_messages TO service_role;

ALTER TABLE public.guest_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read guest messages"
  ON public.guest_messages FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can leave a guest message"
  ON public.guest_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);