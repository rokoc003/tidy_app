export async function createHousehold(households) {
  const response = await fetch('/api/households', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(households),
  });
  const createdHousehold = await response.json();
  return createdHousehold;
}
