import { DBData, dbWrite } from "./write";

export async function dbUpdate(
  mutator: (data: DBData) => void | Promise<void>
): Promise<void> {
  // Always merge (no overwrite)
  return dbWrite(mutator, false);
}
