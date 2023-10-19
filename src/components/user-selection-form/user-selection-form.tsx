import { USERS } from '@/lib/theme-by-user';
import { userSelectionFormAction } from './user-selection-server-action';

export function UserSelectionForm() {
  return (
    <form action={userSelectionFormAction} 
      method="POST"
      className="flex flex-row items-center justify-between px-4 py-2"
    >
      <label htmlFor="user-select">Select a user:</label>
      <select id="user-select" name="user" defaultValue={USERS[0]}>
        {USERS.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>

      <button type="submit"
        className="bg-black text-white px-4 py-2 rounded"
      >Select</button>
    </form>
  );
}
