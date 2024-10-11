"use strict";
// Create an interface `Team` that contains a readonly `name` and `members` array.
// - Use `Partial` to allow updates to the `members`.
// - Return type: `Team` after applying partial updates.
// Partial<Team>
function updateTeam(team, updates) {
    const newUpdate = Object.assign({}, team, updates);
    console.log(newUpdate);
}
// Expected output:
const team = { name: "Dev Team", members: [{ name: "Alice", role: "Developer" }] };
updateTeam(team, { members: [{ name: "Bob", role: "Designer" }] });
// { name: "Dev Team", members: [{ name: "Bob", role: "Designer" }] }
