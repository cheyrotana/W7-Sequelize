import { Student, Class } from "../model/model.js";

async function createSampleData() {
  const ai = await Class.create({ name: "Artificial Intelligence" });
  const cs = await Class.create({ name: "Computer Security" });
  const ds = await Class.create({ name: "Data Science" });

  await Student.create({ name: "Lina", ClassId: ai.id });
  await Student.create({ name: "Dara", ClassId: ai.id });

  await Student.create({ name: "Chenda", ClassId: cs.id });
  await Student.create({ name: "Ravuth", ClassId: cs.id });

  await Student.create({ name: "Sokha", ClassId: ds.id });
  await Student.create({ name: "Mony", ClassId: ds.id });

}

createSampleData().catch(console.error);