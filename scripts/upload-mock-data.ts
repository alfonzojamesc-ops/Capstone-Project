import { mockData } from "@/constants/mock-data-structure";
import { db } from "@/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

export const uploadMockData = async (): Promise<void> => {
  try {
    for (const [phaseName, phaseData] of Object.entries(mockData)) {
      const phaseRef = doc(db, "phases", phaseName);
      await setDoc(
        phaseRef,
        {
          max_blocks: phaseData.max_blocks,
        },
        { merge: true }
      );

      console.log(`Phase: ${phaseName}`);

      for (const [blockName, blockData] of Object.entries(phaseData.blocks)) {
        const blockRef = doc(collection(phaseRef, "blocks"), blockName);
        await setDoc(
          blockRef,
          {
            max_plots: blockData.max_plots,
          },
          { merge: true }
        );

        console.log(`Block: ${blockName}`);

        for (const [plotName, plotData] of Object.entries(blockData.plots)) {
          const plotRef = doc(collection(blockRef, "plots"), plotName);
          // @ts-expect-error
          await setDoc(plotRef, plotData, { merge: true });
          console.log(`Plot: ${plotName}`);
        }
      }
    }

    console.log("All mockData uploaded successfully to Firestore!");
  } catch (error) {
    console.error("Error uploading mockData:", error);
    throw error;
  }
};
