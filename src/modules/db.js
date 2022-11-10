export function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqeXpuYWh2dWp4Y2R4cmZsZmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NzUsImV4cCI6MTk4MjE3NDc3NX0.Q_odFvLUcCYUvC8rHHl4HOfIdFZaCHCKuOzo-3B7cuQ";
  const url = "https://jjyznahvujxcdxrflfbc.supabase.co";

  fetch(url + "/rest/v1/mini-shop", {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: " return=representation",
    },
    body: JSON.stringify(payload),
  })
    .then()
    .then();
}
