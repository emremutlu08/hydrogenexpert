import { getAllContentRelations } from "../lib/content-relations";

const relations = getAllContentRelations();
const failures = relations.filter((relation) => relation.related.length < 3);

for (const relation of relations) {
  console.log(
    `${relation.path} | cluster=${relation.cluster} | persona=${relation.persona} | intent=${relation.intent} | related=${relation.related.length}`,
  );
}

if (failures.length > 0) {
  console.error("Every content relation must expose at least 3 related links.");
  for (const failure of failures) {
    console.error(`- ${failure.path} has ${failure.related.length}`);
  }
  process.exit(1);
}
